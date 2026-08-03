import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-reveal-container ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );
};
