import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const base = import.meta.env.BASE_URL;

  const displayProjects = [
    {
      ...PROJECTS[0],
      number: '01',
      title: 'SDG-7 FORECASTING',
      category: 'DJANGO & ML ENERGY DASHBOARD',
      image: `${base}sdg7_cover.png`
    },
    {
      ...PROJECTS[1],
      number: '02',
      title: 'OCULAR VISION',
      category: 'COMPUTER VISION EYE ANALYSIS',
      image: `${base}ocular_cover.png`
    },
    {
      ...PROJECTS[2],
      number: '03',
      title: 'GEN-AI PRICING SIMULATOR',
      category: 'GENERATIVE AI & ELASTICITY MODELING',
      image: `${base}genai_pricing_cover.png`
    }
  ];

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        padding: '80px 32px',
        maxWidth: '1360px',
        margin: '0 auto'
      }}
    >
      {/* Section Header Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '40px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '8px',
              height: '28px',
              background: 'var(--accent-red-bright)',
              borderRadius: 'var(--radius-full)'
            }}
          />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.06em'
            }}
          >
            SELECTED PROJECTS
          </h2>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent-red-bright)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'var(--transition-fast)'
          }}
        >
          <span>VIEW GITHUB REPOS</span>
          <ArrowRight size={14} />
        </a>
      </div>

      {/* 3-Column Dark Card Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}
        className="projects-3col-grid"
      >
        {displayProjects.map((p, idx) => (
          <ScrollReveal key={p.id} delay={idx * 150}>
            <div
              onClick={() => setSelectedProject(p)}
              style={{
                background: '#0E090B',
                border: '1px solid rgba(220, 38, 38, 0.16)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%'
              }}
            className="project-card-item"
          >
            {/* Image Banner */}
            <div
              style={{
                position: 'relative',
                height: '220px',
                width: '100%',
                overflow: 'hidden',
                background: '#130C0E'
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  filter: 'contrast(1.05) brightness(0.95)'
                }}
                className="project-card-img"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(14, 9, 11, 0.95) 100%)'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'rgba(255, 255, 255, 0.7)',
                  background: 'rgba(7, 5, 6, 0.7)',
                  padding: '2px 10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(220, 38, 38, 0.3)'
                }}
              >
                {p.number}
              </span>
            </div>

            {/* Card Content Footer */}
            <div
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                flex: 1,
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-red-bright)',
                    fontWeight: 700
                  }}
                >
                  {p.category}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginTop: '4px',
                    letterSpacing: '0.02em'
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '0.82rem',
                    lineHeight: 1.55,
                    marginTop: '8px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {p.description}
                </p>
              </div>

              {/* Action Button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginTop: '12px'
                }}
              >
                <span>EXPLORE MONOREPO & SPEC</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
        ))}
      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .project-card-item:hover {
          transform: translateY(-6px);
          border-color: var(--accent-red-bright) !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(230, 0, 0, 0.2) !important;
        }
        .project-card-item:hover .project-card-img {
          transform: scale(1.06);
        }
        @media (max-width: 1024px) {
          .projects-3col-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .projects-3col-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
