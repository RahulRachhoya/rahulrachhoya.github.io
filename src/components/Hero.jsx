import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGitHubProfile, useGitHubStats } from '../hooks/useGitHub';

const TITLES = [
  'AI ENGINEER',
  'LLM ARCHITECT',
  'VOICE AI BUILDER',
  'RAG SPECIALIST',
  'FULL-STACK DEV',
  'MLOPS ENGINEER',
];

const SPARKLE_POSITIONS = [
  { top: '8%',  left: '12%' }, { top: '15%', left: '75%' },
  { top: '70%', left: '8%'  }, { top: '60%', left: '85%' },
  { top: '35%', left: '92%' }, { top: '80%', left: '60%' },
];

const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const { profile } = useGitHubProfile('RahulRachhoya');
  const { totalStars, totalRepos, loading: statsLoading } = useGitHubStats('RahulRachhoya');

  useEffect(() => {
    const t = setInterval(() => setTitleIdx((i) => (i + 1) % TITLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { label: 'REPOS',     value: statsLoading ? '…' : totalRepos,                       color: 'var(--rp-cyan)'   },
    { label: 'STARS',     value: statsLoading ? '…' : totalStars,                       color: 'var(--rp-gold)'   },
    { label: 'FOLLOWERS', value: statsLoading ? '…' : (profile?.followers ?? '…'),      color: 'var(--rp-purple)' },
    { label: 'YRS EXP',   value: '3+',                                                  color: 'var(--rp-green)'  },
  ];

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(180deg, var(--rp-black) 0%, var(--rp-deep) 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Scanline overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
        zIndex: 1,
      }} />

      {/* Sparkles */}
      {SPARKLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', ...pos, zIndex: 2, fontSize: '0.9rem', color: 'var(--rp-gold)', pointerEvents: 'none' }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity }}
        >✦</motion.div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem', alignItems: 'center',
        }}>

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Available badge */}
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-pixel)', fontSize: '0.45rem',
                color: 'var(--rp-green)', border: '2px solid var(--rp-green)',
                padding: '4px 12px', marginBottom: '1.5rem',
                background: 'rgba(0,255,136,0.08)', letterSpacing: '0.1em',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--rp-green)', display: 'inline-block', boxShadow: '0 0 6px var(--rp-green)' }} />
              AVAILABLE FOR HIRE
            </motion.div>

            {/* Name */}
            <h1 style={{
              fontFamily: 'var(--font-pixel)', lineHeight: 1.15,
              fontSize: 'clamp(1rem, 4vw, 1.9rem)',
              color: 'white', letterSpacing: '0.04em', marginBottom: '0.75rem',
            }}>
              RAHUL<br />
              <span style={{ color: 'var(--rp-purple)' }}>RACHHOYA</span>
            </h1>

            {/* Rotating title */}
            <div style={{ height: '2rem', marginBottom: '1.25rem', overflow: 'hidden' }}>
              <motion.div
                key={titleIdx}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.28 }}
                style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem', color: 'var(--rp-cyan)', letterSpacing: '0.12em' }}
              >
                ▶ {TITLES[titleIdx]}
              </motion.div>
            </div>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'var(--font-retro)', fontSize: '1.05rem',
              color: 'var(--rp-light)', lineHeight: 1.7, marginBottom: '2rem',
              maxWidth: '480px',
            }}>
              AI Engineer with 3+ years building production LLM systems — RAG pipelines, Voice AI,
              fine-tuning & MLOps on AWS. Obsessed with measurable impact: 40% cost cuts, 35% hallucination drops, 10K+ sessions served.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="pixel-btn pixel-btn-gold"
                style={{ textDecoration: 'none' }}
              >
                ⚔ VIEW QUESTS
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Rahul_Rachhoya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', letterSpacing: '0.1em',
                  color: 'var(--rp-gold)', border: '3px solid var(--rp-gold)',
                  padding: '10px 18px', background: 'rgba(255,204,0,0.08)',
                  boxShadow: '4px 4px 0 #000', textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                ⬇ RESUME
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="pixel-btn"
                style={{ textDecoration: 'none' }}
              >
                💬 CONTACT NPC
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right: avatar stage ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
          >
            {/* Avatar */}
            <div style={{ position: 'relative' }}>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '160px', height: '160px',
                  border: '4px solid var(--rp-gold)',
                  background: 'linear-gradient(135deg, var(--rp-purple-dark), var(--rp-black))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '5rem', boxShadow: '8px 8px 0 #000, 0 0 30px rgba(139,92,246,0.3)',
                }}
              >
                🧙
              </motion.div>

              {/* Level badge */}
              <div style={{
                position: 'absolute', bottom: '-10px', right: '-10px',
                background: 'var(--rp-gold)', color: 'var(--rp-black)',
                fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
                padding: '4px 8px', border: '2px solid var(--rp-black)',
                boxShadow: '2px 2px 0 #000', letterSpacing: '0.08em',
              }}>LVL 26</div>
            </div>

            {/* HP / MP bars */}
            <div style={{ width: '100%', maxWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'HP', pct: 94, color: 'var(--rp-green)',  desc: 'AI Engineering' },
                { label: 'MP', pct: 88, color: 'var(--rp-purple)', desc: 'System Design'  },
                { label: 'XP', pct: 76, color: 'var(--rp-gold)',   desc: 'To Next Level'  },
              ].map(({ label, pct, color, desc }) => (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.42rem', color }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.38rem', color: 'var(--rp-gray)' }}>{desc}</span>
                  </div>
                  <div style={{ height: '12px', background: 'var(--rp-black)', border: '2px solid rgba(255,255,255,0.18)', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${color}88, ${color})`,
                        boxShadow: `0 0 8px ${color}66`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Live stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', width: '100%', maxWidth: '280px' }}>
              {stats.map(({ label, value, color }) => (
                <div key={label} style={{
                  background: 'var(--rp-black)', border: `2px solid ${color}44`,
                  padding: '8px 4px', textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.55rem', color, marginBottom: '2px' }}>{value}</div>
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.35rem', color: 'var(--rp-gray)' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
