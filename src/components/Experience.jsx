import { motion } from 'framer-motion';
import { Briefcase, CalendarBlank } from '@phosphor-icons/react';

const EXPERIENCE = [
  {
    company: 'Careers360',
    role: 'AI Engineer — Voice AI & Conversational Systems',
    period: 'Jan 2026 - Present',
    location: 'Hyderabad, India',
    current: true,
    bullets: [
      'Architected voice AI career counselor using Claude/Bedrock + Sarvam AI (STT/TTS) + pgvector serving 10K+ sessions',
      'RAG pipeline reduces hallucinations 35%; LangSmith observability tracking latency, cost, quality',
      'Optimized costs 40% ($0.40→$0.24/session) via prompt caching + A/B testing',
      'Built multi-agent workflow (function calling) improving accuracy 28%; AWS Lambda with 99.7% uptime',
    ],
    stack: ['Claude/Bedrock', 'Sarvam AI', 'pgvector', 'LangSmith', 'AWS Lambda', 'FastAPI'],
  },
  {
    company: 'Crystaltech Services',
    role: 'AI Engineer',
    period: 'Aug 2024 - Dec 2025',
    location: 'Remote, India',
    current: false,
    bullets: [
      'Built RAG pipelines with hybrid search (BM25+vector) + Cohere reranker improving retrieval 85%→91%',
      'Fine-tuned Mistral 7B (LoRA/PEFT) from 78%→92% accuracy; training cost $50 vs $2K full retrain',
      'A/B tested GPT-4 vs Claude achieving 60% cost savings; W&B monitoring 50+ LLM iterations',
      'Built 4-agent document system (LangGraph) processing 500+ docs with 94% accuracy; 75% time reduction',
    ],
    stack: ['Mistral 7B', 'LoRA/PEFT', 'LangGraph', 'Cohere', 'W&B', 'GPT-4', 'Claude'],
  },
  {
    company: 'STL Digital Limited',
    role: 'System Engineer (AI/ML Focus)',
    period: 'Jun 2022 - Jul 2024',
    location: 'Pune, India',
    current: false,
    bullets: [
      'Built RAG system improving accuracy 40% (65%→91%) using ChromaDB + GPT-3.5; 500+ daily queries at 1.8s response',
      'AI-assisted validation reducing errors 60%; deployed Streamlit dashboard to AWS serving 500+ daily users',
      'Implemented pytest suite with 85% coverage; CI/CD pipeline via GitHub Actions',
    ],
    stack: ['ChromaDB', 'GPT-3.5', 'Streamlit', 'AWS', 'pytest', 'GitHub Actions'],
  },
];

const CERTS = [
  { name: 'AWS ML Specialty', status: 'In Progress', year: '2025' },
  { name: 'Deep Learning Specialization', org: 'Coursera', year: '2022' },
  { name: 'LangChain', org: '8 merged PRs', year: '2023' },
  { name: 'LlamaIndex', org: '3 merged PRs', year: '2023' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.32, 0.72, 0, 1] },
  }),
};

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeUp} custom={0} style={{ marginBottom: 16 }}>
          <span className="eyebrow">Work History</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: '#f5f5f5',
            marginBottom: 56,
          }}
        >
          3 years building prod AI
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 12,
            alignItems: 'start',
          }}
          className="exp-grid"
        >
          {/* Left column — all 3 job cards stacked vertically */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {EXPERIENCE.map((job, ji) => (
              <motion.div key={job.company} variants={fadeUp} custom={ji + 2} className="card-outer">
                <div className="card-inner" style={{ padding: '32px 28px' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f5f5' }}>
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="tag tag-accent">
                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                            Current
                          </span>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Briefcase size={13} weight="light" style={{ color: 'var(--accent)' }} />
                        <span style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600 }}>{job.company}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>{job.location}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CalendarBlank size={13} weight="light" style={{ color: 'var(--text-muted)' }} />
                      <span style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: 11,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.04em',
                      }}>
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />

                  {/* Bullets */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                    {job.bullets.map(b => (
                      <li key={b} style={{
                        display: 'flex', alignItems: 'flex-start', gap: 10,
                        fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6,
                      }}>
                        <span style={{
                          color: 'var(--accent)',
                          marginTop: 6,
                          flexShrink: 0,
                          width: 4, height: 4, borderRadius: '50%',
                          background: 'var(--accent)',
                          display: 'inline-block',
                        }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {job.stack.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar — certs */}
          <motion.div variants={fadeUp} custom={5} className="card-outer">
            <div className="card-inner" style={{ padding: '28px 24px' }}>
              <h4 style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: "'Geist Mono', monospace",
                color: 'var(--accent)',
                marginBottom: 20,
              }}>
                Certifications
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {CERTS.map(cert => (
                  <div key={cert.name} style={{
                    paddingBottom: 16,
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#f5f5f5', marginBottom: 4, lineHeight: 1.4 }}>
                      {cert.name}
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      {cert.org && (
                        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{cert.org}</span>
                      )}
                      {cert.status && (
                        <span className="tag tag-accent" style={{ fontSize: 9, padding: '2px 8px' }}>{cert.status}</span>
                      )}
                      <span style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: 10,
                        color: 'var(--text-muted)',
                        marginLeft: 'auto',
                      }}>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
