import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 24px',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      <div>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: '#f5f5f5',
          marginBottom: 4,
        }}>
          RAHUL RACHHOYA
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          AI Engineer · Noida, India
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {[
          { icon: <GithubLogo size={16} weight="light" />, href: 'https://github.com/RahulRachhoya' },
          { icon: <LinkedinLogo size={16} weight="light" />, href: 'https://linkedin.com/in/rahulrachhoya' },
        ].map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              width: 36, height: 36,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#f5f5f5'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            {icon}
          </a>
        ))}
      </div>

      <div style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: 11,
        color: 'var(--text-muted)',
        letterSpacing: '0.04em',
      }}>
        {new Date().getFullYear()} · Built with React + Three.js
      </div>
    </footer>
  );
}
