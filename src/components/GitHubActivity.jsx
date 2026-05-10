import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGitHubActivity, useGitHubStats, formatEvent } from '../hooks/useGitHub';

/* ── Pixel skeleton loader ──────────────────────────────────────────────── */
const Skeleton = ({ w = '100%', h = '20px' }) => (
  <div
    style={{
      width: w, height: h,
      background: 'linear-gradient(90deg, var(--rp-purple-dark) 25%, var(--rp-purple) 50%, var(--rp-purple-dark) 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
      imageRendering: 'pixelated',
    }}
  />
);

export default function GitHubActivity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { events, loading: evLoading } = useGitHubActivity({ limit: 8 });
  const { stats, loading: stLoading } = useGitHubStats();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };
  const item = {
    hidden: { opacity: 0, x: -20 },
    show:   { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } },
  };

  return (
    <section
      id="activity"
      ref={ref}
      className="section"
      style={{ background: 'var(--rp-black)', borderTop: '3px solid var(--rp-purple)' }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">⚡ LIVE SYNC ⚡</span>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
            GITHUB ACTIVITY LOG
          </h2>
          <div className="section-divider mx-auto mt-3" />
          <p style={{ fontFamily: 'var(--font-retro)', color: 'var(--rp-gray)', marginTop: '8px', fontSize: '0.9rem' }}>
            Auto-synced from{' '}
            <a
              href="https://github.com/RahulRachhoya"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--rp-cyan)', textDecoration: 'none', borderBottom: '1px dashed var(--rp-cyan)' }}
            >
              github.com/RahulRachhoya
            </a>
          </p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            maxWidth: '600px',
            margin: '0 auto 40px',
          }}
        >
          {[
            { label: 'PUBLIC REPOS', value: stLoading ? '…' : stats.repos, icon: '📁' },
            { label: 'TOTAL STARS',  value: stLoading ? '…' : stats.stars,  icon: '⭐' },
            { label: 'TOTAL FORKS',  value: stLoading ? '…' : stats.forks,  icon: '🍴' },
          ].map((s) => (
            <div
              key={s.label}
              className="pixel-card"
              style={{ textAlign: 'center', padding: '16px 12px' }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '1rem',
                  color: 'var(--rp-gold)',
                  marginBottom: '4px',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.38rem',
                  color: 'var(--rp-gray-dim)',
                  letterSpacing: '0.08em',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Activity feed */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.45rem',
              color: 'var(--rp-gold)',
              letterSpacing: '0.1em',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                background: '#22c55e',
                borderRadius: '50%',
                animation: 'blink 1.2s step-end infinite',
                boxShadow: '0 0 6px #22c55e',
              }}
            />
            LIVE FEED — RECENT COMMITS &amp; EVENTS
          </div>

          {evLoading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="pixel-card" style={{ padding: '14px 16px' }}>
                  <Skeleton h="16px" w="70%" />
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <div className="pixel-card" style={{ textAlign: 'center', padding: '32px' }}>
              <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', color: 'var(--rp-gray)' }}>
                NO RECENT PUBLIC ACTIVITY
              </p>
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              {events.map((ev, i) => {
                const fmt = formatEvent(ev);
                return (
                  <motion.div
                    key={ev.id ?? i}
                    variants={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      background: 'var(--rp-dark)',
                      border: '2px solid var(--rp-purple-dark)',
                      boxShadow: '3px 3px 0 #000',
                      transition: 'border-color 0.15s',
                      cursor: 'default',
                    }}
                    whileHover={{ borderColor: fmt.color, x: 4 }}
                  >
                    {/* Icon */}
                    <span style={{ fontSize: '1.1rem', flexShrink: 0, width: '24px', textAlign: 'center' }}>
                      {fmt.icon}
                    </span>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.95rem', color: 'var(--rp-light)' }}>
                        {fmt.label}{' '}
                      </span>
                      <a
                        href={fmt.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-pixel)',
                          fontSize: '0.5rem',
                          color: fmt.color,
                          textDecoration: 'none',
                          letterSpacing: '0.05em',
                          wordBreak: 'break-all',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
                      >
                        {fmt.repo}
                      </a>
                    </div>

                    {/* Date badge */}
                    <span
                      style={{
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '0.38rem',
                        color: 'var(--rp-gray-dim)',
                        flexShrink: 0,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {fmt.date}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Footer link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            style={{ marginTop: '24px', textAlign: 'center' }}
          >
            <a
              href="https://github.com/RahulRachhoya?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn pixel-btn-secondary"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              ⬡ VIEW ALL REPOS ON GITHUB
            </a>
          </motion.div>
        </div>
      </div>

      {/* shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
