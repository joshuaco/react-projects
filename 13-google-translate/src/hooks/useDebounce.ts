import { useEffect, useState } from 'react';

// <T> type parameter
export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

/* 
  Timeline user types:

  0ms --> user types --> 'H'
    useEffect --> L7
  150ms --> user types --> 'He'
    clearTimeout --> L12
    useEffect --> L7
  650ms --> user does not type
    setDebouncedValue('he') --> L8
*/
