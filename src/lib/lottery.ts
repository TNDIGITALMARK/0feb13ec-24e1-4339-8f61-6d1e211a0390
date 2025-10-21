/**
 * Lottery Number Generation System
 * Provides utilities for generating random lottery numbers for various game types
 */

export type LotteryGameType = 'powerball' | 'mega-millions' | 'pick-6' | 'pick-3';

export interface LotteryNumbers {
  mainNumbers: number[];
  specialNumber?: number;
  specialNumberName?: string;
}

export interface LotteryGame {
  id: LotteryGameType;
  name: string;
  mainCount: number;
  mainRange: [number, number];
  specialCount?: number;
  specialRange?: [number, number];
  specialName?: string;
}

export const LOTTERY_GAMES: Record<LotteryGameType, LotteryGame> = {
  'powerball': {
    id: 'powerball',
    name: 'Powerball',
    mainCount: 5,
    mainRange: [1, 69],
    specialCount: 1,
    specialRange: [1, 26],
    specialName: 'Powerball'
  },
  'mega-millions': {
    id: 'mega-millions',
    name: 'Mega Millions',
    mainCount: 5,
    mainRange: [1, 70],
    specialCount: 1,
    specialRange: [1, 25],
    specialName: 'Mega Ball'
  },
  'pick-6': {
    id: 'pick-6',
    name: 'Pick 6',
    mainCount: 6,
    mainRange: [1, 49]
  },
  'pick-3': {
    id: 'pick-3',
    name: 'Pick 3',
    mainCount: 3,
    mainRange: [0, 9]
  }
};

/**
 * Generates a random integer between min and max (inclusive)
 */
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates unique random numbers within a range
 */
function generateUniqueNumbers(count: number, min: number, max: number): number[] {
  const numbers = new Set<number>();

  while (numbers.size < count) {
    numbers.add(getRandomInt(min, max));
  }

  return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * Generates lottery numbers for a specific game type
 */
export function generateLotteryNumbers(gameType: LotteryGameType): LotteryNumbers {
  const game = LOTTERY_GAMES[gameType];

  const mainNumbers = generateUniqueNumbers(
    game.mainCount,
    game.mainRange[0],
    game.mainRange[1]
  );

  let specialNumber: number | undefined;
  if (game.specialCount && game.specialRange) {
    specialNumber = getRandomInt(game.specialRange[0], game.specialRange[1]);
  }

  return {
    mainNumbers,
    specialNumber,
    specialNumberName: game.specialName
  };
}

/**
 * Formats lottery numbers as a display string
 */
export function formatLotteryNumbers(numbers: LotteryNumbers): string {
  const mainStr = numbers.mainNumbers.join(' - ');

  if (numbers.specialNumber !== undefined && numbers.specialNumberName) {
    return `${mainStr} | ${numbers.specialNumberName}: ${numbers.specialNumber}`;
  }

  return mainStr;
}

/**
 * Gets the cost for a lottery game (mock data)
 */
export function getGameCost(gameType: LotteryGameType): number {
  const costs: Record<LotteryGameType, number> = {
    'powerball': 2,
    'mega-millions': 2,
    'pick-6': 1,
    'pick-3': 1
  };

  return costs[gameType];
}
