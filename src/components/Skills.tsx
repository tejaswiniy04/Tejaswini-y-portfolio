import React from 'react';
import { Brain, Server, Layout, Cloud, Code, Zap } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code size={20} color="var(--accent-gold)" />;
      case 'Layout': return <Layout size={20} color="var(--accent-gold)" />;
      case 'Server': return <Server size={20} color="var(--accent-gold)" />;
      case 'Brain': return <Brain size={20} color="var(--accent-gold)" />;
      case 'Cloud': return <Cloud size={20} color="var(--accent-gold)" />;
      default: return <Zap size={20} color="var(--accent-gold)" />;
    }
  };

  return (
    <section id="skills" style={{ position: 'relative', padding: '80px 0', borderBottom: 'var(--border-grid)', background: 'var(--bg-void)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-label">
            ENGINEERING CAPABILITIES
          </div>
          <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', color: 'var(--accent-gold)' }}>
            CORE TECH MATRIX
          </span>
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="luxury-grid-box">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: 'var(--border-grid)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getIcon(category.icon)}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'grid', gap: '18px' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '6px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            fontFamily: 'var(--font-body)',
                            color: skill.highlighted ? 'var(--text-primary)' : 'var(--text-body)'
                          }}
                        >
                          {skill.name}
                        </span>
                        {skill.highlighted && (
                          <span
                            style={{
                              fontSize: '0.6rem',
                              padding: '2px 6px',
                              borderRadius: 'var(--radius-full)',
                              border: '1px solid var(--border-gold)',
                              color: 'var(--accent-gold)',
                              letterSpacing: '0.1em'
                            }}
                          >
                            CORE
                          </span>
                        )}
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-code)',
                          fontSize: '0.75rem',
                          color: 'var(--accent-gold)'
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Meter bar */}
                    <div
                      style={{
                        height: '4px',
                        width: '100%',
                        background: 'rgba(230, 207, 171, 0.08)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: 'var(--accent-gold)',
                          borderRadius: '2px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
