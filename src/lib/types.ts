/**
 * Core data types for the lottery tracking application
 */

import { LotteryGameType, LotteryNumbers } from './lottery';

export type MatchResult = 'no-match' | 'matched-2' | 'matched-3' | 'matched-4' | 'matched-5' | 'jackpot';

export interface LotteryEncounter {
  id: string;
  date: Date;
  gameType: LotteryGameType;
  numbers: LotteryNumbers;
  cost: number;
  result?: MatchResult;
  winAmount?: number;
  notes?: string;
}

export interface PatternStats {
  totalEncounters: number;
  totalSpent: number;
  totalWinnings: number;
  netResult: number;
  winRate: number;
  mostFrequentNumbers: { number: number; frequency: number }[];
  favoriteGame: LotteryGameType;
  averageSpendingPerWeek: number;
}

/**
 * Calculates pattern statistics from encounter history
 */
export function calculatePatternStats(encounters: LotteryEncounter[]): PatternStats {
  if (encounters.length === 0) {
    return {
      totalEncounters: 0,
      totalSpent: 0,
      totalWinnings: 0,
      netResult: 0,
      winRate: 0,
      mostFrequentNumbers: [],
      favoriteGame: 'powerball',
      averageSpendingPerWeek: 0
    };
  }

  const totalSpent = encounters.reduce((sum, e) => sum + e.cost, 0);
  const totalWinnings = encounters.reduce((sum, e) => sum + (e.winAmount || 0), 0);
  const encountersWithResults = encounters.filter(e => e.result).length;
  const encountersWithWins = encounters.filter(e => (e.winAmount || 0) > 0).length;

  // Calculate most frequent numbers
  const numberFrequency = new Map<number, number>();
  encounters.forEach(encounter => {
    encounter.numbers.mainNumbers.forEach(num => {
      numberFrequency.set(num, (numberFrequency.get(num) || 0) + 1);
    });
    if (encounter.numbers.specialNumber) {
      numberFrequency.set(
        encounter.numbers.specialNumber,
        (numberFrequency.get(encounter.numbers.specialNumber) || 0) + 1
      );
    }
  });

  const mostFrequentNumbers = Array.from(numberFrequency.entries())
    .map(([number, frequency]) => ({ number, frequency }))
    .sort((a, b) => b.frequency - a.frequency)
    .slice(0, 5);

  // Calculate favorite game
  const gameFrequency = new Map<LotteryGameType, number>();
  encounters.forEach(encounter => {
    gameFrequency.set(
      encounter.gameType,
      (gameFrequency.get(encounter.gameType) || 0) + 1
    );
  });

  const favoriteGame = Array.from(gameFrequency.entries())
    .sort((a, b) => b[1] - a[1])[0]?.[0] || 'powerball';

  // Calculate average spending per week
  const sortedDates = encounters.map(e => e.date.getTime()).sort();
  const firstDate = sortedDates[0];
  const lastDate = sortedDates[sortedDates.length - 1];
  const weeksDiff = Math.max(1, (lastDate - firstDate) / (1000 * 60 * 60 * 24 * 7));
  const averageSpendingPerWeek = totalSpent / weeksDiff;

  return {
    totalEncounters: encounters.length,
    totalSpent,
    totalWinnings,
    netResult: totalWinnings - totalSpent,
    winRate: encountersWithResults > 0 ? (encountersWithWins / encountersWithResults) * 100 : 0,
    mostFrequentNumbers,
    favoriteGame,
    averageSpendingPerWeek
  };
}

/**
 * Formats currency values
 */
export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

/**
 * Formats date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
