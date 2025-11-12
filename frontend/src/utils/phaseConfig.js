import { Droplets, Sun, Sparkles, Moon } from 'lucide-react';

export const phaseConfig = {
  menstrual: {
    icon: Droplets,
    color: 'from-red-500 to-pink-500',
    bg: 'bg-red-50',
    description: 'Menstrual Phase'
  },
  follicular: {
    icon: Sun,
    color: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-50',
    description: 'Follicular Phase'
  },
  ovulation: {
    icon: Sparkles,
    color: 'from-pink-500 to-purple-500',
    bg: 'bg-pink-50',
    description: 'Ovulation Phase'
  },
  luteal: {
    icon: Moon,
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    description: 'Luteal Phase'
  }
};

