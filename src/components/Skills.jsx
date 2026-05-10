import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILLS = [
  { name: 'React / Next.js',  pct: 95, cls: 'bar-hp',  icon: '⚛',  color: 'var(--rp-cyan)' },
  { name: 'Python / Django', pct: 90, cls: 'bar-mp',  icon: '🐍',  color: 'var(--mp-color)' },
  { name: 'AI / ML / LLMs',  pct: 85, cls: 'bar-mag', icon: '🤖',  color: 'var(--rp-pink)' },
  { name: 'Node.js / Deno',  pct: 80, cls: 'bar-spd', icon: '⚡',  color: 'var(--rp-cyan)' },
  { name: 'PostgreSQL',      pct: 78, cls: 'bar-def', icon: '🗄',  color: 'var(--rp-orange)' },
  { name: 'AWS / Cloud',     pct: 75, cls: 'bar-atk', icon: '☁',  color: 'var(--rp-red)' },
  { name: 'TypeScript',      pct: 88, cls: 'bar-xp',  icon: '📘',  color: 'var(--rp-gold)' },
  { name: 'Docker / CI',     pct: 72, cls: 'bar-hp',  icon: '🐳',  color: 'var(--hp-full)' },
];

const TOOLS = [
  'Supabase', 'Redis', 'LangGraph', 'CrewAI',
  'Cloudflare', 'Vite', 'Tailwind', 'Framer Motion',
  'GitHub Actions', 'Razorpay', 'OANDA', 'Binance WS',
];

function SkillBar({ name, pct, cls, color, icon, animate, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={animate ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.35 }}
      style={{
        background: 'var(--rp-black)',
        border: '2px solid var(--rp-purple)',
        boxShadow: '3px 3px 0 #000',
        padding: '14px 16px',
      }}
    >
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '8px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1rem' }}>{icon}</span>
          <span style={{
            fontFamily: 'var(--font-pixel)', fontSize: '0.44rem',
            color: 'var(--rp-white)', letterSpacing: '0.05em',
          }}>{name}</span>
        </div>
        <span style={{
          fontFamily: 'var(--font-pixel)', fontSize: '0.44rem',
          color, textShadow: `1px 1px 0 #000`,
        }}>{pct}</span>
      </div>
      <div className="stat-bar-container">
        <div
          className={`stat-bar-fill ${cls}`}
          style={{ width: animate ? `${pct}%` : '0%' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">STAT SHEET</span>
          <h2 style={{ color: 'var(--rp-white)' }}>▸ SKILL TREE</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Main skill bars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '12px',
          marginBottom: '48px',
        }}>
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} {...s} animate={inView} delay={0.05 * i} />
          ))}
        </div>

        {/* Tools / stack tags */}
        <motion.div
          className="pixel-card pixel-card-purple"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div style={{
            fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
            color: 'var(--rp-gold)', marginBottom: '18px', letterSpacing: '0.1em',
          }}>
            ▸ EQUIPMENT / TOOLS
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {TOOLS.map((t, i) => (
              <motion.span
                key={t}
                className="pixel-tag pixel-tag-gold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.04, duration: 0.25 }}
                whileHover={{ y: -2, x: -1 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
