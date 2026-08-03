import React, { useState } from 'react';
import { Terminal, Download, Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenTerminal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Selected Projects', href: '#projects' },
    { name: 'Education & Skills', href: '#education-skills' },
    { name: 'Engineering Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(7, 5, 6, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(220, 38, 38, 0.18)',
        padding: '16px 32px'
      }}
    >
      <header
        style={{
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        {/* Left Role Header */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontWeight: 600
            }}
          >
            AI & MACHINE LEARNING
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-red-bright)',
              fontWeight: 700
            }}
          >
            FULL STACK & AIML SPECIALIST
          </span>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-body)',
                textDecoration: 'none',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {/* Availability Status Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-body)',
              fontWeight: 600
            }}
            className="desktop-status"
          >
            <span>AVAILABLE FOR AI, ML & DEV ROLES</span>
            <Sparkles size={12} className="red-pulse-star" />
          </div>

          <button
            onClick={onOpenTerminal}
            className="btn-outline-red"
            style={{ padding: '6px 14px', fontSize: '0.72rem' }}
            title="Open Interactive CLI Terminal"
          >
            <Terminal size={13} />
            <span>CLI</span>
          </button>

          <a
            href={`${import.meta.env.BASE_URL}Tejaswini_Y_Resume.pdf`}
            download="Tejaswini_Y_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            style={{ padding: '7px 16px', fontSize: '0.72rem' }}
          >
            <Download size={13} />
            <span>RESUME</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-red-bright)',
              cursor: 'pointer',
              display: 'none',
              padding: '6px'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#070506',
            borderBottom: '1px solid rgba(220, 38, 38, 0.25)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
                fontWeight: 600
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-status { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
};
