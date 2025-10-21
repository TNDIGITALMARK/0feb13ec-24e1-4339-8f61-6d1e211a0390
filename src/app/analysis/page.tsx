/**
 * Pattern Analysis View Page
 * Display statistics and patterns from lottery history
 */

'use client';

import React from 'react';
import { TrendingUp, DollarSign, Target, Award } from 'lucide-react';
import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { MOCK_ENCOUNTERS } from '@/lib/mock-data';
import { calculatePatternStats, formatCurrency } from '@/lib/types';
import { LOTTERY_GAMES } from '@/lib/lottery';

export default function AnalysisPage() {
  const stats = calculatePatternStats(MOCK_ENCOUNTERS);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 uppercase">Pattern Analysis</h1>
            <p className="text-xl text-muted-foreground">
              Insights from your lottery journey
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full lottery-gradient-gold flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Total Encounters
                </p>
              </div>
              <p className="text-4xl font-bold">{stats.totalEncounters}</p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full lottery-gradient-gold flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Total Spent
                </p>
              </div>
              <p className="text-4xl font-bold">{formatCurrency(stats.totalSpent)}</p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full lottery-gradient-gold flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Win Rate
                </p>
              </div>
              <p className="text-4xl font-bold text-primary">{stats.winRate.toFixed(1)}%</p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full lottery-gradient-gold flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Net Result
                </p>
              </div>
              <p className={`text-4xl font-bold ${
                stats.netResult >= 0 ? 'text-primary' : 'text-destructive'
              }`}>
                {formatCurrency(stats.netResult)}
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Most Frequent Numbers */}
            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 uppercase">Most Frequent Numbers</h2>
              <div className="space-y-4">
                {stats.mostFrequentNumbers.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full lottery-gradient-gold flex items-center justify-center font-bold text-white text-lg">
                        {item.number}
                      </div>
                      <span className="text-lg font-semibold">Number {item.number}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{item.frequency}</p>
                      <p className="text-sm text-muted-foreground">times</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spending Insights */}
            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 uppercase">Spending Insights</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-muted-foreground">Average per Week</p>
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency(stats.averageSpendingPerWeek)}
                    </p>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full lottery-gradient-gold"
                      style={{ width: '75%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-muted-foreground">Total Winnings</p>
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency(stats.totalWinnings)}
                    </p>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full lottery-gradient-gold"
                      style={{
                        width: `${Math.min(100, (stats.totalWinnings / stats.totalSpent) * 100)}%`
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-muted-foreground">Favorite Game</p>
                    <p className="text-xl font-bold">
                      {LOTTERY_GAMES[stats.favoriteGame].name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-card/60 backdrop-blur-sm border border-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 uppercase">Your Lottery Journey</h2>
            <p className="text-xl text-muted-foreground mb-6">
              You&apos;ve played {stats.totalEncounters} times, spending {formatCurrency(stats.totalSpent)} total.
              Your win rate is {stats.winRate.toFixed(1)}%, with a net result of{' '}
              <span className={stats.netResult >= 0 ? 'text-primary' : 'text-destructive'}>
                {formatCurrency(stats.netResult)}
              </span>.
            </p>
            <p className="text-lg text-muted-foreground">
              Keep tracking your encounters to discover more patterns and insights!
            </p>
          </div>
        </div>
      </main>
      <Navigation />
    </>
  );
}
