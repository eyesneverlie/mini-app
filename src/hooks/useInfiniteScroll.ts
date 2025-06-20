import { useEffect } from 'react';

interface UseInfiniteScrollOptions {
  target: React.RefObject<HTMLDivElement | null>;
  onIntersect: () => void;
  enabled?: boolean;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export const useInfiniteScroll = ({
  target,
  onIntersect,
  enabled = true,
  threshold = 1.0,
  root = null,
  rootMargin = '0px',
}: UseInfiniteScrollOptions) => {
  useEffect(() => {
    if (!enabled || !target.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(target.current);

    return () => {
      if (target.current) observer.unobserve(target.current);
    };
  }, [enabled, onIntersect, root, rootMargin, target, threshold]);
};