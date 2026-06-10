import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubLogo, GitCommit, Star } from '@phosphor-icons/react';

export default function GitHubActivity() {
  const [stats, setStats] = useState({ repos: 0, stars: 0, followers: 0 });

  useEffect(() => {
    fetch('https://api.github.com/users/RahulRachhoya')
      .then(r => r.json())
      .then(d => {
        if (d.public_repos !== undefined) {
          setStats({ repos: d.public_repos, followers: d.followers });
        }
      })
      .catch(() => {});
  }, []);

  const items = [
    { label: 'Public Repos', value: stats.repos || '...', icon: <GithubLogo size={16} weight="light" /> },
    { label: 'Followers', value: stats.followers || '...', icon: <Star size={16} weight="light" /> },
    { label: 'Years Active', value: '3+', icon: <GitCommit size={16} weight="light" /> },
  ];

  return (
    <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="card-outer"
        style={{ glow: 'var(--accent)' }}
      >
        <div className="card-inner" style={{ padding: '32px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <GithubLogo size={24} weight="light" style={{ color: 'var(--accent)' }} />
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f5f5', marginBottom: 2 }}>
                  GitHub Activity
                </h3>
                <a href="https://github.com/RahulRachhoya" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none' }}>
                  @RahulRachhoya
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {items.map(item => (
                <div key={item.label} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: 12, marginBottom: 4 }}>
                    {item.icon}
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: 24,
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: '#f5f5f5',
                  }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://github.com/RahulRachhoya"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'var(--surface-3)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                padding: '9px 18px',
                fontSize: 13,
                fontWeight: 500,
                color: '#f5f5f5',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface-3)'; }}
            >
              View Profile
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
