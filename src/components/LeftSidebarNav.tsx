import React from 'react';
import { Home, User, Briefcase, FolderKanban, Layers, Award, Mail } from 'lucide-react';

export const LeftSidebarNav: React.FC = () => {
  const navItems = [
    { icon: Home, href: '#home', label: 'Home' },
    { icon: FolderKanban, href: '#projects', label: 'Projects' },
    { icon: User, href: '#about', label: 'About' },
    { icon: Briefcase, href: '#experience', label: 'Experience' },
    { icon: Layers, href: '#skills', label: 'Skills' },
    { icon: Award, href: '#certifications', label: 'Credentials' },
    { icon: Mail, href: '#contact', label: 'Contact' },
  ];

  return (
    <aside
      className="side-nav"
      style={{
        position: 'fixed',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 90,
        borderRadius: 'var(--radius-full)',
        background: 'rgba(7, 9, 14, 0.92)',
        backdropFilter: 'blur(16px)',
        border: 'var(--border-grid)',
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              transition: 'var(--transition-smooth)',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#07090e';
              e.currentTarget.style.background = 'var(--accent-gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </aside>
  );
};
