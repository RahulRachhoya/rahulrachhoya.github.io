import { motion } from 'framer-motion';
import { Buildings, BookOpen, Trophy } from '@phosphor-icons/react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } },
};

const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section label */}
        <motion.div variants={fadeUp} style={{ marginBottom: 16 }}>
          <span className="eyebrow">Player Profile</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: '#f5f5f5',
            marginBottom: 60,
            maxWidth: 600,
          }}
        >
          Building AI that actually
          <span style={{ color: 'var(--accent)' }}> works in prod</span>
        </motion.h2>

        {/* Bento grid */}
        <motion.div
          variants={stagger}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: 12,
          }}
          className="about-bento"
        >
          {/* Bio card — large */}
          <motion.div variants={fadeUp} className="card-outer" style={{ gridRow: 'span 2' }}>
            <div className="card-inner" style={{ padding: '36px 32px', height: '100%' }}>
              <div style={{
                width: 48, height: 48,
                borderRadius: 14,
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: 24,
              }}>
                <Buildings size={24} weight="light" />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16, color: '#f5f5f5' }}>
                AI Engineer at Careers360
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
                Building production AI infrastructure for India's largest edtech platform. My work spans
                voice-first AI counselors using Claude and Sarvam AI, retrieval-augmented generation with
                pgvector and hybrid search, fine-tuned Mistral 7B for domain-specific tasks, and
                multi-agent orchestration with LangGraph and CrewAI.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>
                My focus is the intersection of real-world constraints and cutting-edge AI: shipping systems
                that are observable, cost-efficient, and genuinely useful to the 500+ daily users who depend on them.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Python', 'LangGraph', 'CrewAI', 'AWS Bedrock', 'FastAPI', 'pgvector', 'Claude'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div variants={fadeUp} className="card-outer">
            <div className="card-inner" style={{ padding: '28px 24px' }}>
              <div style={{
                width: 38, height: 38,
                borderRadius: 10,
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: 16,
              }}>
                <BookOpen size={20} weight="light" />
              </div>
              <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8, color: '#f5f5f5' }}>
                University of Hyderabad
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.6 }}>
                Computer Science
              </p>
            </div>
          </motion.div>

          {/* Achievements card */}
          <motion.div variants={fadeUp} className="card-outer">
            <div className="card-inner" style={{ padding: '28px 24px' }}>
              <div style={{
                width: 38, height: 38,
                borderRadius: 10,
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: 16,
              }}>
                <Trophy size={20} weight="light" />
              </div>
              <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12, color: '#f5f5f5' }}>
                Highlights
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  'Mistral 7B: 78% → 92% accuracy',
                  '5K+ article views',
                  'Open-source: LangChain',
                ].map(item => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 6,
                    fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5,
                  }}>
                    <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .about-bento { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          .about-bento > *:first-child { grid-row: auto !important; }
        }
      `}</style>
    </section>
  );
}
