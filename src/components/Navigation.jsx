import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { id: 'home',     label: 'HOME',     href: '#hero' },
  { id: 'about',    label: 'ABOUT',    href: '#about' },
  { id: 'skills',   label: 'SKILLS',   href: '#skills' },
  { id: 'quests',   label: 'QUESTS',   href: '#experience' },
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'contact',  label: 'CONTACT',  href: '#contact' },
];

export default function Navigation() {
  const [active, setActive]       = useState('home');
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = NAV_LINKS.map(l => document.querySelector(l.href));
      const current = sections.findLastIndex(s => s && s.getBoundingClientRect().top <= 120);
      if (current >= 0) setActive(NAV_LINKS[current].id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'var(--rp-deep)',
        borderBottom: '4px solid var(--rp-white)',
        boxShadow: scrolled ? '0 4px 0 0 #000, 0 0 24px var(--rp-purple-glow)' : '4px 4px 0px #000',
        transition: 'box-shadow 0.15s',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
        {/* Logo */}
        <motion.a
          href="#hero"
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '0.75rem',
            color: 'var(--rp-gold)',
            textDecoration: 'none',
            letterSpacing: '0.1em',
            textShadow: '2px 2px 0 var(--rp-gold-dim)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          ⚔ RR
        </motion.a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden-mobile">
          {NAV_LINKS.map(link => (
            <motion.a
              key={link.id}
              href={link.href}
              onClick={() => setActive(link.id)}
              style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '0.48rem',
                textDecoration: 'none',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: active === link.id ? 'var(--rp-gold)' : 'var(--rp-white)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 0',
                transition: 'color 0.1s',
              }}
              whileHover={{ color: 'var(--rp-cyan)', x: -1, y: -1 }}
            >
              {active === link.id && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
                  style={{ color: 'var(--rp-gold)' }}
                >
                  ▶
                </motion.span>
              )}
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="show-mobile"
          style={{
            background: 'none',
            border: '2px solid var(--rp-white)',
            color: 'var(--rp-white)',
            fontFamily: 'var(--font-pixel)',
            fontSize: '0.6rem',
            padding: '6px 10px',
            cursor: 'pointer',
            boxShadow: '2px 2px 0 #000',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              overflow: 'hidden',
              background: 'var(--rp-deep)',
              borderTop: '2px solid var(--rp-purple)',
            }}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => { setActive(link.id); setMenuOpen(false); }}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.5rem',
                  color: active === link.id ? 'var(--rp-gold)' : 'var(--rp-white)',
                  padding: '14px 24px',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  borderBottom: '1px solid rgba(107,70,193,0.3)',
                }}
              >
                {active === link.id ? '▶ ' : '  '}{link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
      `}</style>
    </header>
  );
}
