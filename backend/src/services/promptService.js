const phaseDescriptions = {
  menstrual: 'Menstrual phase (Days 1-5): This is when your period occurs. Your body is shedding the uterine lining. Energy levels are typically lower, and you may experience cramps, fatigue, and mood changes. This is a time for rest and self-care.',
  
  follicular: 'Follicular phase (Days 1-13): This phase begins on the first day of your period and ends at ovulation. Your body is preparing an egg for release. Estrogen levels rise, and you may feel more energetic and optimistic. This is a great time for new beginnings and physical activities.',
  
  ovulation: 'Ovulation phase (Days 14-16): This is when an egg is released from the ovary. Estrogen peaks, and you may feel confident, energetic, and social. This is typically your most fertile time. You might experience increased libido and a natural glow.',
  
  luteal: 'Luteal phase (Days 17-28): After ovulation, your body prepares for a potential pregnancy. Progesterone rises, and if no pregnancy occurs, hormone levels drop. You may experience PMS symptoms like bloating, mood swings, and fatigue as this phase progresses. This is a time for gentle self-care and preparation for your next cycle.'
};

const createHealthTipPrompt = (symptom, phase) => {
  const phaseInfo = phaseDescriptions[phase] || phaseDescriptions.menstrual;
  
  // Add variation with different advice angles
  const adviceAngles = [
    'focus on gentle, natural remedies and self-care practices',
    'emphasize the connection between cycle phase and symptom management',
    'highlight practical lifestyle adjustments and comfort measures',
    'suggest mindfulness and body awareness techniques',
    'recommend nourishing foods and hydration strategies',
    'encourage movement and rest in balance'
  ];
  
  const randomAngle = adviceAngles[Math.floor(Math.random() * adviceAngles.length)];
  
  return `You are a compassionate and knowledgeable women's health assistant. A user is experiencing "${symptom}" during their ${phase} phase of their menstrual cycle.

${phaseInfo}

Please provide a warm, empathetic, and practical health tip (2-3 sentences) that:
- Addresses the specific symptom: ${symptom}
- Considers how this symptom relates to the ${phase} phase
- ${randomAngle}
- Offers actionable, gentle advice
- Uses a supportive and understanding tone
- Does not include medical disclaimers
- Be specific and personalized - avoid generic advice

Keep the response concise, warm, and focused on practical self-care. Make it unique and tailored.`;
};

const createQuotePrompt = (phase) => {
  const phaseInfo = phaseDescriptions[phase] || phaseDescriptions.menstrual;
  
  // Add much more variation with different quote styles/angles
  const quoteStyles = [
    'focus on self-compassion and honoring your body\'s natural rhythms',
    'emphasize strength, resilience, and the beauty of this phase',
    'highlight the importance of rest, reflection, and self-care',
    'celebrate the unique energy and potential of this moment',
    'encourage embracing change and trusting your body\'s wisdom',
    'inspire confidence and connection with your inner strength',
    'speak to the power of transformation and renewal',
    'remind of the sacredness and wisdom of the feminine cycle',
    'encourage listening to your body\'s messages with kindness',
    'celebrate the cyclical nature of growth and rest',
    'inspire gratitude for your body\'s incredible capabilities',
    'emphasize the importance of honoring your needs right now'
  ];
  
  const quoteFormats = [
    'Write it as an affirmation',
    'Write it as a gentle reminder',
    'Write it as an empowering statement',
    'Write it as a poetic observation',
    'Write it as a compassionate message',
    'Write it as an inspiring reflection'
  ];
  
  const randomStyle = quoteStyles[Math.floor(Math.random() * quoteStyles.length)];
  const randomFormat = quoteFormats[Math.floor(Math.random() * quoteFormats.length)];
  const timestamp = new Date().toISOString();
  const randomId = Math.random().toString(36).substring(7);
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
  
  return `You are a wellness coach specializing in women's health and menstrual cycle awareness. Generate a COMPLETELY UNIQUE wellness quote.

Context:
- User is in their ${phase} phase
- Current time: ${timeOfDay} (${timestamp})
- Request ID: ${randomId}

${phaseInfo}

IMPORTANT: Generate a FRESH, UNIQUE quote that is DIFFERENT from any previous quotes. Do NOT reuse phrases or wording.

Requirements:
- ${randomStyle}
- ${randomFormat}
- 1-2 sentences only
- Tailored to the ${phase} phase
- Uplifting and inspiring
- Beautiful, poetic language
- Personal and warm
- Completely original wording - avoid clichés

Generate a brand new, creative quote now:`;
};

module.exports = {
  createHealthTipPrompt,
  createQuotePrompt
};

