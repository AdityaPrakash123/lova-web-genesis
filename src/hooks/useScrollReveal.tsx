
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  once?: boolean;
  rootMargin?: string;
}

// Shared IntersectionObserver instance for better performance
let sharedObserver: IntersectionObserver | null = null;
const observedElements = new Map<HTMLElement, (isVisible: boolean) => void>();

const getSharedObserver = (threshold: number, rootMargin: string) => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observedElements.get(entry.target as HTMLElement);
          if (callback) {
            callback(entry.isIntersecting);
          }
        });
      },
      { threshold, rootMargin }
    );
  }
  return sharedObserver;
};

export const useScrollReveal = <T extends HTMLElement = HTMLElement>(options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.1, delay = 0, once = true, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleVisibilityChange = useCallback((visible: boolean) => {
    if (visible && !isVisible) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else if (!visible && !once && isVisible) {
      setIsVisible(false);
    }
  }, [isVisible, delay, once]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver(threshold, rootMargin);
    observedElements.set(element, handleVisibilityChange);
    observer.observe(element);

    return () => {
      if (element) {
        observedElements.delete(element);
        observer.unobserve(element);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    };
  }, [threshold, rootMargin, handleVisibilityChange]);

  return { ref, isVisible };
};

// Hook for debounced mouse tracking
export const useDebouncedMouse = (delay: number = 100) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
      }, delay);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return mousePosition;
};

export default useScrollReveal;
