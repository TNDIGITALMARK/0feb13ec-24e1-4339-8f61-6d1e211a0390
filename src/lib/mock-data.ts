/**
 * Mock data for lottery encounters and history
 */

import { LotteryEncounter } from './types';

export const MOCK_ENCOUNTERS: LotteryEncounter[] = [
  {
    id: '1',
    date: new Date('2024-03-15'),
    gameType: 'powerball',
    numbers: {
      mainNumbers: [15, 23, 42, 51, 67],
      specialNumber: 12,
      specialNumberName: 'Powerball'
    },
    cost: 2,
    result: 'no-match',
    winAmount: 0
  },
  {
    id: '2',
    date: new Date('2024-03-18'),
    gameType: 'mega-millions',
    numbers: {
      mainNumbers: [8, 19, 33, 44, 58],
      specialNumber: 7,
      specialNumberName: 'Mega Ball'
    },
    cost: 2,
    result: 'matched-2',
    winAmount: 4
  },
  {
    id: '3',
    date: new Date('2024-03-20'),
    gameType: 'pick-6',
    numbers: {
      mainNumbers: [5, 18, 27, 36, 41, 49]
    },
    cost: 1,
    result: 'matched-3',
    winAmount: 10
  },
  {
    id: '4',
    date: new Date('2024-03-22'),
    gameType: 'powerball',
    numbers: {
      mainNumbers: [3, 17, 29, 45, 62],
      specialNumber: 18,
      specialNumberName: 'Powerball'
    },
    cost: 2,
    result: 'no-match',
    winAmount: 0
  },
  {
    id: '5',
    date: new Date('2024-03-25'),
    gameType: 'pick-3',
    numbers: {
      mainNumbers: [4, 7, 9]
    },
    cost: 1,
    result: 'no-match',
    winAmount: 0
  },
  {
    id: '6',
    date: new Date('2024-03-27'),
    gameType: 'mega-millions',
    numbers: {
      mainNumbers: [12, 24, 35, 47, 59],
      specialNumber: 15,
      specialNumberName: 'Mega Ball'
    },
    cost: 2,
    result: 'matched-2',
    winAmount: 4
  },
  {
    id: '7',
    date: new Date('2024-03-29'),
    gameType: 'powerball',
    numbers: {
      mainNumbers: [6, 21, 38, 52, 64],
      specialNumber: 9,
      specialNumberName: 'Powerball'
    },
    cost: 2,
    result: 'no-match',
    winAmount: 0
  },
  {
    id: '8',
    date: new Date('2024-04-01'),
    gameType: 'pick-6',
    numbers: {
      mainNumbers: [11, 22, 33, 39, 44, 48]
    },
    cost: 1,
    result: 'matched-2',
    winAmount: 5
  }
];
