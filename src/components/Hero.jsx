import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Brain, Microphone } from '@phosphor-icons/react';
import ThreeBackground from './ThreeBackground';

const TYPED_WORDS = ['LLM Systems', 'RAG Pipelines', 'Voice AI', 'MLOps', 'Multi-Agent'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];
    if (!deleting && displayed.length < word.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, wordIdx]);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* 3D WebGL background */}
      <ThreeBackground />

      {/* Radial glow blobs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '55%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
      }}
        className="hero-grid"
      >
        {/* LEFT — text */}
        <div>
          {/* Available tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            style={{ marginBottom: 24 }}
          >
            <span className="tag tag-accent">
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#22c55e',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              Available for hire
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            style={{
              fontSize: 'clamp(42px, 6vw, 76px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: '#f5f5f5',
              marginBottom: 16,
            }}
          >
            Rahul<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>Rachhoya</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 20,
              fontFamily: "'Geist Mono', monospace",
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: 'var(--text-secondary)',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>AI Engineer</span>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: '#f5f5f5', minWidth: 180 }}>
              {displayed}
              <span style={{
                display: 'inline-block',
                width: 2,
                height: '1em',
                background: 'var(--accent)',
                marginLeft: 2,
                verticalAlign: 'text-bottom',
                animation: 'blink 1s step-end infinite',
              }} />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            style={{
              color: 'var(--text-secondary)',
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 440,
              marginBottom: 36,
            }}
          >
            3+ years building production LLM systems at Careers360.
            40% cost cuts, 35% hallucination drops, 10K+ voice sessions.
            Obsessed with measurable impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--accent)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '9999px',
                padding: '12px 22px',
                fontWeight: 600,
                fontSize: 14,
                transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(59,130,246,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View Projects
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: 'rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.35s cubic-bezier(0.32,0.72,0,1)',
              }}>
                <ArrowUpRight size={12} weight="bold" />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="https://github.com/RahulRachhoya"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.04)',
                color: '#f5f5f5',
                textDecoration: 'none',
                borderRadius: '9999px',
                padding: '12px 22px',
                fontWeight: 500,
                fontSize: 14,
                border: '1px solid var(--border)',
                transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              GitHub Profile
            </a>
          </motion.div>
        </div>

        {/* RIGHT — stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          }}
          className="hero-cards"
        >
          {[
            { icon: <Microphone size={22} weight="light" />, label: 'Voice Sessions', value: '10K+', sub: 'served at Careers360' },
            { icon: <Brain size={22} weight="light" />, label: 'Hallucination', value: '-35%', sub: 'via RAG + hybrid search' },
            { icon: <Code size={22} weight="light" />, label: 'LLM Cost Cut', value: '40%', sub: 'prompt cache + A/B' },
            { icon: <ArrowUpRight size={22} weight="light" />, label: 'YoE', value: '3+', sub: 'years in production AI' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="card-outer"
              style={{ cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <div className="card-inner" style={{ padding: '20px 18px' }}>
                <div style={{
                  color: 'var(--accent)',
                  marginBottom: 12,
                  width: 38, height: 38,
                  borderRadius: 10,
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: '#f5f5f5',
                  lineHeight: 1,
                  marginBottom: 4,
                  fontFamily: "'Geist Mono', monospace",
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        background: 'linear-gradient(to top, var(--bg), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 40px !important; }
          .hero-cards { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
