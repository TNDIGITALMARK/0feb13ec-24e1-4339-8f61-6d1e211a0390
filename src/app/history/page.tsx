/**
 * Encounter History Tracker Page
 * Track lottery purchases and results
 */

'use client';

import React, { useState } from 'react';
import { Plus, Calendar, DollarSign, Trophy } from 'lucide-react';
import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { LotteryButton } from '@/components/ui/lottery-button';
import { LotteryBall } from '@/components/ui/lottery-ball';
import { MOCK_ENCOUNTERS } from '@/lib/mock-data';
import { LOTTERY_GAMES } from '@/lib/lottery';
import { formatDate, formatCurrency } from '@/lib/types';
import type { LotteryEncounter, MatchResult } from '@/lib/types';

const RESULT_LABELS: Record<MatchResult, string> = {
  'no-match': 'No Match',
  'matched-2': 'Matched 2',
  'matched-3': 'Matched 3',
  'matched-4': 'Matched 4',
  'matched-5': 'Matched 5',
  'jackpot': 'Jackpot!'
};

export default function HistoryPage() {
  const [encounters, setEncounters] = useState<LotteryEncounter[]>(MOCK_ENCOUNTERS);
  const [showAddForm, setShowAddForm] = useState(false);

  const totalSpent = encounters.reduce((sum, e) => sum + e.cost, 0);
  const totalWinnings = encounters.reduce((sum, e) => sum + (e.winAmount || 0), 0);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 uppercase">Encounter History</h1>
            <p className="text-xl text-muted-foreground">
              Track your lottery journey and results
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full lottery-gradient-gold flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Total Encounters
                  </p>
                  <p className="text-3xl font-bold">{encounters.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full lottery-gradient-gold flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Total Spent
                  </p>
                  <p className="text-3xl font-bold">{formatCurrency(totalSpent)}</p>
                </div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full lottery-gradient-gold flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Total Winnings
                  </p>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(totalWinnings)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add New Button */}
          <div className="mb-8">
            <LotteryButton
              onClick={() => setShowAddForm(!showAddForm)}
              variant="primary"
            >
              <Plus className="w-5 h-5 inline mr-2" />
              Add New Encounter
            </LotteryButton>
          </div>

          {/* Encounters List */}
          <div className="space-y-6">
            {encounters.map((encounter) => (
              <div
                key={encounter.id}
                className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 lottery-card-shadow hover:lottery-card-shadow-hover transition-all duration-300"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* Date & Game Info */}
                  <div className="md:col-span-3">
                    <p className="text-sm text-muted-foreground mb-1">
                      {formatDate(encounter.date)}
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      {LOTTERY_GAMES[encounter.gameType].name}
                    </p>
                  </div>

                  {/* Numbers */}
                  <div className="md:col-span-5">
                    <div className="flex flex-wrap gap-2">
                      {encounter.numbers.mainNumbers.map((num, idx) => (
                        <LotteryBall key={idx} number={num} size="sm" />
                      ))}
                      {encounter.numbers.specialNumber && (
                        <LotteryBall
                          number={encounter.numbers.specialNumber}
                          size="sm"
                          isSpecial
                        />
                      )}
                    </div>
                  </div>

                  {/* Cost & Result */}
                  <div className="md:col-span-4 text-right">
                    <p className="text-sm text-muted-foreground mb-1">
                      Cost: {formatCurrency(encounter.cost)}
                    </p>
                    {encounter.result && (
                      <div className="space-y-1">
                        <p className={`font-semibold ${
                          encounter.winAmount && encounter.winAmount > 0
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        }`}>
                          {RESULT_LABELS[encounter.result]}
                        </p>
                        {encounter.winAmount && encounter.winAmount > 0 && (
                          <p className="text-lg font-bold text-primary">
                            Won: {formatCurrency(encounter.winAmount)}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {encounters.length === 0 && (
            <div className="text-center py-20">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No Encounters Yet</h3>
              <p className="text-muted-foreground mb-6">
                Start tracking your lottery journey by adding your first encounter
              </p>
              <LotteryButton onClick={() => setShowAddForm(true)}>
                Add First Encounter
              </LotteryButton>
            </div>
          )}
        </div>
      </main>
      <Navigation />
    </>
  );
}
