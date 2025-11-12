import { phaseConfig } from '../utils/phaseConfig';

const iconColorMap = {
  menstrual: 'text-red-500',
  follicular: 'text-yellow-500',
  ovulation: 'text-pink-500',
  luteal: 'text-blue-500'
};

const PhaseSelector = ({ phase, setPhase }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {Object.entries(phaseConfig).map(([phaseKey, config]) => {
        const Icon = config.icon;
        const isSelected = phase === phaseKey;
        
        return (
          <button
            key={phaseKey}
            onClick={() => setPhase(phaseKey)}
            className={`
              flex flex-col items-center justify-center p-6 rounded-xl
              transition-all duration-500 transform hover:scale-105
              ${isSelected 
                ? `bg-gradient-to-br ${config.color} text-white shadow-xl` 
                : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
              }
            `}
          >
            <Icon className={`w-8 h-8 mb-2 ${isSelected ? 'text-white' : iconColorMap[phaseKey]}`} />
            <span className="text-sm font-semibold capitalize">{phaseKey}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PhaseSelector;

