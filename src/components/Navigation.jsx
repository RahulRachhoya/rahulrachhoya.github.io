import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, DownloadSimple } from '@phosphor-icons/react';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // IntersectionObserver for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_ITEMS.forEach(item => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating pill nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        style={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: 'calc(100% - 40px)',
          maxWidth: '900px',
        }}
      >
        <div
          style={{
            background: scrolled ? 'rgba(5,5,5,0.85)' : 'rgba(10,10,10,0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '9999px',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'background 0.5s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#f5f5f5',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 700,
                color: '#fff',
              }}
            >
              RR
            </span>
            RAHUL
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                style={{
                  background: active === item.toLowerCase() ? 'rgba(59,130,246,0.12)' : 'transparent',
                  border: '1px solid',
                  borderColor: active === item.toLowerCase() ? 'rgba(59,130,246,0.25)' : 'transparent',
                  borderRadius: '9999px',
                  padding: '5px 14px',
                  fontSize: 12,
                  fontWeight: 500,
                  color: active === item.toLowerCase() ? 'var(--accent)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                  letterSpacing: '0.02em',
                }}
              >
                {item}
              </button>
            ))}
            <a
              href="mailto:rahulrachhoya0@gmail.com"
              style={{
                background: 'var(--accent)',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: 12,
                fontWeight: 600,
                color: '#fff',
                cursor: 'pointer',
                textDecoration: 'none',
                marginLeft: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Hire Me
              <span style={{
                width: 18, height: 18, borderRadius: '50%',
                background: 'rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10,
              }}>↗</span>
            </a>
            {/* Resume download */}
            <a
              href="/rahulrachhoya-resume.pdf"
              download="Rahul_Rachhoya_Resume.pdf"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                textDecoration: 'none',
                marginLeft: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f5f5f5'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            >
              <DownloadSimple size={13} weight="bold" />
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(v => !v)}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              width: 36, height: 36,
              display: 'none',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: '#f5f5f5',
            }}
          >
            <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
              {open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(5,5,5,0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => scrollTo(item)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: 32,
                  fontWeight: 600,
                  color: '#f5f5f5',
                  cursor: 'pointer',
                  letterSpacing: '-0.02em',
                }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
