
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import type { SpeechRecognitionEvent, SpeechRecognitionError } from '@/types/speechRecognition';

const useVoiceNavigation = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);
  }, []);

  const processCommand = useCallback((transcript: string) => {
    const command = transcript.toLowerCase().trim();
    
    console.log('Voice command received:', command);

    // Navigation commands
    if (command.includes('home') || command.includes('homepage')) {
      navigate('/');
      toast({ title: '🎤 Voice Navigation', description: 'Navigating to home page' });
    } else if (command.includes('service') || command.includes('what we do')) {
      navigate('/services');
      toast({ title: '🎤 Voice Navigation', description: 'Navigating to services page' });
    } else if (command.includes('contact') || command.includes('get in touch')) {
      navigate('/contact');
      toast({ title: '🎤 Voice Navigation', description: 'Navigating to contact page' });
    } else if (command.includes('book') || command.includes('consultation') || command.includes('meeting')) {
      navigate('/book');
      toast({ title: '🎤 Voice Navigation', description: 'Navigating to booking page' });
    } else {
      return command; // Return the command for form filling
    }
    
    return null;
  }, [navigate]);

  const startListening = useCallback(() => {
    if (!isSupported) {
      toast({ title: 'Voice not supported', description: 'Your browser does not support voice recognition' });
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.addEventListener('result', (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      processCommand(transcript);
    });

    recognition.addEventListener('error', (event: SpeechRecognitionError) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      toast({ title: 'Voice error', description: 'Could not recognize speech. Please try again.' });
    });

    recognition.addEventListener('end', () => {
      setIsListening(false);
    });

    setIsListening(true);
    recognition.start();
  }, [isSupported, processCommand]);

  return {
    isListening,
    isSupported,
    startListening,
    processCommand
  };
};

export default useVoiceNavigation;
