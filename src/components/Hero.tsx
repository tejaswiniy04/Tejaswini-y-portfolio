import React from 'react';
import { MapPin, Sparkles, BarChart3, PieChart, Database, TrendingUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '85vh',
        paddingTop: '110px',
        paddingBottom: '50px',
        paddingLeft: '32px',
        paddingRight: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        borderBottom: 'var(--border-grid)',
        background: 'var(--bg-void)'
      }}
    >
      {/* Background Radial Crimson Glow */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(230, 0, 0, 0.14) 0%, rgba(139, 0, 0, 0.04) 45%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Giant Backdrop "PORTFOLIO" Text */}
      <div
        style={{
          position: 'absolute',
          top: '90px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        <h1 className="portfolio-giant-backdrop">
          PORTFOLIO
        </h1>
      </div>

      {/* Main Grid Layout Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1360px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr 0.8fr',
          alignItems: 'center',
          gap: '32px',
          paddingTop: '220px'
        }}
        className="hero-grid-layout"
      >
        {/* Left Typography Block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', zIndex: 12 }}>
          {/* Cursive Subtitle */}
          <div className="script-accent" style={{ marginBottom: '-6px' }}>
            Hello, I'm
          </div>

          {/* Name Title */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 4.8vw, 4.4rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 0.95,
              letterSpacing: '0.01em',
              textTransform: 'uppercase'
            }}
          >
            TEJASWINI<br />Y
          </h1>

          {/* Role Subtitle */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--accent-red-bright)',
              letterSpacing: '0.08em',
              marginTop: '2px'
            }}
          >
            AI & MACHINE LEARNING GRADUATE | FULL STACK DEVELOPER
          </h3>

          {/* AI / ML Tech Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(230, 0, 0, 0.1)',
                border: '1px solid rgba(230, 0, 0, 0.28)',
                color: '#FFFFFF',
                fontSize: '0.68rem',
                fontFamily: 'var(--font-code)',
                fontWeight: 600
              }}
            >
              <TrendingUp size={13} color="var(--accent-red-bright)" />
              PyTorch & TensorFlow
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(230, 0, 0, 0.1)',
                border: '1px solid rgba(230, 0, 0, 0.28)',
                color: '#FFFFFF',
                fontSize: '0.68rem',
                fontFamily: 'var(--font-code)',
                fontWeight: 600
              }}
            >
              <BarChart3 size={13} color="var(--accent-red-bright)" />
              Generative AI & Gemini API
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(230, 0, 0, 0.1)',
                border: '1px solid rgba(230, 0, 0, 0.28)',
                color: '#FFFFFF',
                fontSize: '0.68rem',
                fontFamily: 'var(--font-code)',
                fontWeight: 600
              }}
            >
              <Database size={13} color="var(--accent-red-bright)" />
              Full Stack & Django
            </span>
          </div>

          {/* Bio Description */}
          <p
            style={{
              color: 'var(--text-body)',
              fontSize: '0.92rem',
              lineHeight: 1.7,
              maxWidth: '460px',
              marginTop: '6px',
              textAlign: 'justify',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.01em'
            }}
          >
            AI & Machine Learning graduate with hands-on experience in <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>Machine Learning, Deep Learning, NLP, Generative AI</strong>, and predictive modeling. Experienced in developing intelligent systems using <span style={{ color: 'var(--accent-red-bright)', fontWeight: 600 }}>Python, Django, Google Gemini AI, DevOps, PyTorch, TensorFlow, and Scikit-learn</span>.
          </p>

          {/* Location Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '6px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(220, 38, 38, 0.08)',
              border: '1px solid rgba(220, 38, 38, 0.25)',
              width: 'fit-content'
            }}
          >
            <MapPin size={14} color="var(--accent-red-bright)" />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--text-body)'
              }}
            >
              BENGALURU, KARNATAKA, INDIA
            </span>
          </div>
        </div>

        {/* Center Portrait Frame */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            zIndex: 10
          }}
        >
          {/* Crimson Subtle Radial Halo */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '80%',
              height: '75%',
              background: 'radial-gradient(circle, rgba(230, 0, 0, 0.25) 0%, rgba(139, 0, 0, 0.1) 50%, transparent 80%)',
              borderRadius: '50%',
              filter: 'blur(35px)',
              zIndex: 1
            }}
          />

          {/* User's Authentic Portrait Image */}
          <img
            src={`${import.meta.env.BASE_URL}tejaswini.png`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `${import.meta.env.BASE_URL}tejaswini.jpg`;
            }}
            alt="Tejaswini Y Portrait"
            style={{
              position: 'relative',
              zIndex: 5,
              maxHeight: '750px',
              width: '125%',
              maxWidth: '560px',
              height: 'auto',
              objectFit: 'contain',
              transform: 'scale(1.24) translateY(-50px)',
              transformOrigin: 'bottom center',
              filter: 'none',
              boxShadow: 'none'
            }}
          />

        </div>

        {/* Right Stats Stack */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            paddingBottom: '20px',
            zIndex: 12
          }}
          className="hero-stats-column"
        >
          {/* Stat 1 */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.6rem',
                fontWeight: 700,
                color: 'var(--accent-red-bright)',
                lineHeight: 1
              }}
            >
              8.49
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF'
                }}
              >
                CGPA
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)'
                }}
              >
                B.E. IN AI & ML
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.6rem',
                fontWeight: 700,
                color: 'var(--accent-red-bright)',
                lineHeight: 1
              }}
            >
              91.67%
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF'
                }}
              >
                PUC SCORE
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)'
                }}
              >
                BGS GURUKULA
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.6rem',
                fontWeight: 700,
                color: 'var(--accent-red-bright)',
                lineHeight: 1
              }}
            >
              3+
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF'
                }}
              >
                POWER BI &
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)'
                }}
              >
                SQL ANALYTICS
              </span>
            </div>
          </div>

          {/* Circular Floating BI Insights Badge */}
          <div
            style={{
              marginTop: '6px',
              background: 'rgba(18, 12, 14, 0.94)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(230, 0, 0, 0.4)',
              borderRadius: '50%',
              width: '135px',
              height: '135px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 12px 30px rgba(0,0,0,0.8), 0 0 20px rgba(230,0,0,0.2)'
            }}
            className="floating-hero-badge"
          >
            <Sparkles size={18} color="var(--accent-red-bright)" style={{ marginBottom: '6px' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.62rem',
                lineHeight: 1.25,
                color: '#FFFFFF',
                fontWeight: 600
              }}
            >
              Transforming complex datasets into actionable BI insights.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid-layout {
            grid-template-columns: 1fr 1fr !important;
            padding-top: 160px !important;
          }
          .hero-stats-column {
            flex-direction: row !important;
            justify-content: space-around !important;
            grid-column: 1 / -1;
            padding-top: 30px;
          }
        }
        @media (max-width: 768px) {
          #hero {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-top: 80px !important;
          }
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            padding-top: 90px !important;
            gap: 24px !important;
          }
          .hero-grid-layout img {
            max-height: 440px !important;
            margin: 0 auto;
          }
          .hero-stats-column {
            flex-direction: column !important;
            gap: 20px !important;
            align-items: flex-start !important;
          }
          .floating-hero-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
