import { useCallback, useEffect, useRef } from 'react';

export default function useTrottle(callback, delay) {
  const isThrottled = useRef(null);

  const throttledCallback = useCallback(
    (...args) => {
      if (isThrottled.current) return;

      callback(args);
      isThrottled.current = true;
      setTimeout(() => (isThrottled.current = false), delay);
    },
    [callback, delay]
  );

  return throttledCallback;
}
