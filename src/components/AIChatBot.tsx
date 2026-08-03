import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Copy, Trash2, Key, Sparkles, Volume2, ThumbsUp, ThumbsDown, RotateCcw, ExternalLink, FileText, ArrowRight, MessageSquare } from 'lucide-react';
import { askGeminiAI } from '../utils/ragEngine';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ActionItem {
  label: string;
  type: 'download_resume' | 'scroll_section' | 'open_url' | 'ask_question';
  payload?: string;
  icon?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  liked?: boolean;
  disliked?: boolean;
  actions?: ActionItem[];
}

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const initialWelcomeActions: ActionItem[] = [
    { label: 'SDG-7 Energy Project', type: 'ask_question', payload: 'Tell me about Sustainable Energy SDG-7 project' },
    { label: 'Ocular Vision', type: 'ask_question', payload: 'Tell me about Ocular Vision project' },
    { label: 'WhatsApp', type: 'open_url', payload: PERSONAL_INFO.whatsappUrl },
    { label: 'Academics & CGPA', type: 'ask_question', payload: 'What is your CGPA & College details?' },
    { label: 'Certifications', type: 'ask_question', payload: 'What certifications do you have?' },
    { label: 'Resume PDF', type: 'download_resume' }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-teju-ai',
      sender: 'bot',
      text: "Greetings! 👋 I'm Teju AI, powered by Gemini 2.5 Flash.\n\nAsk me anything about Tejaswini's AIML projects, skills, academic record, or certifications!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: initialWelcomeActions
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickPrompts = [
    'Tell me about Sustainable Energy SDG-7 project',
    'Tell me about Ocular Vision project',
    'How to chat on WhatsApp?',
    'What is your tech stack?',
    'What is your CGPA & College?',
    'What are your certifications?',
    'How can I contact Tejaswini?'
  ];

  const getContextualActions = (query: string): ActionItem[] => {
    const q = query.toLowerCase();
    if (q.includes('vton') || q.includes('project') || q.includes('code')) {
      return [
        { label: '🚀 Scroll to Projects', type: 'scroll_section', payload: 'projects' },
        { label: '📄 Download Resume', type: 'download_resume' },
        { label: '💬 Contact on WhatsApp', type: 'open_url', payload: PERSONAL_INFO.whatsappUrl }
      ];
    }
    if (q.includes('instagram') || q.includes('contact') || q.includes('reach') || q.includes('whatsapp') || q.includes('social')) {
      return [
        { label: '📷 Open Instagram', type: 'open_url', payload: PERSONAL_INFO.instagram },
        { label: '💬 WhatsApp Chat', type: 'open_url', payload: PERSONAL_INFO.whatsappUrl },
        { label: '💼 Open LinkedIn', type: 'open_url', payload: PERSONAL_INFO.linkedin },
        { label: '📄 Download Resume', type: 'download_resume' }
      ];
    }
    if (q.includes('education') || q.includes('college') || q.includes('cgpa') || q.includes('intern') || q.includes('experience')) {
      return [
        { label: '📄 Download Resume PDF', type: 'download_resume' },
        { label: '🚀 View Experience Section', type: 'scroll_section', payload: 'experience' },
        { label: '🛠️ View Technical Skills', type: 'ask_question', payload: 'What is your tech stack?' }
      ];
    }
    return [
      { label: '📄 Download Resume', type: 'download_resume' },
      { label: '💼 LinkedIn Profile', type: 'open_url', payload: PERSONAL_INFO.linkedin },
      { label: '💬 WhatsApp Chat', type: 'open_url', payload: PERSONAL_INFO.whatsappUrl }
    ];
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        return (
          <a
            key={i}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-red-bright)', textDecoration: 'underline', fontWeight: 600 }}
          >
            {match[1]}
          </a>
        );
      }

      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return (
        <React.Fragment key={i}>
          {boldParts.map((sub, j) => {
            if (sub.startsWith('**') && sub.endsWith('**')) {
              return <strong key={j} style={{ color: '#fff', fontWeight: 700 }}>{sub.slice(2, -2)}</strong>;
            }
            return sub;
          })}
        </React.Fragment>
      );
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev: Message[]) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    try {
      const reply = await askGeminiAI(text, apiKey);
      const botMsg: Message = {
        id: Math.random().toString(),
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: getContextualActions(text)
      };
      setMessages((prev: Message[]) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: ActionItem) => {
    switch (action.type) {
      case 'download_resume':
        window.open(`${import.meta.env.BASE_URL}Tejaswini_Y_Resume.pdf`, '_blank');
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: 'bot',
            text: "📄 **Downloading Tejaswini Y's official resume PDF...**",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        break;

      case 'scroll_section':
        if (action.payload) {
          const el = document.getElementById(action.payload);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMessages((prev) => [
              ...prev,
              {
                id: Math.random().toString(),
                sender: 'bot',
                text: `🚀 **Navigating page to ${action.payload.toUpperCase()} section...**`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            ]);
          }
        }
        break;

      case 'open_url':
        if (action.payload) {
          window.open(action.payload, '_blank');
        }
        break;

      case 'ask_question':
        if (action.payload) {
          handleSendMessage(action.payload);
        }
        break;
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (id: string, isLike: boolean) => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id === id) {
          return {
            ...msg,
            liked: isLike ? !msg.liked : false,
            disliked: !isLike ? !msg.disliked : false
          };
        }
        return msg;
      })
    );
  };

  const getFemaleVoice = (): SpeechSynthesisVoice | null => {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const maleKeywords = [
      'david', 'mark', 'george', 'guy', 'ryan', 'christopher', 'eric', 
      'james', 'liam', 'noah', 'oliver', 'thomas', 'alex', 'daniel', 
      'fred', 'rishi', 'prabhat', 'ravi', 'google us english', 'male'
    ];

    const knownFemaleNames = [
      'zira', 'jenny', 'aria', 'samantha', 'victoria', 'karen', 'moira', 
      'fiona', 'veena', 'tessa', 'allison', 'ava', 'susan', 'serena', 
      'zoe', 'hazel', 'sonia', 'mia', 'eva', 'catherine', 'cyberva', 
      'female', 'woman', 'girl', 'helena', 'google uk english female'
    ];

    // 1. Match known female voices and exclude male voices
    const explicitFemale = voices.find((v) => {
      const nameLower = v.name.toLowerCase();
      const isMale = maleKeywords.some((m) => nameLower.includes(m) && !nameLower.includes('female'));
      if (isMale) return false;
      return knownFemaleNames.some((f) => nameLower.includes(f));
    });

    if (explicitFemale) return explicitFemale;

    // 2. English voice that is not explicitly male
    const englishNonMale = voices.find((v) => {
      const nameLower = v.name.toLowerCase();
      const isMale = maleKeywords.some((m) => nameLower.includes(m) && !nameLower.includes('female'));
      return (v.lang.startsWith('en') || v.lang.startsWith('EN')) && !isMale;
    });

    if (englishNonMale) return englishNonMale;

    // 3. Fallback to any non-male voice
    const anyNonMale = voices.find((v) => {
      const nameLower = v.name.toLowerCase();
      return !maleKeywords.some((m) => nameLower.includes(m) && !nameLower.includes('female'));
    });

    return anyNonMale || voices[0] || null;
  };

  const handleSpeak = (id: string, text: string) => {
    if ('speechSynthesis' in window) {
      if (speakingId === id) {
        window.speechSynthesis.cancel();
        setSpeakingId(null);
        return;
      }
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*#_`\[\]()]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);

      // Select female voice exclusively
      const femaleVoice = getFemaleVoice();
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.pitch = 1.25; // Clear natural female pitch
      utterance.rate = 1.0;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);

      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: Math.random().toString(),
        sender: 'bot',
        text: "Conversation reset! 👋 What would you like to explore next?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: initialWelcomeActions
      }
    ]);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 300 }}>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--accent-red)',
            border: 'none',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(230, 0, 0, 0.5)',
            position: 'relative',
            transition: 'var(--transition-smooth)'
          }}
          title="Open Teju AI Chatbot"
        >
          <Bot size={28} />
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#10b981',
              border: '2px solid #070506'
            }}
          />
        </button>
      )}

      {/* Floating Gemini Chat Window */}
      {isOpen && (
        <div
          style={{
            width: '430px',
            height: '610px',
            maxWidth: 'calc(100vw - 32px)',
            maxHeight: 'calc(100vh - 48px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95), 0 0 30px rgba(230, 0, 0, 0.2)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(220, 38, 38, 0.35)',
            background: '#070506'
          }}
        >
          {/* Top Header Bar */}
          <div
            style={{
              background: 'rgba(230, 0, 0, 0.08)',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(220, 38, 38, 0.18)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--accent-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Bot size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.04em' }}>
                  TEJU AI <span style={{ fontSize: '0.62rem', padding: '2px 8px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(220, 38, 38, 0.3)', color: 'var(--accent-red-bright)', fontWeight: 600, fontFamily: 'var(--font-code)', letterSpacing: '0.08em' }}>Gemini Bot</span>
                </h4>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-body)' }}>
                  <span className="red-pulse-star" style={{ width: '6px', height: '6px' }}></span> Google Gemini Active
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={() => setShowKeyInput(!showKeyInput)}
                style={{ background: 'transparent', border: 'none', color: apiKey ? 'var(--accent-emerald)' : 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                title="Configure Gemini API Key"
              >
                <Key size={16} />
              </button>
              <button
                onClick={handleClearHistory}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                title="Clear Chat History"
              >
                <Trash2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                title="Close Chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Optional Custom API Key Drawer */}
          {showKeyInput && (
            <div
              style={{
                padding: '12px 18px',
                background: 'rgba(9, 14, 36, 0.95)',
                borderBottom: '1px solid var(--bg-glass-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter custom Gemini / OpenAI API Key..."
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--bg-glass-border)',
                  borderRadius: 'var(--radius-full)',
                  padding: '8px 14px',
                  color: '#fff',
                  fontSize: '0.8rem',
                  outline: 'none',
                  fontFamily: 'var(--font-body)'
                }}
              />
              <button
                onClick={() => setShowKeyInput(false)}
                style={{
                  background: 'var(--accent-gold)',
                  border: 'none',
                  color: '#07090e',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.05em'
                }}
              >
                Save
              </button>
            </div>
          )}

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '18px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: 'rgba(5, 8, 20, 0.92)'
            }}
          >
            {messages.map((msg: Message) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  position: 'relative'
                }}
              >
                {/* Chat Bubble */}
                <div
                  style={{
                    maxWidth: '90%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                    borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                    background:
                      msg.sender === 'user'
                        ? 'linear-gradient(135deg, #A00000 0%, #680000 100%)'
                        : '#130D10',
                    border: msg.sender === 'user' ? '1px solid rgba(255, 60, 60, 0.4)' : '1px solid rgba(220, 38, 38, 0.2)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    letterSpacing: '0.01em',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    boxShadow: msg.sender === 'user' ? '0 4px 20px rgba(230, 0, 0, 0.3)' : 'none'
                  }}
                >
                  {renderFormattedText(msg.text)}

                  {/* Interactive Action Buttons inside Bot Bubble */}
                  {msg.sender === 'bot' && msg.actions && msg.actions.length > 0 && (
                    <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '10px', borderTop: '1px solid rgba(230, 207, 171, 0.12)' }}>
                      {msg.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleActionClick(act)}
                          style={{
                            background: 'rgba(230, 0, 0, 0.1)',
                            border: '1px solid rgba(220, 38, 38, 0.25)',
                            color: 'var(--accent-red-bright)',
                            padding: '5px 12px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-body)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          <span>{act.label}</span>
                          <ArrowRight size={11} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message Timestamp & Interactive Bot Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px', padding: '0 4px' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                    {msg.timestamp}
                  </span>

                  {msg.sender === 'bot' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => handleCopyMessage(msg.id, msg.text)}
                        style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                        title="Copy message"
                      >
                        {copiedId === msg.id ? <Sparkles size={13} color="var(--accent-red-bright)" /> : <Copy size={13} />}
                      </button>

                      <button
                        onClick={() => handleSpeak(msg.id, msg.text)}
                        style={{ background: 'transparent', border: 'none', color: speakingId === msg.id ? 'var(--accent-red-bright)' : 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                        title="Read aloud"
                      >
                        <Volume2 size={13} />
                      </button>

                      <button
                        onClick={() => handleFeedback(msg.id, true)}
                        style={{ background: 'transparent', border: 'none', color: msg.liked ? 'var(--accent-red-bright)' : 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                        title="Helpful"
                      >
                        <ThumbsUp size={13} />
                      </button>

                      <button
                        onClick={() => handleFeedback(msg.id, false)}
                        style={{ background: 'transparent', border: 'none', color: msg.disliked ? '#ef4444' : 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                        title="Not helpful"
                      >
                        <ThumbsDown size={13} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-red-bright)', fontSize: '0.8rem', fontFamily: 'var(--font-code)' }}>
                <span className="red-pulse-star" style={{ width: '6px', height: '6px' }}></span> Teju AI is composing response...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div
            style={{
              padding: '10px 14px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderTop: '1px solid rgba(220, 38, 38, 0.15)',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto'
            }}
          >
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(qp)}
                style={{
                  whiteSpace: 'nowrap',
                  background: 'rgba(230, 0, 0, 0.08)',
                  border: '1px solid rgba(220, 38, 38, 0.25)',
                  color: 'var(--accent-red-bright)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(230, 0, 0, 0.18)';
                  e.currentTarget.style.borderColor = 'var(--accent-red-bright)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(230, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.25)';
                }}
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: '14px 18px',
              background: '#070506',
              borderTop: '1px solid rgba(220, 38, 38, 0.18)',
              display: 'flex',
              gap: '10px'
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask Gemini anything about Tejaswini..."
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(220, 38, 38, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: '10px 18px',
                color: '#fff',
                fontSize: '0.88rem',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.01em'
              }}
            />
            <button
              type="submit"
              className="btn-red"
              style={{ padding: '10px 18px', fontSize: '0.75rem', borderRadius: 'var(--radius-full)' }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
