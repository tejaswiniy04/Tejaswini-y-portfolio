import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, GitCommit, GitBranch } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ position: 'relative', padding: '90px 24px', zIndex: 2 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="pill-neon" style={{ marginBottom: '12px' }}>
            // 03 EXPERIENCE & MILESTONES
          </div>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'var(--font-title)', color: '#fff', letterSpacing: '-0.02em' }}>
            Engineering & <span className="text-gradient-royal">Career Track</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '12px auto 0', fontSize: '1rem', fontFamily: 'var(--font-body)' }}>
            AI internship at GlowLogics Solutions, academic specialization at Acharya Institute, and full-stack software achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Branch Line */}
          <div
            style={{
              position: 'absolute',
              left: '26px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-blue), transparent)'
            }}
          />

          {/* Timeline Items */}
          <div style={{ display: 'grid', gap: '32px' }}>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '20px', position: 'relative' }}>
                {/* Node Commit Marker */}
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'var(--bg-void)',
                    border: '2.5px solid var(--accent-purple)',
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 2
                  }}
                >
                  {exp.type === 'work' ? (
                    <Briefcase size={22} color="var(--accent-purple)" />
                  ) : (
                    <GraduationCap size={22} color="var(--accent-gold)" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="bento-card" style={{ padding: '28px', flex: 1 }}>
                  {/* Header info */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      gap: '10px'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.725rem',
                          fontFamily: 'var(--font-code)',
                          color: 'var(--accent-purple)',
                          marginBottom: '4px',
                          fontWeight: 700
                        }}
                      >
                        <GitCommit size={13} /> commit 8f902{idx + 1} • <GitBranch size={13} /> main
                      </div>
                      <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '2px', fontFamily: 'var(--font-title)', fontWeight: 800 }}>{exp.role}</h3>
                      <div style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.925rem', fontFamily: 'var(--font-code)' }}>
                        {exp.company}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-code)'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} /> {exp.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-body)', fontSize: '0.925rem', marginBottom: '18px', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
                    {exp.description}
                  </p>

                  {/* Achievements Bullet List */}
                  <div style={{ display: 'grid', gap: '10px', marginBottom: '18px' }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.875rem',
                          color: 'var(--text-body)'
                        }}
                      >
                        <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: 'rgba(168, 85, 247, 0.1)',
                          border: '1px solid rgba(168, 85, 247, 0.25)',
                          color: 'var(--accent-purple)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-code)',
                          fontWeight: 600
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
