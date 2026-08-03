import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  content: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    {
      id: 'welcome',
      type: 'output',
      content: (
        <div>
          <span style={{ color: 'var(--accent-red-bright)', fontWeight: 'bold' }}>Tejaswini Y CLI Shell [v3.0.0-crimson-os]</span>
          <br />
          Type <span style={{ color: 'var(--accent-red-bright)', fontWeight: 'bold' }}>'help'</span> for available commands, <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>'whoami'</span> for developer background, or <span style={{ color: 'var(--accent-red-bright)', fontWeight: 'bold' }}>'projects'</span> for AIML projects.
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: OutputLine[] = [
      ...history,
      { id: Math.random().toString(), type: 'input', content: `tejaswini@portfolio:~$ ${inputVal}` }
    ];

    switch (cmd) {
      case 'help':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ display: 'grid', gap: '6px', margin: '4px 0', fontFamily: 'var(--font-code)' }}>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>whoami</strong> — Print Tejaswini Y's background & role</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>experience</strong> — View work experience @ Mindset IT Solutions</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>education</strong> — View academic background, college & CGPA (8.49)</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>skills</strong> — Display technical stack & proficiency matrix</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>projects</strong> — List featured AIML projects (SDG-7, Ocular Vision, Gen-AI Simulator)</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>leadership</strong> — View theater & folk dance leadership activities</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>certifications</strong> — Display verified credentials (Google, IBM, Microsoft, etc.)</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>socials</strong> — WhatsApp, LinkedIn & GitHub links</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>contact</strong> — Show email, phone & location</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>resume</strong> — Download official resume PDF</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>hire</strong> — Run automated hiring script 🎉</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>confetti</strong> — Deploy celebratory particles</div>
              <div><strong style={{ color: 'var(--accent-red-bright)' }}>clear</strong> — Clear terminal screen</div>
            </div>
          )
        });
        break;

      case 'whoami':
      case 'about':
      case 'bio':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div>
              <p style={{ color: '#fff', fontWeight: 700 }}>{PERSONAL_INFO.name} — Aspiring Data Analyst & AIML Engineer</p>
              <p style={{ color: 'var(--text-body)', marginTop: '4px' }}>{PERSONAL_INFO.summary}</p>
              <p style={{ color: 'var(--accent-red-bright)', marginTop: '6px', fontSize: '0.825rem', fontFamily: 'var(--font-code)' }}>
                College: {PERSONAL_INFO.education.institution} | Degree: {PERSONAL_INFO.education.degree} | CGPA: {PERSONAL_INFO.education.cgpa}
              </p>
            </div>
          )
        });
        break;

      case 'experience':
      case 'work':
      case 'job':
      case 'exp':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div style={{ color: 'var(--accent-red-bright)', fontWeight: 'bold' }}>💼 Full Stack Developer @ Mindset IT Solutions (Bengaluru, Karnataka)</div>
              <div style={{ color: '#fff', marginTop: '3px' }}>• Built responsive full-stack web applications using frontend and backend technologies.</div>
              <div style={{ color: '#fff' }}>• Collaborated with team to build, test, debug, and deploy web application features.</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '3px' }}>Tech: Python, JavaScript, Django, SQL, Git, HTML/CSS</div>
            </div>
          )
        });
        break;

      case 'education':
      case 'edu':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div style={{ color: 'var(--accent-red-bright)', fontWeight: 'bold' }}>🎓 Acharya Institute of Technology (2022 – 2026)</div>
              <div style={{ color: '#fff' }}>B.E. in Artificial Intelligence & Machine Learning | CGPA: {PERSONAL_INFO.education.cgpa}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
                • Focus: Machine Learning, Deep Learning, NLP, Generative AI, SQL Databases, Data Visualization, Computer Vision.
              </div>
              <div style={{ marginTop: '6px', color: 'var(--text-body)' }}>• PUC (12th Grade): BGS Gurukula IND PU College (91.67%)</div>
              <div style={{ color: 'var(--text-body)' }}>• SSLC (10th Grade): Government Girls PU College (85.44%)</div>
            </div>
          )
        });
        break;

      case 'leadership':
      case 'activities':
      case 'extracurricular':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div style={{ color: 'var(--accent-red-bright)', marginBottom: '4px' }}>• 💃 <strong>Utkarsh-Rhythmanya:</strong> Acharya Folk Dance Team Head</div>
              <div style={{ color: '#FFFFFF', marginBottom: '4px' }}>• 🎭 <strong>Utkarsh-Abhinaya Theatre Club:</strong> National & State-Level Winner</div>
              <div style={{ color: 'var(--accent-red-bright)' }}>• 🚩 <strong>Acharya Kannada Vedike:</strong> Active Member</div>
            </div>
          )
        });
        break;

      case 'socials':
      case 'social':
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div>💬 WhatsApp: <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-red-bright)' }}>{PERSONAL_INFO.whatsapp}</a></div>
              <div>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-red-bright)' }}>linkedin.com/in/tejaswini-y-80a93025a</a></div>
              <div>🐙 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-red-bright)' }}>github.com/tejaswiniy04</a></div>
            </div>
          )
        });
        break;

      case 'resume':
      case 'cv':
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: (
            <div style={{ fontFamily: 'var(--font-code)' }}>
              📄 Opening official Resume... <a href={`${import.meta.env.BASE_URL}Tejaswini_Y_Resume.pdf`} download target="_blank" style={{ color: 'var(--accent-red-bright)', textDecoration: 'underline' }}>Download Tejaswini_Y_Resume.pdf</a>
            </div>
          )
        });
        window.open(`${import.meta.env.BASE_URL}Tejaswini_Y_Resume.pdf`, '_blank');
        break;

      case 'hire':
      case 'sudo hire':
        triggerConfetti();
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: (
            <div style={{ fontFamily: 'var(--font-code)' }}>
              🚀 [SUCCESS] Executed `hire_developer.sh`!
              <br />
              Candidate: <strong>Tejaswini Y</strong> (AIML Engineer & Aspiring Data Analyst)
              <br />
              Status: <span style={{ color: 'var(--accent-red-bright)', fontWeight: 'bold' }}>OFFER EXTENDED & ACCEPTED! 🎉</span>
            </div>
          )
        });
        break;

      case 'skills':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div style={{ color: 'var(--accent-red-bright)' }}>[Programming] Python, C, C++</div>
              <div style={{ color: '#FFFFFF' }}>[Data Science & AI] Machine Learning, Deep Learning, NLP, Generative AI (Google Gemini API, TensorFlow, PyTorch, Scikit-Learn)</div>
              <div style={{ color: 'var(--accent-red-bright)' }}>[Databases & Backend] SQL, MongoDB, Django</div>
              <div style={{ color: '#FFFFFF' }}>[Data Visualization] Power BI, Tableau, Plotly, Chart.js</div>
              <div style={{ color: 'var(--accent-red-bright)' }}>[Tools & Tech] Git, GitHub, Jupyter Notebook, Google Colab, DevOps, MS Office (Excel, Word, PowerPoint)</div>
            </div>
          )
        });
        break;

      case 'projects':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div>
              {PROJECTS.map((p) => (
                <div key={p.id} style={{ marginBottom: '10px', fontFamily: 'var(--font-code)' }}>
                  <span style={{ color: 'var(--accent-red-bright)', fontWeight: 'bold' }}>• {p.title}</span> — {p.subtitle}
                  <br />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Tech: {p.technologies.join(', ')}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'certifications':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div>• Google Data Analytics Professional Certificate</div>
              <div>• Career Essentials in Generative AI (Microsoft & LinkedIn)</div>
              <div>• IBM - AI Engineering</div>
              <div>• Data Engineering Foundations Professional Certificate (IBM)</div>
              <div>• Infosys Power BI & Infosys Tableau</div>
              <div>• Machine Learning with Python (Coursera/IBM)</div>
              <div>• Power BI Workshop Certificates (Office Master)</div>
            </div>
          )
        });
        break;

      case 'contact':
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: (
            <div style={{ fontFamily: 'var(--font-code)' }}>
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: 'var(--accent-red-bright)' }}>{PERSONAL_INFO.email}</a></div>
              <div>Phone: <span style={{ color: '#fff' }}>{PERSONAL_INFO.phone}</span></div>
              <div>WhatsApp: <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-red-bright)' }}>{PERSONAL_INFO.whatsapp}</a></div>
              <div>Location: <span style={{ color: '#fff' }}>{PERSONAL_INFO.location}</span></div>
              <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-red-bright)' }}>{PERSONAL_INFO.github}</a></div>
              <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-red-bright)' }}>{PERSONAL_INFO.linkedin}</a></div>
            </div>
          )
        });
        break;

      case 'confetti':
        triggerConfetti();
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: '🎉 Confetti deployed successfully!'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          id: Math.random().toString(),
          type: 'error',
          content: `Command not found: '${inputVal}'. Type 'help' for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(7, 5, 6, 0.92)',
        backdropFilter: 'blur(20px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '780px',
          height: '540px',
          maxHeight: 'calc(100vh - 32px)',
          background: '#070506',
          border: '1px solid rgba(230, 0, 0, 0.35)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(230, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div
          style={{
            background: 'rgba(230, 0, 0, 0.08)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(230, 0, 0, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TerminalIcon size={18} color="var(--accent-red-bright)" />
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', color: 'var(--accent-red-bright)', fontWeight: 600 }}>
              tejaswini@portfolio ~ terminal
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={triggerConfetti}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--accent-red-bright)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'var(--font-code)',
                fontWeight: 600
              }}
            >
              <Sparkles size={14} /> Confetti
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Output Screen */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            fontFamily: 'var(--font-code)',
            fontSize: '0.875rem'
          }}
        >
          {history.map((line) => (
            <div key={line.id}>
              {line.type === 'input' && <div style={{ color: 'var(--accent-red-bright)', fontWeight: 600 }}>{line.content}</div>}
              {line.type === 'output' && <div style={{ color: '#D1D5DB' }}>{line.content}</div>}
              {line.type === 'error' && <div style={{ color: '#EF4444' }}>{line.content}</div>}
              {line.type === 'success' && <div style={{ color: '#10B981' }}>{line.content}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt Bar */}
        <form
          onSubmit={handleCommandSubmit}
          style={{
            padding: '12px 20px',
            background: 'rgba(230, 0, 0, 0.04)',
            borderTop: '1px solid rgba(220, 38, 38, 0.18)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ color: 'var(--accent-red-bright)', fontFamily: 'var(--font-code)', fontWeight: 'bold' }}>
            tejaswini@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'education', 'skills', 'projects', 'socials', 'hire'..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#fff',
              outline: 'none',
              fontFamily: 'var(--font-code)',
              fontSize: '0.875rem'
            }}
          />
        </form>
      </div>
    </div>
  );
};
