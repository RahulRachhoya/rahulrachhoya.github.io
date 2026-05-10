import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGitHubProfile, useGitHubStats } from '../hooks/useGitHub';

const TITLES = [
  'FULL-STACK DEVELOPER',
  'AI ENGINEER',
  'SYSTEMS BUILDER',
  'OPEN-SOURCE CRAFTER',
];

function useTypewriter(texts, speed = 60, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[ti];
    const delay = deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, ci + 1));
        if (ci + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCi(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDeleting(false);
          setTi(t => (t + 1) % texts.length);
          setCi(0);
        } else {
          setCi(c => c - 1);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [ci, deleting, ti, texts, speed, pause]);

  return display;
}

/* Tiny pixel wizard SVG — pure CSS art */
function PixelWizard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ lineHeight: 1, userSelect: 'none' }}
    >
      <svg
        width="96" height="96" viewBox="0 0 16 16"
        style={{ imageRendering: 'pixelated', display: 'block' }}
      >
        {/* hat */}
        <rect x="6" y="0" width="4" height="1" fill="#FFD700"/>
        <rect x="5" y="1" width="6" height="1" fill="#FFD700"/>
        <rect x="4" y="2" width="8" height="1" fill="#FFD700"/>
        <rect x="3" y="3" width="10" height="1" fill="#6B46C1"/>
        {/* face */}
        <rect x="5" y="4" width="6" height="4" fill="#F4C27F"/>
        <rect x="5" y="5" width="2" height="1" fill="#1A1A2E"/>
        <rect x="9" y="5" width="2" height="1" fill="#1A1A2E"/>
        <rect x="6" y="7" width="4" height="1" fill="#C0392B"/>
        {/* robe */}
        <rect x="4" y="8"  width="8" height="5" fill="#6B46C1"/>
        <rect x="3" y="9"  width="2" height="4" fill="#553C9A"/>
        <rect x="11" y="9" width="2" height="4" fill="#553C9A"/>
        <rect x="5" y="8"  width="6" height="1" fill="#C4B5FD"/>
        {/* staff */}
        <rect x="13" y="3" width="1" height="9" fill="#A0522D"/>
        <rect x="12" y="2" width="3" height="3" fill="#00FFFF"/>
        {/* feet */}
        <rect x="5"  y="13" width="2" height="2" fill="#1A1A2E"/>
        <rect x="9"  y="13" width="2" height="2" fill="#1A1A2E"/>
      </svg>
    </motion.div>
  );
}

const SPARKLE_POSITIONS = [
  { x: -60, y: -20, delay: 0,    dur: 2.0 },
  { x:  70, y: -40, delay: 0.4,  dur: 2.3 },
  { x: -50, y:  50, delay: 0.8,  dur: 1.8 },
  { x:  55, y:  35, delay: 1.2,  dur: 2.1 },
  { x:   0, y: -60, delay: 1.6,  dur: 2.5 },
  { x: -80, y:  10, delay: 0.6,  dur: 1.9 },
  { x:  80, y:   5, delay: 1.0,  dur: 2.2 },
];

export default function Hero() {
  const subtitle = useTypewriter(TITLES, 65, 1600);
  const { profile } = useGitHubProfile();
  const { stats } = useGitHubStats();

  const liveStats = [
    { label: 'FOLLOWERS', value: profile?.followers ?? '…', icon: '👥' },
    { label: 'REPOS',     value: stats.repos          || '…', icon: '📁' },
    { label: 'STARS',     value: stats.stars          || '…', icon: '⭐' },
  ];

  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '96px',
        position: 'relative',
      }}
    >
      {/* Available badge */}
      <motion.div
        className="powerup-badge"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{ marginBottom: '40px' }}
      >
        <motion.span
          className="powerup-dot"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
        />
        AVAILABLE FOR HIRE
      </motion.div>

      {/* Wizard + sparkles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.4, type: 'spring', stiffness: 200 }}
        style={{ position: 'relative', marginBottom: '40px' }}
      >
        {SPARKLE_POSITIONS.map((s, i) => (
          <motion.span
            key={i}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: `translate(calc(-50% + ${s.x}px), calc(-50% + ${s.y}px))`,
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.5rem',
              color: i % 3 === 0 ? 'var(--rp-gold)' : i % 3 === 1 ? 'var(--rp-cyan)' : 'var(--rp-pink)',
              pointerEvents: 'none',
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
          >
            ✦
          </motion.span>
        ))}
        <PixelWizard />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 'clamp(1rem, 3vw, 1.75rem)',
          color: 'var(--rp-white)',
          letterSpacing: '0.08em',
          marginBottom: '20px',
          textShadow: '3px 3px 0 #000',
        }}
      >
        RAHUL RACHHOYA
      </motion.h1>

      {/* Typewriter subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 'clamp(0.5rem, 1.4vw, 0.75rem)',
          color: 'var(--rp-gold)',
          letterSpacing: '0.1em',
          marginBottom: '36px',
          minHeight: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          textShadow: '2px 2px 0 var(--rp-gold-dim)',
        }}
      >
        {subtitle}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
          style={{
            display: 'inline-block',
            width: '10px', height: '1.1em',
            background: 'var(--rp-gold)',
            verticalAlign: 'middle',
          }}
        />
      </motion.div>

      {/* ── Live GitHub stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.4 }}
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '48px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {liveStats.map((s) => (
          <a
            key={s.label}
            href="https://github.com/RahulRachhoya"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 14px',
              background: 'var(--rp-dark)',
              border: '2px solid var(--rp-purple)',
              boxShadow: '3px 3px 0 #000',
              textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--rp-gold)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--rp-purple)'}
          >
            <span style={{ fontSize: '0.9rem' }}>{s.icon}</span>
            <span style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.6rem',
              color: 'var(--rp-gold)',
            }}>
              {s.value}
            </span>
            <span style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.35rem',
              color: 'var(--rp-gray-dim)',
              letterSpacing: '0.06em',
            }}>
              {s.label}
            </span>
          </a>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.4 }}
        style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}
      >
        <motion.a
          href="#projects"
          className="pixel-btn pixel-btn-primary"
          whileHover={{ x: -2, y: -2 }}
          whileTap={{ x: 2, y: 2 }}
        >
          ▶ VIEW QUESTS
        </motion.a>
        <motion.a
          href="https://github.com/RahulRachhoya"
          target="_blank"
          rel="noreferrer"
          className="pixel-btn pixel-btn-gold"
          whileHover={{ x: -2, y: -2 }}
          whileTap={{ x: 2, y: 2 }}
        >
          ⬇ DOWNLOAD SAVE
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '0.45rem',
          color: 'var(--rp-gray)',
          letterSpacing: '0.2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <span>▼ SCROLL</span>
      </motion.div>
    </section>
  );
}
