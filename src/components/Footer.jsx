const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '4px solid white',
        background: 'var(--rp-black)',
        padding: '40px 0 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Top divider text */}
        <div
          className="text-center mb-8"
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '0.4rem',
            color: 'var(--rp-gray-dim)',
            letterSpacing: '0.3em',
          }}
        >
          ══════════════ GAME OVER? NEVER. ══════════════
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div
              style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '0.75rem',
                color: 'var(--rp-gold)',
                textShadow: '2px 2px 0 var(--rp-gold-dim)',
                letterSpacing: '0.1em',
                marginBottom: '6px',
              }}
            >
              ▶ RR.EXE
            </div>
            <p style={{ fontFamily: 'var(--font-retro)', fontSize: '0.9rem', color: 'var(--rp-gray-dim)' }}>
              © {year} Rahul Rachhoya
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['About', 'Projects', 'Skills', 'Quests', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase() === 'quests' ? 'experience' : link.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.45rem',
                  color: 'var(--rp-gray)',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  transition: 'color 0.1s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--rp-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--rp-gray)'}
              >
                {link.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { label: 'GITHUB',   url: 'https://github.com/RahulRachhoya' },
              { label: 'LINKEDIN', url: 'https://linkedin.com/in/rahulrachhoya' },
              { label: 'TWITTER',  url: 'https://twitter.com/rahulrachhoya' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.4rem',
                  color: 'var(--rp-gray-dim)',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  transition: 'color 0.1s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--rp-purple)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--rp-gray-dim)'}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom credit line */}
        <div
          className="mt-8 pt-4 text-center"
          style={{ borderTop: '2px dashed rgba(255,255,255,0.1)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.38rem',
              color: 'var(--rp-gray-dim)',
              letterSpacing: '0.1em',
            }}
          >
            BUILT WITH REACT · VITE · TAILWIND CSS · &lt;3
          </p>
          <div
            style={{
              marginTop: '10px',
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.38rem',
              color: 'var(--rp-purple)',
              letterSpacing: '0.15em',
              animation: 'flicker 6s ease-in-out infinite',
            }}
          >
            INSERT COIN TO CONTINUE...
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
