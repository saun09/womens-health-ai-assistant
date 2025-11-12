import { useState } from 'react';
import { generateHealthTip } from '../services/apiService';
import LoadingAnimation from './LoadingAnimation';
import { COMMON_SYMPTOMS } from '../utils/constants';
import { phaseConfig } from '../utils/phaseConfig';

const SymptomTracker = ({ phase, currentPhase }) => {
  const [symptom, setSymptom] = useState('');
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetTip = async () => {
    if (!symptom.trim()) {
      setError('Please enter a symptom or select one from the quick options.');
      return;
    }

    setLoading(true);
    setError(null);
    setTip(null);

    try {
      const data = await generateHealthTip(symptom.trim(), currentPhase || phase);
      setTip(data);
    } catch (err) {
      setError(err.message || 'Failed to generate health tip. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSelect = (quickSymptom) => {
    setSymptom(quickSymptom);
    setError(null);
  };

  const config = phaseConfig[currentPhase || phase] || phaseConfig.menstrual;

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="symptom" className="block text-sm font-semibold text-gray-700 mb-2">
          Enter your symptom:
        </label>
        <div className="flex gap-2">
          <input
            id="symptom"
            type="text"
            value={symptom}
            onChange={(e) => {
              setSymptom(e.target.value);
              setError(null);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleGetTip();
              }
            }}
            placeholder="e.g., cramps, fatigue, bloating..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <button
            onClick={handleGetTip}
            disabled={loading}
            className={`
              px-6 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r ${config.color}
              shadow-lg hover:shadow-xl transform hover:scale-105
              transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            Get Tip
          </button>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-2">Quick select:</p>
        <div className="flex flex-wrap gap-2">
          {COMMON_SYMPTOMS.map((quickSymptom) => (
            <button
              key={quickSymptom}
              onClick={() => handleQuickSelect(quickSymptom)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium
                ${symptom === quickSymptom
                  ? `bg-gradient-to-r ${config.color} text-white shadow-md`
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-pink-400 shadow-sm'
                }
                transition-all duration-300 hover:scale-105
              `}
            >
              {quickSymptom}
            </button>
          ))}
        </div>
      </div>

      {loading && <LoadingAnimation />}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 mb-4">
          {error}
        </div>
      )}

      {tip && !loading && (
        <div className="p-6 rounded-2xl shadow-xl fade-in bg-gradient-to-br from-green-400 to-emerald-500 text-white">
          <div className="mb-2">
            <span className="text-sm font-semibold opacity-90">Symptom: </span>
            <span className="text-sm font-bold capitalize">{tip.symptom}</span>
          </div>
          <p className="text-lg font-medium leading-relaxed">{tip.tip}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomTracker;

