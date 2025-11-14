"use client";

import { useState, useMemo } from 'react';
import { Scale, Target, TrendingDown, TrendingUp, Calendar, Trash2, Plus } from 'lucide-react';
import { useFasting } from '@/contexts/fasting-context';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export function WeightTracker() {
  const { currentUser, weightEntries, weightGoal, addWeightEntry, deleteWeightEntry, setWeightGoal, deleteWeightGoal } = useFasting();

  // Weight entry form state
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [notes, setNotes] = useState('');
  const [showEntryForm, setShowEntryForm] = useState(false);

  // Goal form state
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [goalWeight, setGoalWeight] = useState('');
  const [goalUnit, setGoalUnit] = useState<'lbs' | 'kg'>('lbs');
  const [goalDate, setGoalDate] = useState('');

  // Prepare chart data (sorted by date, oldest first for chart)
  const chartData = useMemo(() => {
    const sorted = [...weightEntries].reverse(); // Oldest first
    return sorted.map((entry, index) => ({
      date: new Date(entry.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      weight: entry.weight,
      fullDate: new Date(entry.createdAt),
      index,
    }));
  }, [weightEntries]);

  // Calculate statistics
  const statistics = useMemo(() => {
    if (weightEntries.length === 0) {
      return {
        currentWeight: 0,
        startWeight: 0,
        totalChange: 0,
        percentChange: 0,
        trend: 'neutral' as const,
        remainingToGoal: 0,
      };
    }

    const sorted = [...weightEntries].sort((a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    const currentWeight = sorted[sorted.length - 1].weight;
    const startWeight = sorted[0].weight;
    const totalChange = currentWeight - startWeight;
    const percentChange = startWeight !== 0 ? (totalChange / startWeight) * 100 : 0;
    const trend = totalChange < 0 ? 'down' : totalChange > 0 ? 'up' : 'neutral';

    const remainingToGoal = weightGoal ? currentWeight - weightGoal.targetWeight : 0;

    return {
      currentWeight,
      startWeight,
      totalChange,
      percentChange,
      trend,
      remainingToGoal,
    };
  }, [weightEntries, weightGoal]);

  const handleAddWeight = async () => {
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    await addWeightEntry(weightNum, unit, notes.trim() || undefined);

    // Reset form
    setWeight('');
    setNotes('');
    setShowEntryForm(false);
  };

  const handleSetGoal = async () => {
    const goalNum = parseFloat(goalWeight);
    if (isNaN(goalNum) || goalNum <= 0) {
      alert('Please enter a valid goal weight');
      return;
    }

    const targetDate = goalDate ? new Date(goalDate) : undefined;
    await setWeightGoal(goalNum, goalUnit, targetDate);

    // Reset form
    setGoalWeight('');
    setGoalDate('');
    setShowGoalForm(false);
  };

  if (!currentUser?.isFasting) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm text-center">
        <Scale className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Weight Tracking
        </h3>
        <p className="text-gray-600">
          Join the fast to track your weight progress.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-[#0b5a7f]" />
            <h3 className="text-xl font-semibold text-gray-900">Weight Tracking</h3>
          </div>
          <Button
            onClick={() => setShowEntryForm(!showEntryForm)}
            className="bg-[#0b5a7f] hover:bg-[#094e6d] gap-2"
            size="sm"
          >
            <Plus className="h-4 w-4" />
            Add Weight
          </Button>
        </div>

        {/* Add Weight Entry Form */}
        {showEntryForm && (
          <div className="bg-[#0b5a7f]/10 border border-[#0b5a7f]/30 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Record Your Weight</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Weight</label>
                <input
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f]/100"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Unit</label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as 'lbs' | 'kg')}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f]/100"
                >
                  <option value="lbs">Pounds (lbs)</option>
                  <option value="kg">Kilograms (kg)</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="text-sm text-gray-600 mb-1 block">Notes (optional)</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any notes about this weigh-in..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f]/100"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddWeight} className="flex-1">
                Save Weight
              </Button>
              <Button onClick={() => setShowEntryForm(false)} variant="ghost">
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Current Statistics */}
        {weightEntries.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Current Weight */}
            <div className="bg-gradient-to-br from-[#0b5a7f]/10 to-[#0b5a7f]/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="h-4 w-4 text-[#0b5a7f]" />
                <span className="text-xs text-[#0b5a7f] font-medium">Current</span>
              </div>
              <div className="text-2xl font-bold text-[#074159]">
                {statistics.currentWeight.toFixed(1)} {weightEntries[0].unit}
              </div>
            </div>

            {/* Starting Weight */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-gray-600" />
                <span className="text-xs text-gray-600 font-medium">Starting</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {statistics.startWeight.toFixed(1)} {weightEntries[0].unit}
              </div>
            </div>

            {/* Total Change */}
            <div className={`bg-gradient-to-br rounded-lg p-4 ${
              statistics.trend === 'down' ? 'from-green-50 to-green-100' :
              statistics.trend === 'up' ? 'from-red-50 to-red-100' :
              'from-gray-50 to-gray-100'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {statistics.trend === 'down' ? (
                  <TrendingDown className="h-4 w-4 text-green-600" />
                ) : statistics.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-red-600" />
                ) : (
                  <TrendingUp className="h-4 w-4 text-gray-600" />
                )}
                <span className={`text-xs font-medium ${
                  statistics.trend === 'down' ? 'text-green-600' :
                  statistics.trend === 'up' ? 'text-red-600' :
                  'text-gray-600'
                }`}>Change</span>
              </div>
              <div className={`text-2xl font-bold ${
                statistics.trend === 'down' ? 'text-green-900' :
                statistics.trend === 'up' ? 'text-red-900' :
                'text-gray-900'
              }`}>
                {statistics.totalChange > 0 ? '+' : ''}{statistics.totalChange.toFixed(1)} {weightEntries[0].unit}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {statistics.percentChange > 0 ? '+' : ''}{statistics.percentChange.toFixed(1)}%
              </div>
            </div>

            {/* Goal Progress */}
            {weightGoal && (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-purple-600" />
                  <span className="text-xs text-purple-600 font-medium">To Goal</span>
                </div>
                <div className="text-2xl font-bold text-purple-900">
                  {Math.abs(statistics.remainingToGoal).toFixed(1)} {weightGoal.unit}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {statistics.remainingToGoal > 0 ? 'to lose' : 'goal reached!'}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Trend Chart */}
      {chartData.length > 1 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-[#0b5a7f]" />
            Weight Trend
          </h4>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '8px'
                  }}
                />
                {weightGoal && (
                  <ReferenceLine
                    y={weightGoal.targetWeight}
                    stroke="#8b5cf6"
                    strokeDasharray="5 5"
                    label={{ value: 'Goal', position: 'right', fill: '#8b5cf6' }}
                  />
                )}
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  dot={{ fill: '#4f46e5', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Goal Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-600" />
            <h4 className="font-semibold text-gray-900">Weight Goal</h4>
          </div>
          {!showGoalForm && (
            <Button
              onClick={() => setShowGoalForm(true)}
              variant="ghost"
              size="sm"
            >
              {weightGoal ? 'Update Goal' : 'Set Goal'}
            </Button>
          )}
        </div>

        {showGoalForm ? (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-900 mb-3">Set Your Goal</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Target Weight</label>
                <input
                  type="number"
                  step="0.1"
                  value={goalWeight}
                  onChange={(e) => setGoalWeight(e.target.value)}
                  placeholder="Enter goal weight"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Unit</label>
                <select
                  value={goalUnit}
                  onChange={(e) => setGoalUnit(e.target.value as 'lbs' | 'kg')}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="lbs">Pounds (lbs)</option>
                  <option value="kg">Kilograms (kg)</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="text-sm text-gray-600 mb-1 block">Target Date (optional)</label>
              <input
                type="date"
                value={goalDate}
                onChange={(e) => setGoalDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSetGoal} className="flex-1 bg-purple-600 hover:bg-purple-700">
                Save Goal
              </Button>
              <Button onClick={() => setShowGoalForm(false)} variant="ghost">
                Cancel
              </Button>
            </div>
          </div>
        ) : weightGoal ? (
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-900">
                  {weightGoal.targetWeight} {weightGoal.unit}
                </div>
                {weightGoal.targetDate && (
                  <div className="text-sm text-gray-600 mt-1">
                    Target: {new Date(weightGoal.targetDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delete your weight goal?')) {
                    deleteWeightGoal(weightGoal.id);
                  }
                }}
                className="text-red-500 hover:text-red-700 transition-colors"
                title="Delete goal"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-600 text-center py-4">
            No goal set yet. Click &quot;Set Goal&quot; to add your target weight.
          </p>
        )}
      </div>

      {/* Weight History */}
      {weightEntries.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#0b5a7f]" />
            Weight History
          </h4>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {weightEntries.map((entry, index) => (
              <div
                key={entry.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#0b5a7f]/20 text-[#0b5a7f] rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(entry.createdAt).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(entry.createdAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </div>
                    {entry.notes && (
                      <div className="text-xs text-gray-600 mt-1 italic">
                        {entry.notes}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-[#0b5a7f]">
                      {entry.weight} {entry.unit}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this weight entry?')) {
                        deleteWeightEntry(entry.id);
                      }
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    title="Delete entry"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {weightEntries.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 shadow-sm text-center">
          <Scale className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Start Tracking Your Weight
          </h4>
          <p className="text-gray-600 mb-4">
            Record your weight regularly to see your progress over time
          </p>
          <Button
            onClick={() => setShowEntryForm(true)}
            className="bg-[#0b5a7f] hover:bg-[#094e6d]"
          >
            Add Your First Weight Entry
          </Button>
        </div>
      )}
    </div>
  );
}
