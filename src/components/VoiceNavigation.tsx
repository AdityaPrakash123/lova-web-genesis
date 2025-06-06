
import React, { useState } from 'react';
import { Mic, MicOff, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useVoiceNavigation from '@/hooks/useVoiceNavigation';

const VoiceNavigation = () => {
  const { isListening, isSupported, startListening } = useVoiceNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isSupported) return null;

  const handleMicClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      startListening();
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Floating Mic Button */}
      {!isExpanded && (
        <div 
          className="floating-mic voice-pulse"
          onClick={handleMicClick}
          role="button"
          tabIndex={0}
          aria-label="Open voice navigation"
        >
          <Mic className="h-6 w-6 text-white" />
        </div>
      )}

      {/* Expanded Voice Panel */}
      {isExpanded && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={handleClose}
          ></div>
          
          {/* Voice Panel */}
          <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
            <div className="glass-card p-6 w-80 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close voice navigation"
              >
                <X className="h-4 w-4 text-white/70" />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">Voice Navigation 2.0</span>
              </div>
              
              <p className="text-xs text-white/80 mb-4">
                Say commands like: "Go to services", "Contact us", "Book meeting", or use it to fill forms with voice
              </p>
              
              <div className="space-y-3">
                <Button
                  onClick={startListening}
                  disabled={isListening}
                  className="w-full glass-card hover:glass-card border-accent/50 hover:border-accent text-white transition-all duration-300 transform hover:scale-105"
                  size="sm"
                >
                  {isListening ? (
                    <>
                      <MicOff className="h-4 w-4 mr-2 animate-pulse text-red-300" />
                      Listening...
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4 mr-2" />
                      Speak Command
                    </>
                  )}
                </Button>
                
                <div className="text-xs text-white/60 space-y-1">
                  <div>🎤 Voice commands for navigation</div>
                  <div>📝 Voice input for all form fields</div>
                  <div>🚀 Future-ready interaction</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VoiceNavigation;
