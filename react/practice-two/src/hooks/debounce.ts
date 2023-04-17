import { useEffect, useState } from 'react';

/**
 * @description The function takes the input value and then delays it for a while to avoid calling the API on each character
 *
 * @param {Object} value is value of input
 * @param {number} delay is time want to delay (ex: 300ms)
 *
 * @returns value
 */
const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // Cancel the timeout if value changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export { useDebounce };
