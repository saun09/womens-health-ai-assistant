import { useState } from 'react';
import { Heart } from 'lucide-react';
import { generateQuote } from '../services/apiService';
import LoadingAnimation from './LoadingAnimation';
import { phaseConfig } from '../utils/phaseConfig';

const DailyQuote = ({ phase, currentPhase }) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateQuote = async () => {
    setLoading(true);
    setError(null);
    setQuote(null);

    try {
      const data = await generateQuote(currentPhase || phase);
      setQuote(data.quote);
    } catch (err) {
      setError(err.message || 'Failed to generate quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const config = phaseConfig[currentPhase || phase] || phaseConfig.menstrual;

  return (
    <div className="mb-8">
      <button
        onClick={handleGenerateQuote}
        disabled={loading}
        className={`
          w-full mb-4 px-6 py-4 rounded-xl font-semibold text-white
          bg-gradient-to-r ${config.color}
          shadow-lg hover:shadow-xl transform hover:scale-105
          transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-2
        `}
      >
        <Heart className="w-5 h-5" />
        {loading ? 'Generating...' : 'Get Daily Wellness Quote'}
      </button>

      {loading && <LoadingAnimation message="Crafting your personalized wellness quote..." />}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          {error}
        </div>
      )}

      {quote && !loading && (
        <div className={`
          p-6 rounded-2xl shadow-xl fade-in
          bg-gradient-to-br ${config.color} text-white
        `}>
          <p className="text-lg font-medium leading-relaxed">{quote}</p>
        </div>
      )}
    </div>
  );
};

export default DailyQuote;

