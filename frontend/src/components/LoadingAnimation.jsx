const LoadingAnimation = ({ message = "Crafting your personalized health tip..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-lg">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 border-4 border-pink-300 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-purple-300 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <p className="text-gray-700 font-medium text-center">{message}</p>
    </div>
  );
};

export default LoadingAnimation;

