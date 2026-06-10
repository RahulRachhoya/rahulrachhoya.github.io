import { motion } from 'framer-motion';
import { GithubLogo, LinkedinLogo, EnvelopeSimple, DownloadSimple, ArrowUp, Phone } from '@phosphor-icons/react';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const SOCIAL = [
  {
    label: 'GitHub',
    handle: '@RahulRachhoya',
    icon: <GithubLogo size={18} weight="light" />,
    href: 'https://github.com/RahulRachhoya',
  },
  {
    label: 'LinkedIn',
    handle: 'in/rahulrachhoya',
    icon: <LinkedinLogo size={18} weight="light" />,
    href: 'https://linkedin.com/in/rahulrachhoya',
  },
  {
    label: 'Email',
    handle: 'rahulrachhoya0@gmail.com',
    icon: <EnvelopeSimple size={18} weight="light" />,
    href: 'mailto:rahulrachhoya0@gmail.com',
  },
  {
    label: 'Phone',
    handle: '+91 8386067676',
    icon: <Phone size={18} weight="light" />,
    href: 'tel:+918386067676',
  },
];

function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      marginTop: 60,
    }}>
      {/* Main footer body */}
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '64px 24px 40px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid var(--border)',
        }}
          className="footer-grid"
        >
          {/* Left — identity + resume */}
          <div>
            {/* Logo mark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14,
                fontWeight: 800,
                color: '#fff',
                flexShrink: 0,
              }}>
                RR
              </div>
              <div>
                <div style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#f5f5f5',
                  lineHeight: 1.2,
                }}>
                  RAHUL RACHHOYA
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                  AI Engineer · Hyderabad, India
                </div>
              </div>
            </div>

            <p style={{
              fontSize: 13,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: 320,
              marginBottom: 28,
            }}>
              3+ years building production LLM systems.
              Available for full-time and freelance opportunities in AI engineering.
            </p>

            {/* Download Resume CTA */}
            <a
              href="/rahulrachhoya-resume.pdf"
              download="Rahul_Rachhoya_Resume.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--accent)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '9999px',
                padding: '10px 20px',
                fontSize: 13,
                fontWeight: 600,
                transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,130,246,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <DownloadSimple size={15} weight="bold" />
              Download Resume
              <span style={{
                width: 20, height: 20, borderRadius: '50%',
                background: 'rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9,
              }}>PDF</span>
            </a>
          </div>

          {/* Center — quick nav */}
          <div>
            <div style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontFamily: "'Geist Mono', monospace",
              color: 'var(--text-muted)',
              marginBottom: 20,
            }}>
              Navigate
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV_LINKS.map(item => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left',
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontFamily: "'Geist', sans-serif",
                    transition: 'color 0.25s cubic-bezier(0.32,0.72,0,1)',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#f5f5f5'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Right — contact links */}
          <div>
            <div style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontFamily: "'Geist Mono', monospace",
              color: 'var(--text-muted)',
              marginBottom: 20,
            }}>
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('.social-icon').style.color = 'var(--accent)';
                    e.currentTarget.querySelector('.social-icon').style.borderColor = 'rgba(59,130,246,0.3)';
                    e.currentTarget.querySelector('.social-text').style.color = '#f5f5f5';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('.social-icon').style.color = 'var(--text-secondary)';
                    e.currentTarget.querySelector('.social-icon').style.borderColor = 'var(--border)';
                    e.currentTarget.querySelector('.social-text').style.color = 'var(--text-secondary)';
                  }}
                >
                  <div
                    className="social-icon"
                    style={{
                      width: 32, height: 32,
                      borderRadius: 9,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      flexShrink: 0,
                      transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 1 }}>
                      {s.label}
                    </div>
                    <div
                      className="social-text"
                      style={{ fontSize: 12, color: 'var(--text-secondary)', transition: 'color 0.25s cubic-bezier(0.32,0.72,0,1)' }}
                    >
                      {s.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 28,
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 11,
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
          }}>
            © {new Date().getFullYear()} Rahul Rachhoya · React + Three.js · Open to work
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: "'Geist Mono', monospace",
              fontSize: 11,
              color: 'var(--text-muted)',
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#22c55e',
                display: 'inline-block',
                animation: 'pulse-dot 2s infinite',
              }} />
              Available for hire
            </span>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                padding: '6px 14px',
                fontSize: 11,
                fontFamily: "'Geist Mono', monospace",
                letterSpacing: '0.06em',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#f5f5f5';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <ArrowUp size={12} weight="bold" />
              Back to top
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
