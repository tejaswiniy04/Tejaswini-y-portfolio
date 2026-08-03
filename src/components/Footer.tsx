import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#070506',
        borderTop: '1px solid rgba(220, 38, 38, 0.18)',
        padding: '36px 32px'
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        {/* Left Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--accent-red-bright)',
              letterSpacing: '0.04em'
            }}
          >
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>|</span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)'
            }}
          >
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </span>
        </div>

        {/* Center Tagline & Developer Attribution */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px'
          }}
          className="desktop-only-tagline"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)'
            }}
          >
            <Sparkles size={13} color="var(--accent-red-bright)" />
            <span>Data Analyst & AI Developer</span>
          </div>

          <div
            style={{
              fontFamily: "'Alex Brush', 'Caveat', cursive",
              fontSize: '0.98rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1,
              letterSpacing: '0.04em',
              marginTop: '3px'
            }}
          >
          </div>
        </div>

        {/* Right Back to Top */}
        <button
          onClick={scrollToTop}
          className="btn-outline-red"
          style={{
            padding: '8px 16px',
            fontSize: '0.72rem'
          }}
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={14} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-only-tagline { display: none !important; }
        }
      `}</style>
    </footer>
  );
};