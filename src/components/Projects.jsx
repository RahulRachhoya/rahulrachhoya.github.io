import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGitHubRepos } from '../hooks/useGitHub';

/* ── Featured projects (real resume data) ─────────────────── */
const FEATURED = [
  {
    name: 'Voice AI Career Counselor',
    genre: '🎙️ VOICE AI',
    desc: 'End-to-end voice agent with Claude/Bedrock + Sarvam AI STT/TTS + pgvector RAG. Emotion detection, real-time streaming. 10K+ sessions, 88% satisfaction, 1.8s avg response.',
    stack: ['Claude/Bedrock', 'Sarvam AI', 'pgvector', 'FastAPI', 'LangSmith'],
    link: null,
    stars: null,
    color: 'var(--rp-purple)',
  },
  {
    name: 'Multi-Agent Document Intelligence',
    genre: '🤖 MULTI-AGENT',
    desc: '4-agent LangGraph system (extraction → validation → summarization → orchestrator). Processes 500+ docs at 94% accuracy — 75% time reduction (30min→7min).',
    stack: ['LangGraph', 'Function Calling', 'Python', 'AWS'],
    link: null,
    stars: null,
    color: 'var(--rp-cyan)',
  },
  {
    name: 'LLM Observability Dashboard',
    genre: '📊 MLOPS',
    desc: 'End-to-end monitoring with LangSmith + W&B + Prometheus. A/B tested GPT-4 vs Claude — 60% cost savings. Prompt caching cut costs 25%; latency improved 41% (3.2s→1.9s).',
    stack: ['LangSmith', 'W&B', 'Prometheus', 'Grafana', 'Python'],
    link: null,
    stars: null,
    color: 'var(--rp-gold)',
  },
  {
    name: 'Fine-Tuned Domain LLM',
    genre: '🧬 FINE-TUNING',
    desc: 'Fine-tuned Mistral 7B on 5K domain examples with LoRA/PEFT. 78%→92% accuracy, 40% latency reduction, training cost $50 vs $2K full retrain. 1000+ daily inferences.',
    stack: ['Mistral 7B', 'LoRA', 'PEFT', 'Hugging Face', 'AWS SageMaker'],
    link: null,
    stars: null,
    color: 'var(--rp-green)',
  },
  {
    name: 'TradeKit',
    genre: '💹 FINTECH',
    desc: 'Production-grade trading platform — Cloudflare Pages + Deno Deploy + Supabase + Redis. OANDA + Binance WS. 500:1 leverage, crypto-INR pairs. ₹0/mo infra.',
    stack: ['Deno', 'Supabase', 'Redis', 'Cloudflare', 'OANDA', 'Razorpay'],
    link: 'https://github.com/RahulRachhoya/tradekit',
    stars: null,
    color: 'var(--rp-white)',
  },
  {
    name: 'AI Agent OS',
    genre: '🧠 AGENTS',
    desc: 'Multi-agent autonomous business OS automating freelance operations. CrewAI + LangGraph + AWS Bedrock. HITL workflows, production AI systems, Indian market targeting.',
    stack: ['CrewAI', 'LangGraph', 'AWS Bedrock', 'Supabase', 'Python'],
    link: 'https://github.com/RahulRachhoya/ai_agent_os',
    stars: null,
    color: 'var(--rp-purple)',
  },
];

/* ── Skeleton ──────────────────────────────────────────────── */
const Skeleton = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
    {[...Array(3)].map((_, i) => (
      <div key={i} style={{ height: '140px', background: 'rgba(255,255,255,0.04)', border: '2px solid rgba(255,255,255,0.08)', animation: 'blink 1.2s step-end infinite' }} />
    ))}
  </div>
);

/* ── Featured card ─────────────────────────────────────────── */
const FeaturedCard = ({ p, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="pixel-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -4, boxShadow: `6px 10px 0 #000` }}
      style={{ borderColor: `${p.color}66`, display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.38rem', color: p.color, border: `1px solid ${p.color}55`, padding: '2px 8px', background: `${p.color}10` }}>
          {p.genre}
        </span>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.38rem', color: 'var(--rp-gray)', textDecoration: 'none' }}>
            ⬡ SRC
          </a>
        )}
      </div>

      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.52rem', color: 'white', letterSpacing: '0.04em', marginBottom: '8px' }}>
        {p.name}
      </div>

      <p style={{ fontFamily: 'var(--font-retro)', fontSize: '0.88rem', color: 'var(--rp-light)', lineHeight: 1.55, flex: 1, marginBottom: '12px' }}>
        {p.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px' }}>
        {p.stack.map((s) => (
          <span key={s} style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.35rem', color: p.color, border: `1px solid ${p.color}44`, padding: '2px 6px', background: `${p.color}08` }}>
            {s}
          </span>
        ))}
      </div>

      {p.link && (
        <a
          href={p.link} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
            color: 'var(--rp-black)', background: p.color,
            padding: '8px', textDecoration: 'none',
            boxShadow: '3px 3px 0 #000', letterSpacing: '0.06em',
          }}
        >
          ▶ VIEW PROJECT
        </a>
      )}
    </motion.div>
  );
};

/* ── Live repo card ────────────────────────────────────────── */
const RepoCard = ({ repo }) => (
  <motion.a
    href={repo.html_url} target="_blank" rel="noopener noreferrer"
    whileHover={{ y: -3 }}
    style={{
      display: 'block', padding: '12px 14px', textDecoration: 'none',
      background: 'var(--rp-black)', border: '2px solid rgba(255,255,255,0.12)',
      boxShadow: '3px 3px 0 #000',
    }}
  >
    <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.48rem', color: 'var(--rp-cyan)', marginBottom: '4px', letterSpacing: '0.04em' }}>
      {repo.name}
    </div>
    {repo.description && (
      <div style={{ fontFamily: 'var(--font-retro)', fontSize: '0.82rem', color: 'var(--rp-gray)', marginBottom: '8px', lineHeight: 1.4 }}>
        {repo.description.slice(0, 90)}{repo.description.length > 90 ? '…' : ''}
      </div>
    )}
    <div style={{ display: 'flex', gap: '12px', fontFamily: 'var(--font-pixel)', fontSize: '0.38rem', color: 'var(--rp-gray)' }}>
      {repo.language && <span style={{ color: 'var(--rp-purple)' }}>● {repo.language}</span>}
      {repo.stargazers_count > 0 && <span>⭐ {repo.stargazers_count}</span>}
      {repo.forks_count > 0 && <span>⑂ {repo.forks_count}</span>}
    </div>
  </motion.a>
);

/* ── Main ──────────────────────────────────────────────────── */
const Projects = () => {
  const { repos, loading, error } = useGitHubRepos('RahulRachhoya', 6);

  return (
    <section id="projects" className="section" style={{ background: 'var(--rp-black)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">🎮 PROJECTS 🎮</span>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
            QUEST INVENTORY
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Featured grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1100px',
          margin: '0 auto 3rem',
        }}>
          {FEATURED.map((p, i) => <FeaturedCard key={p.name} p={p} index={i} />)}
        </div>

        {/* Live GitHub repos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ maxWidth: '1100px', margin: '0 auto' }}
        >
          <div style={{
            fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
            color: 'var(--rp-gold)', letterSpacing: '0.1em',
            marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            ⬡ LIVE FROM GITHUB
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.38rem', color: 'var(--rp-green)', border: '1px solid var(--rp-green)', padding: '1px 6px' }}>
              AUTO-SYNC
            </span>
          </div>

          {loading && <Skeleton />}
          {error && (
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gray)', padding: '16px', border: '2px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              ⚠ GITHUB API OFFLINE — CHECK BACK SOON
            </div>
          )}
          {!loading && !error && repos.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {repos.map((r) => <RepoCard key={r.id} repo={r} />)}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a
              href="https://github.com/RahulRachhoya?tab=repositories"
              target="_blank" rel="noopener noreferrer"
              className="pixel-btn"
              style={{ display: 'inline-flex' }}
            >
              ▶ VIEW ALL ON GITHUB
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
