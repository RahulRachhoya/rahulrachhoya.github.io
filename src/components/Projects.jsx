import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Microphone, Robot, GearSix, ChartLineUp } from '@phosphor-icons/react';

const PROJECTS = [
  {
    id: 1,
    icon: <Microphone size={22} weight="light" />,
    tag: 'Voice AI',
    title: 'Voice AI Career Counselor',
    desc: 'End-to-end voice agent with Claude/Bedrock + Sarvam AI STT/TTS + pgvector RAG. Emotion detection, real-time streaming. 10K+ sessions, 88% satisfaction, 1.8s avg response.',
    stack: ['Claude/Bedrock', 'Sarvam AI', 'pgvector', 'FastAPI', 'LangSmith'],
    stat: { label: 'Sessions', value: '10K+' },
    link: 'https://github.com/RahulRachhoya',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, transparent 60%)',
  },
  {
    id: 2,
    icon: <Robot size={22} weight="light" />,
    tag: 'Multi-Agent',
    title: 'Multi-Agent Document Intelligence',
    desc: 'CrewAI orchestration with 5 specialized agents (researcher, extractor, summarizer, auditor, reporter). RAG across 1M+ token corpora, automatic citation tracking.',
    stack: ['CrewAI', 'LangGraph', 'Claude', 'Qdrant', 'Python'],
    stat: { label: 'Token Context', value: '1M+' },
    link: 'https://github.com/RahulRachhoya',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.10) 0%, transparent 60%)',
  },
  {
    id: 3,
    icon: <GearSix size={22} weight="light" />,
    tag: 'Fine-tuning',
    title: 'Mistral 7B Domain Fine-tune',
    desc: 'LoRA/PEFT fine-tuning on education domain corpus. Jumped from 78% to 92% intent accuracy at $50 vs $2K for full retrain. Deployed on SageMaker with A/B routing.',
    stack: ['Mistral 7B', 'LoRA/PEFT', 'SageMaker', 'W&B', 'LangSmith'],
    stat: { label: 'Accuracy', value: '92%' },
    link: 'https://github.com/RahulRachhoya',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.10) 0%, transparent 60%)',
  },
  {
    id: 4,
    icon: <ChartLineUp size={22} weight="light" />,
    tag: 'MLOps',
    title: 'LLM Observability Dashboard',
    desc: 'Streamlit + Prometheus/Grafana dashboard tracking latency, cost, hallucination rate, and user satisfaction across 500+ daily users. Auto-alerting on degradation.',
    stack: ['Streamlit', 'Prometheus', 'Grafana', 'AWS', 'LangSmith'],
    stat: { label: 'Daily Users', value: '500+' },
    link: 'https://github.com/RahulRachhoya',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, transparent 60%)',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="card-outer"
      style={{ cursor: 'default' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
    >
      <div className="card-inner" style={{
        padding: '28px 26px',
        background: `var(--surface-2), ${project.gradient}`,
        backgroundImage: project.gradient,
        backgroundBlendMode: 'overlay',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 40, height: 40,
              borderRadius: 12,
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent)',
            }}>
              {project.icon}
            </div>
            <span className="tag tag-accent">{project.tag}</span>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              width: 34, height: 34,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>

        {/* Stat */}
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 32,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: '#f5f5f5',
          lineHeight: 1,
          marginBottom: 4,
        }}>
          {project.stat.value}
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Geist Mono', monospace", marginBottom: 16 }}>
          {project.stat.label}
        </div>

        <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f5f5', marginBottom: 10, lineHeight: 1.3 }}>
          {project.title}
        </h3>

        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
          {project.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.stack.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      >
        <span className="eyebrow" style={{ display: 'block', marginBottom: 16 }}>Quest Inventory</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: '#f5f5f5',
            maxWidth: 500,
          }}>
            Production AI systems
          </h2>
          <a
            href="https://github.com/RahulRachhoya"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: 13,
              borderBottom: '1px solid var(--border)',
              paddingBottom: 2,
              transition: 'color 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#f5f5f5'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            View all on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 12,
      }}
        className="projects-grid"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
