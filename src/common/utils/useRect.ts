import { useState, useRef, useEffect } from 'react';

export const useRect = () => {
  const [rect, setRect] = useState<ClientRect | DOMRect>();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = ref.current;
    if (target) {
      const rect = target.getBoundingClientRect();
      setRect(rect);
    }
  }, []);

  return { ref, rect };
};
