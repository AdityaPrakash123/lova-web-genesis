
import React from 'react';
import { Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useVoiceNavigation from '@/hooks/useVoiceNavigation';

const VoiceNavigation = () => {
  const { isListening, isSupported, startListening } = useVoiceNavigation();

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gradient-to-r from-teal to-cyan p-4 rounded-2xl shadow-lg border border-teal/20 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white">Voice Navigation Active</span>
        </div>
        <p className="text-xs text-white/80 mb-3">
          Try saying: "Go to services", "Contact us", "Book meeting"
        </p>
        <Button
          onClick={startListening}
          disabled={isListening}
          className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all duration-300 transform hover:scale-105"
          size="sm"
        >
          <Mic className={`h-4 w-4 mr-2 ${isListening ? 'animate-pulse text-red-300' : ''}`} />
          {isListening ? 'Listening...' : 'Speak Command'}
        </Button>
      </div>
    </div>
  );
};

export default VoiceNavigation;
