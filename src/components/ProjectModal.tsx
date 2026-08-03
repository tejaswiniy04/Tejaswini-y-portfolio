import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(5, 8, 16, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#07090e',
          border: 'var(--border-gold)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.95)',
          position: 'relative',
          padding: '0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Banner */}
        <div
          style={{
            background: project.imageBgGradient,
            padding: '36px 32px 28px 32px',
            borderTopLeftRadius: 'var(--radius-lg)',
            borderTopRightRadius: 'var(--radius-lg)',
            position: 'relative'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(0, 0, 0, 0.4)',
              border: 'none',
              color: '#fff',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            <X size={20} />
          </button>

          {project.featured && (
            <span
              style={{
                background: 'rgba(0,0,0,0.4)',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '12px'
              }}
            >
              <Sparkles size={12} color="#f59e0b" /> FEATURED ARCHITECTURE
            </span>
          )}

          <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '6px' }}>{project.title}</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px' }}>
          {/* Tech Stack Tags */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase' }}>
              Technologies & Infrastructure
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    color: 'var(--accent-cyan)',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Row */}
          {project.metrics && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '16px',
                marginBottom: '28px',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--bg-glass-border)'
              }}
            >
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>{m.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Long Description */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '10px' }}>Project Overview</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.7 }}>
              {project.longDescription}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={18} color="var(--accent-indigo)" />
              Key Technical Features
            </h4>
            <div style={{ display: 'grid', gap: '10px' }}>
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.925rem'
                  }}
                >
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline Flow if provided */}
          {project.architectureDetails && (
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} color="var(--accent-cyan)" />
                System Pipeline & Data Flow
              </h4>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.825rem',
                  color: 'var(--text-secondary)',
                  padding: '16px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {project.architectureDetails}
              </div>
            </div>
          )}

          {/* Footer Action Links */}
          <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--bg-glass-border)', paddingTop: '24px' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.9rem' }}
              >
                <GithubIcon size={16} color="#fff" />
                <span>View Source Repository</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.9rem' }}
              >
                <ExternalLink size={16} />
                <span>Launch Live Application</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
