import { useEffect, useState, useRef } from 'react';

/* ─── Sparkle particle ─── */
const Sparkle = ({ x, y, delay }) => (
  <div
    className="absolute pointer-events-none select-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `twinkle ${2 + delay}s ease-in-out ${delay}s infinite alternate`,
      fontSize: '10px',
      color: Math.random() > 0.5 ? 'var(--rp-gold)' : 'var(--rp-cyan)',
    }}
  >
    {['✦', '✧', '★', '✶', '✸'][Math.floor(Math.random() * 5)]}
  </div>
);

/* ─── Pixel avatar (CSS art) ─── */
const PixelAvatar = () => {
  const colors = {
    skin: '#FFCCAA',
    hair: '#2D1B69',
    shirt: '#6B46C1',
    eye: '#2D1B69',
    shadow: '#CC9977',
    pixel: '#8B5CF6',
  };

  // 16x16 pixel grid representation
  const grid = [
    '....HHHHHH....',
    '...HHHHHHHH...',
    '...HSSSSSH...',
    '...HSEESH...',
    '..HSSSSSH...',
    '..SSPPP SS..',
    '.SSSSSSSSS.',
    '.SSSSSSSSS.',
    '..PPPPPPP..',
    '..PPPPPPP..',
    '...PP.PP...',
    '...PP.PP...',
    '..SSS.SSS..',
    '..SSS.SSS..',
    '...PP..PP...',
    '...PP..PP...',
  ];

  // Map chars to colors
  const colorMap = {
    H: colors.hair,
    S: colors.skin,
    E: colors.eye,
    P: colors.shirt,
    '.': 'transparent',
  };

  const px = 6;
  const totalW = grid[0].length * px;
  const totalH = grid.length * px;

  return (
    <div
      className="inline-block"
      style={{
        animation: 'idle-float 3s ease-in-out infinite',
        imageRendering: 'pixelated',
        filter: 'drop-shadow(0 0 12px rgba(107,70,193,0.7))',
      }}
    >
      <svg
        width={totalW}
        height={totalH}
        viewBox={`0 0 ${totalW} ${totalH}`}
        style={{ imageRendering: 'pixelated' }}
      >
        {grid.map((row, y) =>
          row.split('').map((char, x) => {
            const fill = colorMap[char];
            if (!fill || fill === 'transparent') return null;
            return (
              <rect
                key={`${x}-${y}`}
                x={x * px}
                y={y * px}
                width={px}
                height={px}
                fill={fill}
              />
            );
          })
        )}
        {/* Border */}
        <rect x={0} y={0} width={totalW} height={totalH} fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
};

/* ─── Typewriter text ─── */
const TypewriterText = ({ text, speed = 60 }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span style={{ fontFamily: 'var(--font-retro)', fontSize: '1.25rem', color: 'var(--rp-light)' }}>
      {displayed}
      {!done && <span className="cursor-blink" />}
    </span>
  );
};

/* ─── Main Hero ─── */
const Hero = () => {
  const sparkles = useRef(
    Array.from({ length: 25 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }))
  ).current;

  const stats = [
    { label: 'PROJECTS',    value: '4+',   icon: '🗡️', color: 'var(--rp-purple)' },
    { label: 'TESTS',       value: '188',  icon: '🛡️', color: 'var(--rp-cyan)' },
    { label: 'INFRA COST',  value: '₹0',   icon: '💰', color: 'var(--rp-green)' },
    { label: 'COMMITS',     value: '∞',    icon: '⚔️', color: 'var(--rp-gold)' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section relative overflow-hidden" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s, i) => (
          <Sparkle key={i} x={s.x} y={s.y} delay={s.delay} />
        ))}
      </div>

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(107,70,193,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107,70,193,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10 w-full">
        {/* Game window header */}
        <div
          className="max-w-4xl mx-auto"
          style={{
            border: '4px solid white',
            boxShadow: '8px 8px 0px #000, 0 0 40px rgba(107,70,193,0.3)',
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{ background: 'var(--rp-purple)', borderBottom: '3px solid white' }}
          >
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', color: 'white', letterSpacing: '0.15em' }}>
              RAHUL_PORTFOLIO.EXE
            </span>
            <div className="flex gap-2">
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', color: 'var(--rp-gold)' }}>▬ ▭ ✕</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12 bg-[var(--rp-deep)]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar column */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <PixelAvatar />
                {/* Power-up badge */}
                <div className="powerup-badge">
                  <div className="powerup-dot" />
                  OPEN TO HIRE
                </div>
              </div>

              {/* Text column */}
              <div className="flex-1 text-center md:text-left space-y-6">
                {/* Name */}
                <div>
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.55rem', color: 'var(--rp-gold)', letterSpacing: '0.2em', marginBottom: '12px' }}>
                    ▶ PLAYER_01
                  </div>
                  <h1
                    className="pixel-gradient-text"
                    style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)', lineHeight: 1.5 }}
                  >
                    RAHUL<br />RACHHOYA
                  </h1>
                </div>

                {/* Subtitle typewriter */}
                <div className="dialogue-box mt-4">
                  <TypewriterText
                    text="Full-Stack Dev × AI Engineer × Security Researcher"
                    speed={45}
                  />
                  <div className="dialogue-arrow" />
                </div>

                {/* Bio */}
                <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem', color: 'var(--rp-gray)', lineHeight: 1.7 }}>
                  Building production-grade AI systems, trading platforms &amp; security tools with zero-cost infrastructure.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="pixel-btn pixel-btn-primary"
                  >
                    ▶ VIEW QUESTS
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="pixel-btn pixel-btn-ghost"
                  >
                    💬 CONTACT
                  </button>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8" style={{ borderTop: '3px dashed rgba(255,255,255,0.15)' }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4"
                  style={{
                    background: 'var(--rp-black)',
                    border: '2px solid white',
                    boxShadow: `3px 3px 0 ${stat.color}`,
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{stat.icon}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-pixel)',
                      fontSize: '1rem',
                      color: stat.color,
                      textShadow: `2px 2px 0 ${stat.color}55`,
                      marginBottom: '4px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.4rem', color: 'var(--rp-gray)', letterSpacing: '0.1em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-8" style={{ animation: 'blink 1.5s step-end infinite' }}>
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gray)', letterSpacing: '0.2em' }}>
            ▼ SCROLL TO CONTINUE ▼
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
