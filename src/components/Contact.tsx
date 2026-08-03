import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      label: 'EMAIL ADDRESS',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail
    },
    {
      label: 'LINKEDIN PROFILE',
      value: 'tejaswini-y-80a93025a',
      href: PERSONAL_INFO.linkedin,
      icon: LinkedinIcon
    },
    {
      label: 'GITHUB PROFILE',
      value: 'tejaswiniy04',
      href: PERSONAL_INFO.github,
      icon: GithubIcon
    },
    {
      label: 'INSTAGRAM PROFILE',
      value: 'tejaswini___y',
      href: PERSONAL_INFO.instagram,
      icon: InstagramIcon
    },
    {
      label: 'PHONE & WHATSAPP',
      value: PERSONAL_INFO.phone,
      href: PERSONAL_INFO.whatsappUrl,
      icon: Phone
    },
    {
      label: 'LOCATION',
      value: PERSONAL_INFO.location,
      href: '#',
      icon: MapPin
    }
  ];

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '90px 24px 120px 24px',
        maxWidth: '1380px',
        margin: '0 auto'
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(230, 0, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1.1fr 1.1fr 1fr',
          gap: '36px',
          alignItems: 'stretch',
          background: 'rgba(14, 9, 11, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(220, 38, 38, 0.25)',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 40px rgba(220, 38, 38, 0.12)'
        }}
        className="contact-card-grid"
      >
        {/* Left Column: Heading & Status */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            {/* Availability Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(220, 38, 38, 0.12)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                marginBottom: '20px'
              }}
            >
              <span className="red-pulse-star" style={{ width: '8px', height: '8px' }}></span>
              <span
                style={{
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-red-bright)',
                  fontWeight: 700
                }}
              >
                OPEN FOR DATA ANALYST ROLES
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                marginBottom: '16px'
              }}
            >
              LET'S BUILD <br />
              <span style={{ color: 'var(--accent-red-bright)' }}>DATA-DRIVEN</span> IMPACT{' '}
              <Sparkles size={26} className="red-pulse-star" style={{ verticalAlign: 'middle' }} />
            </h2>

            <p
              style={{
                color: 'var(--text-body)',
                fontSize: '0.92rem',
                lineHeight: 1.75,
                textAlign: 'justify',
                marginBottom: '28px',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.01em'
              }}
            >
              Currently seeking <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>Data Analyst, Business Intelligence, and AIML</strong> positions to turn complex data into strategic growth. Armed with a solid foundation in <span style={{ color: 'var(--accent-red-bright)', fontWeight: 600 }}>SQL databases, Python programming, Power BI dashboards, Tableau, and Machine Learning</span>, I specialize in crafting automated analytics pipelines, uncovering hidden operational trends, and delivering actionable executive insights. Driven by technical rigor, continuous learning, and a passion for data storytelling—let's connect and build scalable impact together!
            </p>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-code)',
                boxShadow: '0 8px 24px rgba(220, 38, 38, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              className="action-btn-primary"
            >
              <Mail size={16} />
              <span>SEND EMAIL</span>
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(220, 38, 38, 0.08)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-code)',
                border: '1px solid rgba(220, 38, 38, 0.4)',
                transition: 'all 0.3s ease'
              }}
              className="action-btn-secondary"
            >
              <MessageSquare size={16} />
              <span>WHATSAPP CHAT</span>
            </a>
          </div>
        </div>

        {/* Middle Column: Interactive Contact Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>
          {contactDetails.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: 'rgba(19, 13, 16, 0.9)',
                  border: '1px solid rgba(220, 38, 38, 0.18)',
                  borderRadius: '16px',
                  color: 'var(--text-body)',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="contact-card-item"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(230, 0, 0, 0.12)',
                      border: '1px solid rgba(230, 0, 0, 0.28)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-red-bright)',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={18} />
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.64rem',
                        fontFamily: 'var(--font-code)',
                        letterSpacing: '0.12em',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        marginBottom: '2px'
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: '#FFFFFF'
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    color: 'var(--accent-red-bright)',
                    opacity: 0.6,
                    transition: 'all 0.2s ease'
                  }}
                  className="arrow-icon"
                >
                  <ArrowUpRight size={18} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Right Column: Workstation Graphic Showcase */}
        <div
          style={{
            position: 'relative',
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 35px rgba(230, 0, 0, 0.2)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            height: '100%',
            minHeight: '320px'
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}workspace.png`}
            alt="Workspace Showcase"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />

          {/* Top Badge Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(7, 5, 6, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(220, 38, 38, 0.4)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span className="red-pulse-star" style={{ width: '6px', height: '6px' }}></span>
            <span
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                color: '#FFFFFF',
                fontWeight: 700
              }}
            >
              DATA ANALYTICS LAB
            </span>
          </div>

          {/* Bottom Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(7, 5, 6, 0.92) 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '20px'
            }}
          >
            <div>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  color: 'var(--accent-red-bright)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '2px'
                }}
              >
                BUSINESS INTELLIGENCE WORKSTATION
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#FFFFFF'
                }}
              >
                Power BI • SQL • Python • Tableau
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .action-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(220, 38, 38, 0.6) !important;
          background: linear-gradient(135deg, #EF4444 0%, #B91C1C 100%) !important;
          color: #FFFFFF !important;
        }
        .action-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(220, 38, 38, 0.22) !important;
          border-color: var(--accent-red-bright) !important;
          color: #FFFFFF !important;
        }
        .contact-card-item:hover {
          background: rgba(28, 18, 23, 0.95) !important;
          border-color: var(--accent-red-bright) !important;
          box-shadow: 0 8px 24px rgba(230, 0, 0, 0.25) !important;
          transform: translateY(-3px);
        }
        .contact-card-item:hover .arrow-icon {
          opacity: 1 !important;
          transform: translate(2px, -2px);
        }
        @media (max-width: 1100px) {
          .contact-card-grid {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};
