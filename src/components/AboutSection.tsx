import React from 'react';
import { GraduationCap, Briefcase, Compass, Quote } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const designSteps = [
    {
      num: '01',
      title: 'DISCOVER & COLLECT',
      desc: 'Understanding business objectives, gathering raw data sources, & defining key KPIs.'
    },
    {
      num: '02',
      title: 'CLEAN & PREPROCESS',
      desc: 'Filtering missing data, SQL querying, transformations, & feature extraction.'
    },
    {
      num: '03',
      title: 'MODEL & ANALYZE',
      desc: 'Training ML forecasting models, statistical testing, & performance evaluation.'
    },
    {
      num: '04',
      title: 'VISUALIZE & DASHBOARD',
      desc: 'Designing interactive Power BI, Tableau, & Plotly dashboards for data storytelling.'
    },
    {
      num: '05',
      title: 'INSIGHTS & AUTOMATION',
      desc: 'Generating actionable business recommendations & automated alert workflows.'
    },
    {
      num: '06',
      title: 'MONITOR & OPTIMIZE',
      desc: 'Tracking pipeline performance, validating model accuracy, & refining BI metrics.'
    }
  ];

  return (
    <section id="about" style={{ position: 'relative', padding: '80px 0', borderBottom: 'var(--border-grid)', background: 'var(--bg-void)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px' }}>

        {/* Outer Framed 3-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            border: 'var(--border-grid)',
            background: 'var(--bg-surface)'
          }}
          className="three-column-info-grid"
        >
          {/* Column 1: EDUCATION */}
          <div
            style={{
              borderRight: 'var(--border-grid)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="info-col-1"
          >
            <div style={{ padding: '36px 32px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '28px'
                }}
              >
                <GraduationCap size={16} color="var(--accent-gold)" />
                <span>EDUCATION</span>
              </div>

              <div style={{ display: 'grid', gap: '28px' }}>
                {PERSONAL_INFO.education.history.map((edu, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        lineHeight: 1.2
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', letterSpacing: '0.05em' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                      {edu.period} • <span style={{ color: 'var(--text-primary)' }}>{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote Block inside Col 1 bottom */}
            <div
              style={{
                borderTop: 'var(--border-grid)',
                padding: '28px 32px',
                background: 'rgba(7, 9, 14, 0.6)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '1px solid var(--border-gold)',
                  background: '#0a0e19'
                }}
              >
                <img
                  src="/tejaswini.jpg"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/tejaswini.png';
                  }}
                  alt="Tejaswini Y"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <Quote size={16} color="var(--accent-gold)" style={{ marginBottom: '6px' }} />
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    color: 'var(--text-body)',
                    lineHeight: 1.45
                  }}
                >
                  “Tejaswini is a dedicated AIML student—committed to learning, analytical problem solving, and building practical ML applications.”
                </p>
                <div style={{ marginTop: '8px', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  — Acharya Faculty & Mentors
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: HIGHLIGHTS & ACTIVITIES */}
          <div
            style={{
              padding: '36px 32px',
              borderRight: 'var(--border-grid)'
            }}
            className="info-col-2"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '28px'
              }}
            >
              <Briefcase size={16} color="var(--accent-gold)" />
              <span>ACTIVITIES & LEADERSHIP</span>
            </div>

            <div style={{ display: 'grid', gap: '32px' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  State & National Theater Winner
                </h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
                  UTH KARSH ABHINAYA THEATER GROUP
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)', marginTop: '2px' }}>
                  2022 — Present
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', marginTop: '8px', lineHeight: 1.5 }}>
                  Member of Uthkarsh Abhinaya theater group; participated in state and national competitions and won championship twice.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  VTU Srushti 2025 Volunteer
                </h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
                  VTU SRUSHTI 2025 INNOVATION EVENT
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)', marginTop: '2px' }}>
                  2025
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', marginTop: '8px', lineHeight: 1.5 }}>
                  Volunteered at VTU Srushti 2025, assisting technical showcases, student project exhibitions, and event management.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Community & Cultural Volunteer
                </h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
                  KANNADA VEDIKE COMMUNITY INITIATIVES
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)', marginTop: '2px' }}>
                  2022 — Present
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', marginTop: '8px', lineHeight: 1.5 }}>
                  Active volunteer for community development, language preservation, and campus event organizing.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: MY WORK PROCESS */}
          <div
            style={{
              padding: '36px 32px'
            }}
            className="info-col-3"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '28px'
              }}
            >
              <Compass size={16} color="var(--accent-gold)" />
              <span>MY WORK PROCESS</span>
            </div>

            <div style={{ display: 'grid', gap: '20px' }}>
              {designSteps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid rgba(230, 207, 171, 0.08)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: 'var(--accent-gold)',
                      lineHeight: 1,
                      minWidth: '28px'
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'var(--text-primary)',
                        marginBottom: '4px'
                      }}
                    >
                      {step.title}
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .three-column-info-grid {
            grid-template-columns: 1fr !important;
          }
          .info-col-1, .info-col-2 {
            border-right: none !important;
            border-bottom: var(--border-grid) !important;
          }
        }
      `}</style>
    </section>
  );
};
