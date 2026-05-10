import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGitHubRepos } from '../hooks/useGitHub';

/* ── Featured projects (hand-crafted RPG metadata) ────────────────────── */
const PROJECTS = [
  {
    id: 'ai-agent-os',
    title: 'AI AGENT OS',
    subtitle: '16-BIT ARCHITECTURE',
    accent: 'var(--rp-purple)',
    accentBg: '#2D2B4A',
    difficulty: 5,
    genre: 'AI · AUTOMATION',
    desc: 'Multi-agent freelance automation OS. Orchestrates CrewAI + LangGraph agents for proposal writing, client research, and invoice generation — targeting Indian freelancers.',
    tags: ['Python', 'CrewAI', 'LangGraph', 'AWS Bedrock', 'Supabase'],
    link: 'https://github.com/RahulRachhoya/ai_agent_os',
    btnLabel: '▶ START GAME',
    btnCls: 'pixel-btn-primary',
    art: '🤖',
    artBg: 'linear-gradient(135deg, #1a0a2e, #2d1a4a)',
  },
  {
    id: 'tradekit',
    title: 'TRADEKIT',
    subtitle: 'FINTECH ENGINE',
    accent: 'var(--rp-gold)',
    accentBg: '#2A2400',
    difficulty: 4,
    genre: 'FINTECH · TRADING',
    desc: 'XM.com broker clone with 500:1 leverage and crypto-INR pairs — running at ₹0/mo infra on Cloudflare Pages + Deno Deploy + Supabase. Full order book, SL/TP, live WS feeds.',
    tags: ['React', 'Deno', 'Supabase', 'OANDA', 'Razorpay', 'Binance WS'],
    link: 'https://github.com/RahulRachhoya/tradekit',
    btnLabel: '▶ START GAME',
    btnCls: 'pixel-btn-gold',
    art: '📈',
    artBg: 'linear-gradient(135deg, #1a1500, #2a2000)',
  },
  {
    id: 'careers360-ai',
    title: 'CAREERS360 AI',
    subtitle: 'EDU-TECH PLATFORM',
    accent: 'var(--rp-cyan)',
    accentBg: '#00282A',
    difficulty: 5,
    genre: 'ED-TECH · SCALE',
    desc: 'AI-powered education platform serving 40M+ students. Built personalized college recommendation engine, AI-driven search, and micro-service migration across the entire product.',
    tags: ['React', 'Django', 'AWS', 'PostgreSQL', 'Elasticsearch'],
    link: 'https://careers360.com',
    btnLabel: '▶ VIEW DEMO',
    btnCls: 'pixel-btn-ghost',
    art: '🎓',
    artBg: 'linear-gradient(135deg, #001a1a, #002828)',
  },
];

/* Repos to hide from the "More from GitHub" live section */
const FEATURED_NAMES = ['ai_agent_os', 'tradekit', 'RahulRachhoya'];

/* ── Cartridge card (featured) ─────────────────────────────────────────── */
function CartridgeCard({ project, animate, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.4, type: 'spring', stiffness: 160 }}
      whileHover={{ y: -4, transition: { duration: 0.1 } }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Cartridge shell */}
      <div style={{
        background: project.accentBg,
        border: `4px solid ${project.accent}`,
        boxShadow: `8px 8px 0 #000`,
        clipPath: 'polygon(0 0, 100% 0, 100% 92%, 96% 100%, 4% 100%, 0 92%)',
        overflow: 'hidden',
      }}>
        {/* Label strip */}
        <div style={{
          background: project.accent === 'var(--rp-gold)' ? 'var(--rp-gold)' :
                      project.accent === 'var(--rp-cyan)' ? 'var(--rp-cyan)' : 'var(--rp-purple)',
          padding: '8px 14px',
          borderBottom: '3px solid #000',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-pixel)', fontSize: '0.38rem',
            color: project.accent === 'var(--rp-gold)' ? '#000' : 'var(--rp-white)',
            fontWeight: 'bold', letterSpacing: '0.1em',
          }}>
            {project.subtitle}
          </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <div style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.7)' }} />
            <div style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.4)' }} />
          </div>
        </div>

        {/* Cover art area */}
        <div style={{
          height: '140px', position: 'relative',
          background: project.artBg,
          borderBottom: '3px solid rgba(255,255,255,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '4rem',
          overflow: 'hidden',
        }}>
          {project.art}
          {/* genre badge */}
          <div style={{
            position: 'absolute', bottom: '8px', left: '10px',
            fontFamily: 'var(--font-pixel)', fontSize: '0.35rem',
            background: '#000',
            color: project.accent === 'var(--rp-gold)' ? 'var(--rp-gold)' :
                   project.accent === 'var(--rp-cyan)' ? 'var(--rp-cyan)' : 'var(--rp-purple)',
            padding: '3px 7px',
            border: `1px solid ${project.accent}`,
          }}>
            {project.genre}
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: '16px' }}>
          <h3 style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(0.55rem, 1.3vw, 0.72rem)',
            color: 'var(--rp-white)',
            marginBottom: '6px',
          }}>
            {project.title}
          </h3>

          {/* difficulty stars */}
          <div style={{ display: 'flex', gap: '3px', marginBottom: '10px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{
                fontSize: '0.75rem',
                color: i < project.difficulty ? 'var(--rp-gold)' : 'var(--rp-gray-dim)',
              }}>★</span>
            ))}
          </div>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.78rem',
            color: 'var(--rp-gray)', lineHeight: 1.55, marginBottom: '12px',
            minHeight: '72px',
          }}>
            {project.desc}
          </p>

          {/* tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
            {project.tags.map(t => (
              <span key={t} className="pixel-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA button — outside clip-path so shadow shows */}
      <motion.a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className={`pixel-btn ${project.btnCls}`}
        style={{
          marginTop: '12px',
          width: '100%',
          justifyContent: 'center',
          fontSize: '0.55rem',
        }}
        whileHover={{ x: -2, y: -2 }}
        whileTap={{ x: 2, y: 2 }}
      >
        {project.btnLabel}
      </motion.a>
    </motion.div>
  );
}

/* ── Live repo mini-card ─────────────────────────────────────────────────── */
const LANG_COLORS = {
  Python: '#3572A5', TypeScript: '#2b7489', JavaScript: '#f1e05a',
  Rust: '#dea584', Go: '#00ADD8', Java: '#b07219', 'C++': '#f34b7d',
  HTML: '#e34c26', CSS: '#563d7c', Shell: '#89e051', Dart: '#00B4AB',
};

function LiveRepoCard({ repo, delay, animate }) {
  const lang = repo.language;
  const langColor = lang ? (LANG_COLORS[lang] ?? 'var(--rp-gray)') : null;

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.35, type: 'spring', stiffness: 200 }}
      whileHover={{ y: -3, borderColor: 'var(--rp-cyan)' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '16px',
        background: 'var(--rp-dark)',
        border: '2px solid var(--rp-purple-dark)',
        boxShadow: '4px 4px 0 #000',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'border-color 0.15s',
      }}
    >
      {/* Repo name */}
      <div style={{
        fontFamily: 'var(--font-pixel)',
        fontSize: 'clamp(0.42rem, 1vw, 0.55rem)',
        color: 'var(--rp-cyan)',
        letterSpacing: '0.06em',
        wordBreak: 'break-all',
      }}>
        📂 {repo.name}
      </div>

      {/* Description */}
      {repo.description && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.78rem',
          color: 'var(--rp-gray)',
          lineHeight: 1.5,
          margin: 0,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {repo.description}
        </p>
      )}

      {/* Footer: lang + stars + forks */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: 'auto' }}>
        {langColor && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: langColor, display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.37rem', color: 'var(--rp-gray)' }}>
              {lang}
            </span>
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.37rem', color: 'var(--rp-gold)' }}>
            ⭐ {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.37rem', color: 'var(--rp-gray-dim)' }}>
            🍴 {repo.forks_count}
          </span>
        )}
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.35rem', color: 'var(--rp-gray-dim)', marginLeft: 'auto' }}>
          {new Date(repo.updated_at).toLocaleDateString('en-IN', { month: 'short', year: '2-digit' })}
        </span>
      </div>
    </motion.a>
  );
}

/* ── Skeleton loader ─────────────────────────────────────────────────────── */
function RepoSkeleton() {
  return (
    <div style={{
      padding: '16px',
      background: 'var(--rp-dark)',
      border: '2px solid var(--rp-purple-dark)',
      boxShadow: '4px 4px 0 #000',
    }}>
      {[80, 100, 60].map((w, i) => (
        <div key={i} style={{
          height: i === 0 ? '14px' : '11px',
          width: `${w}%`,
          marginBottom: '10px',
          background: 'linear-gradient(90deg, var(--rp-purple-dark) 25%, var(--rp-purple) 50%, var(--rp-purple-dark) 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
        }} />
      ))}
    </div>
  );
}

/* ── Main section ────────────────────────────────────────────────────────── */
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { repos, loading } = useGitHubRepos({ limit: 6, exclude: FEATURED_NAMES });

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">SELECT MODULE</span>
          <h2 style={{ color: 'var(--rp-white)' }}>▸ GAME LIBRARY</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Featured cartridge cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '64px',
        }}>
          {PROJECTS.map((p, i) => (
            <CartridgeCard key={p.id} project={p} animate={inView} delay={0.1 + i * 0.12} />
          ))}
        </div>

        {/* ── Live repos from GitHub ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <div style={{ flex: 1, height: '2px', background: 'var(--rp-purple-dark)' }} />
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.42rem',
              color: 'var(--rp-gold)',
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                display: 'inline-block',
                width: '8px', height: '8px',
                background: '#22c55e',
                borderRadius: '50%',
                animation: 'blink 1.2s step-end infinite',
                boxShadow: '0 0 6px #22c55e',
              }} />
              LIVE FROM GITHUB
            </div>
            <div style={{ flex: 1, height: '2px', background: 'var(--rp-purple-dark)' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px',
          }}>
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <RepoSkeleton key={i} />)
              : repos.map((repo, i) => (
                  <LiveRepoCard
                    key={repo.id}
                    repo={repo}
                    animate={inView}
                    delay={0.5 + i * 0.07}
                  />
                ))
            }
          </div>

          {!loading && repos.length === 0 && (
            <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gray)', textAlign: 'center', padding: '24px' }}>
              NO PUBLIC REPOS FOUND
            </p>
          )}
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
