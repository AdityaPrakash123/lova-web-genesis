
import React, { useState, useCallback } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import type { SpeechRecognitionEvent, SpeechRecognitionError } from '@/types/speechRecognition';

interface VoiceInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'input' | 'textarea';
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

const VoiceInput: React.FC<VoiceInputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'input',
  className,
  id,
  name,
  required
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const startVoiceInput = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setIsSupported(false);
      toast({ title: 'Voice not supported', description: 'Your browser does not support voice input' });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.addEventListener('start', () => {
      setIsListening(true);
      toast({ title: '🎤 Listening...', description: 'Speak now to fill this field' });
    });

    recognition.addEventListener('result', (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onChange(value + (value ? ' ' : '') + transcript);
      toast({ title: '✅ Voice captured', description: 'Text has been added to the field' });
    });

    recognition.addEventListener('error', (event: SpeechRecognitionError) => {
      console.error('Speech recognition error:', event.error);
      toast({ title: 'Voice error', description: 'Could not recognize speech. Please try again.' });
    });

    recognition.addEventListener('end', () => {
      setIsListening(false);
    });

    recognition.start();
  }, [value, onChange]);

  const InputComponent = type === 'textarea' ? Textarea : Input;

  return (
    <div className="relative">
      <InputComponent
        id={id}
        name={name}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`${className} pr-12`}
        rows={type === 'textarea' ? 5 : undefined}
      />
      {isSupported && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={startVoiceInput}
          disabled={isListening}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-teal/20 transition-all duration-200"
        >
          {isListening ? (
            <MicOff className="h-4 w-4 text-red-500 animate-pulse" />
          ) : (
            <Mic className="h-4 w-4 text-teal hover:text-teal-dark transition-colors" />
          )}
        </Button>
      )}
    </div>
  );
};

export default VoiceInput;
