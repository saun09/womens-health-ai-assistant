import { useState } from 'react';
import PhaseSelector from './components/PhaseSelector';
import DailyQuote from './components/DailyQuote';
import SymptomTracker from './components/SymptomTracker';
import { phaseConfig } from './utils/phaseConfig';

function App() {
  const [phase, setPhase] = useState('menstrual');
  const config = phaseConfig[phase];

  const Icon = config.icon;

  return (
    <div className={`min-h-screen transition-all duration-500 ${config.bg}`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg mb-4">
            <div className={`w-6 h-6 bg-gradient-to-br ${config.color} rounded-full flex items-center justify-center`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Women's Health AI Assistant
            </h1>
          </div>
          <p className="text-gray-600 font-medium">
            Track your cycle, get personalized health tips, and wellness guidance
          </p>
        </header>

        {/* Phase Selector */}
        <PhaseSelector phase={phase} setPhase={setPhase} />

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Daily Quote Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Wellness Quote</h2>
            <DailyQuote phase={phase} currentPhase={phase} />
          </div>

          {/* Symptom Tracker Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Symptom Tracker</h2>
            <SymptomTracker phase={phase} currentPhase={phase} />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Your health companion through every phase</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
