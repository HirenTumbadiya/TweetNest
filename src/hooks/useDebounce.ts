import { useEffect, useState } from "react";

/**
 * Custom hook that returns a debounced value.
 * It delays the update of the value by a specified delay time.
 * Useful for scenarios where you want to limit the rate of updates,
 * such as waiting for user input to settle before making API calls.
 *
 * @param value - The value to debounce (generic type T).
 * @param delay - The debounce delay in milliseconds (default is 250ms).
 * @returns The debounced value which only updates after the specified delay.
 */
export default function useDebounce<T>(value: T, delay: number = 250): T {
  // State to store the debounced value
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // Cleanup the timeout when the component unmounts or value/delay changes
    return () => clearTimeout(handler);
  }, [value, delay]); // Re-run the effect when value or delay changes

  // Return the debounced value
  return debounceValue;
}
