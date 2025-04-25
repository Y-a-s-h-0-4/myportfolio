
import { useEffect, useRef, RefObject } from 'react';

interface ScrollObserverOptions {
  threshold?: number;
  rootMargin?: string;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
  once?: boolean;
}

export function useScrollObserver<T extends HTMLElement = HTMLElement>(
  options: ScrollObserverOptions = {}
): RefObject<T> {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    onIntersect,
    once = true,
  } = options;
  
  const elementRef = useRef<T>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (onIntersect) {
              onIntersect(entry);
            } else {
              entry.target.classList.add('animate-fade-in');
              if (entry.target.classList.contains('opacity-0')) {
                entry.target.classList.remove('opacity-0');
              }
            }
            
            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, onIntersect, once]);
  
  return elementRef;
}
