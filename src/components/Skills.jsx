import { useEffect, useRef, useState } from 'react';

/* ─── Animated stat bar ─── */
const StatBar = ({ label, value, barClass, icon, detail }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={barRef} className="space-y-1">
      <div className="flex justify-between items-center mb-1">
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', color: 'var(--rp-light)', letterSpacing: '0.08em' }}>
          {icon} {label}
        </span>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', color: 'var(--rp-gold)' }}>
          {value}/100
        </span>
      </div>
      <div className="stat-bar-container">
        <div
          className={`stat-bar-fill ${barClass}`}
          style={{ width: `${width}%`, transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </div>
      {detail && (
        <p style={{ fontFamily: 'var(--font-retro)', fontSize: '0.85rem', color: 'var(--rp-gray-dim)' }}>
          {detail}
        </p>
      )}
    </div>
  );
};

const Skills = () => {
  const stats = [
    { label: 'FRONTEND',    value: 88, barClass: 'bar-hp',  icon: '⚔️', detail: 'React · Next.js · Vue · Tailwind' },
    { label: 'BACKEND',     value: 90, barClass: 'bar-mp',  icon: '🛡️', detail: 'Node · Deno · Django · FastAPI' },
    { label: 'AI / ML',     value: 82, barClass: 'bar-mag', icon: '🔮', detail: 'LangGraph · CrewAI · Bedrock · RAG' },
    { label: 'DATABASES',   value: 85, barClass: 'bar-xp',  icon: '🗃️', detail: 'Postgres · Redis · Supabase · Mongo' },
    { label: 'DEVOPS',      value: 78, barClass: 'bar-def', icon: '☁️', detail: 'Docker · K8s · AWS · Cloudflare' },
    { label: 'SECURITY',    value: 75, barClass: 'bar-atk', icon: '🔐', detail: 'Pentesting · Bug Bounty · CVE Research' },
    { label: 'TYPESCRIPT',  value: 92, barClass: 'bar-spd', icon: '⚡', detail: 'Advanced types · Monorepos · DX' },
    { label: 'PYTHON',      value: 90, barClass: 'bar-hp',  icon: '🐍', detail: 'Async · ML · Automation · Scripting' },
  ];

  const techTags = [
    { name: 'React',       color: 'pixel-tag' },
    { name: 'TypeScript',  color: 'pixel-tag' },
    { name: 'Python',      color: 'pixel-tag' },
    { name: 'Deno',        color: 'pixel-tag' },
    { name: 'LangGraph',   color: 'pixel-tag-gold' },
    { name: 'CrewAI',      color: 'pixel-tag-gold' },
    { name: 'AWS Bedrock', color: 'pixel-tag-gold' },
    { name: 'PostgreSQL',  color: 'pixel-tag-green' },
    { name: 'Redis',       color: 'pixel-tag-green' },
    { name: 'Supabase',    color: 'pixel-tag-green' },
    { name: 'Docker',      color: 'pixel-tag' },
    { name: 'Cloudflare',  color: 'pixel-tag' },
    { name: 'Rust',        color: 'pixel-tag-gold' },
    { name: 'Go',          color: 'pixel-tag' },
    { name: 'Pentesting',  color: 'pixel-tag red' },
    { name: 'WebSocket',   color: 'pixel-tag-green' },
    { name: 'OpenAI',      color: 'pixel-tag-gold' },
    { name: 'ClickHouse',  color: 'pixel-tag' },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">⚔️ CHARACTER STATS ⚔️</span>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
            SKILL TREE
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Stat bars panel */}
          <div
            className="pixel-card pixel-card-purple"
            style={{ background: 'var(--rp-deep)' }}
          >
            {/* Panel header */}
            <div
              className="flex items-center gap-2 mb-6 pb-4"
              style={{ borderBottom: '2px solid var(--rp-purple)' }}
            >
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.55rem', color: 'var(--rp-gold)', letterSpacing: '0.1em' }}>
                ♦ BASE STATS
              </span>
            </div>

            <div className="space-y-5">
              {stats.map((s, i) => (
                <StatBar key={i} {...s} />
              ))}
            </div>
          </div>

          {/* Tech tags panel */}
          <div className="space-y-6">
            <div className="pixel-card pixel-card-gold">
              <div
                className="flex items-center gap-2 mb-5 pb-3"
                style={{ borderBottom: '2px solid var(--rp-gold)' }}
              >
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.55rem', color: 'var(--rp-gold)', letterSpacing: '0.1em' }}>
                  ♦ EQUIPPED ITEMS
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag, i) => (
                  <span key={i} className={`pixel-tag ${tag.color === 'pixel-tag-gold' ? 'pixel-tag-gold' : tag.color === 'pixel-tag-green' ? 'pixel-tag-green' : ''}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Character class card */}
            <div className="pixel-card" style={{ background: 'linear-gradient(135deg, var(--rp-deep), var(--rp-purple-dark))' }}>
              <div
                className="mb-4 pb-3"
                style={{ borderBottom: '2px dashed rgba(255,255,255,0.2)', fontFamily: 'var(--font-pixel)', fontSize: '0.55rem', color: 'var(--rp-cyan)', letterSpacing: '0.1em' }}
              >
                ♦ CHARACTER CLASS
              </div>
              <div className="space-y-3">
                {[
                  { class: 'ARCANE ENGINEER',  desc: 'Multi-agent AI systems, LLM orchestration, production ML',   icon: '🔮' },
                  { class: 'BERSERKER CODER',  desc: 'Zero-cost infra, 188 tests, 500:1 leverage trading engine',  icon: '⚔️' },
                  { class: 'SHADOW HUNTER',    desc: 'Bug bounty, CVE research, OSploit framework, OS security',   icon: '🗡️' },
                ].map((c, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span style={{ fontSize: '1.2rem' }}>{c.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', color: 'var(--rp-gold)', marginBottom: '4px' }}>
                        {c.class}
                      </div>
                      <p style={{ fontFamily: 'var(--font-retro)', fontSize: '0.95rem', color: 'var(--rp-gray)' }}>
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
