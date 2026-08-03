import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { EducationSkillsProcessQuote } from './components/EducationSkillsProcessQuote';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { AIChatBot } from './components/AIChatBot';
import { ScrollReveal } from './components/ScrollReveal';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#070506' }}>
      {/* Top Glass Shell Header */}
      <Header onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections with Pop-Up Scroll Reveal */}
      <main style={{ width: '100%' }}>
        <ScrollReveal>
          <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <EducationSkillsProcessQuote />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Floating Button */}
      <AIChatBot />

      {/* Interactive CLI Shell Modal */}
      <InteractiveTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}

export default App;
