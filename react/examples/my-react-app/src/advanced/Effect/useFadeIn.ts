import { RefObject, useEffect } from 'react';
import FadeInAnimation from './fadeAnimation';

export function useFadeIn(ref: RefObject<HTMLElement>, duration: number) {
  useEffect(() => {
    const animation = new FadeInAnimation(ref.current!);
    animation.start(duration);
    return () => {
      animation.stop();
    };
  }, [ref, duration]);
}
