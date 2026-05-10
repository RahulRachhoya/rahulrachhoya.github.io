import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const quests = [
  {
    company: 'Careers360',
    role: 'AI Engineer – Voice AI & Conversational Systems',
    period: 'JAN 2026 – PRESENT',
    location: 'India',
    status: 'ACTIVE QUEST',
    statusColor: 'var(--rp-green)',
    icon: '⚔️',
    xp: '+2400 XP',
    bullets: [
      'Architected voice-based AI career counseling agent using Claude/Bedrock + Sarvam AI (STT/TTS) + pgvector RAG — grounded hallucinations on 10K+ sessions',
      'Implemented LangSmith observability across latency, cost & quality; optimized 40% cost via prompt caching & A/B testing ($0.40→$0.24/session)',
      'Built multi-agent workflow: intent classifier → retriever → counselor → roadmap; +28% accuracy; deployed on AWS at 99.7% uptime',
    ],
    stack: ['Claude/Bedrock', 'Sarvam AI', 'pgvector', 'LangSmith', 'AWS', 'FastAPI'],
  },
  {
    company: 'Crystaltech Services',
    role: 'AI Engineer',
    period: 'AUG 2024 – DEC 2025',
    location: 'India',
    status: 'COMPLETED',
    statusColor: 'var(--rp-cyan)',
    icon: '🏆',
    xp: '+1800 XP',
    bullets: [
      'Built RAG pipelines (FAISS, Pinecone) reducing hallucinations by 35%; fine-tuned Mistral 7B with LoRA achieving 92% accuracy vs 78% baseline — 40% faster inference',
      'Implemented hybrid search (BM25 + vector) with Cohere reranking — retrieval 85%→91%; monitored 50+ LLM iterations with Weights & Biases',
    ],
    stack: ['Mistral 7B', 'LoRA/PEFT', 'FAISS', 'Pinecone', 'Cohere', 'W&B'],
  },
  {
    company: 'STL Digital Limited',
    role: 'System Engineer (AI Context)',
    period: 'JUN 2022 – JUL 2024',
    location: 'Pune, India',
    status: 'COMPLETED',
    statusColor: 'var(--rp-cyan)',
    icon: '⚡',
    xp: '+1200 XP',
    bullets: [
      'Implemented RAG-based systems improving accuracy by 40%; built AI-assisted validation reducing errors by 60%',
      'Deployed Streamlit dashboard on AWS serving 500+ daily users; built pytest suite with 85%+ coverage',
    ],
    stack: ['Python', 'RAG', 'Streamlit', 'AWS', 'PostgreSQL', 'pytest'],
  },
];

const QuestCard = ({ quest, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
    >
      {/* Timeline spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px', flexShrink: 0 }}>
        <div style={{
          width: '40px', height: '40px',
          border: '3px solid var(--rp-purple)',
          background: 'var(--rp-purple-dark)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem', boxShadow: '3px 3px 0 #000',
        }}>{quest.icon}</div>
        <div style={{ width: '2px', flex: 1, background: 'var(--rp-purple)', minHeight: '20px', marginTop: '4px' }} />
      </div>

      {/* Card */}
      <div className="pixel-card pixel-card-purple" style={{ flex: 1, marginBottom: '1.5rem' }}>
        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.55rem', color: 'white', letterSpacing: '0.05em', marginBottom: '4px' }}>
              {quest.role}
            </div>
            <div style={{ fontFamily: 'var(--font-retro)', fontSize: '1rem', color: 'var(--rp-cyan)', fontWeight: 700 }}>
              {quest.company}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <span style={{
              fontFamily: 'var(--font-pixel)', fontSize: '0.4rem',
              color: quest.statusColor, border: `2px solid ${quest.statusColor}`,
              padding: '2px 8px', letterSpacing: '0.08em',
            }}>{quest.status}</span>
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.4rem', color: 'var(--rp-gold)' }}>{quest.xp}</span>
          </div>
        </div>

        {/* Period */}
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.42rem', color: 'var(--rp-gray)', marginBottom: '12px', letterSpacing: '0.08em' }}>
          📅 {quest.period} · 📍 {quest.location}
        </div>

        {/* Bullets */}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
          {quest.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: '8px', fontFamily: 'var(--font-retro)', fontSize: '0.9rem', color: 'var(--rp-light)', lineHeight: 1.5 }}>
              <span style={{ color: 'var(--rp-gold)', flexShrink: 0 }}>▶</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {quest.stack.map((s) => (
            <span key={s} style={{
              fontFamily: 'var(--font-pixel)', fontSize: '0.38rem',
              color: 'var(--rp-cyan)', border: '1px solid var(--rp-cyan)',
              padding: '2px 8px', background: 'rgba(0,255,255,0.07)',
              letterSpacing: '0.06em',
            }}>{s}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" className="section" style={{ background: 'var(--rp-black)' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">📜 QUEST LOG 📜</span>
        <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
          PROFESSIONAL HISTORY
        </h2>
        <div className="section-divider mx-auto mt-3" />
      </div>

      <div className="max-w-3xl mx-auto">
        {quests.map((q, i) => <QuestCard key={q.company} quest={q} index={i} />)}

        {/* Education unlock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pixel-card"
          style={{ borderColor: 'var(--rp-gold)', marginTop: '0.5rem' }}
        >
          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.8rem' }}>🎓</span>
            <div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.55rem', color: 'var(--rp-gold)', marginBottom: '4px', letterSpacing: '0.06em' }}>
                EDUCATION UNLOCKED
              </div>
              <div style={{ fontFamily: 'var(--font-retro)', fontSize: '1rem', color: 'white', fontWeight: 700 }}>
                MCA — Master of Computer Applications
              </div>
              <div style={{ fontFamily: 'var(--font-retro)', fontSize: '0.9rem', color: 'var(--rp-cyan)' }}>
                University of Hyderabad · 2019–2022
              </div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.4rem', color: 'var(--rp-gray)', marginTop: '4px' }}>
                FOCUS: Artificial Intelligence · Data Science · Machine Learning
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
