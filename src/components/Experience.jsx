import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const QUESTS = [
  {
    status: 'ACTIVE',
    statusColor: 'var(--rp-gold)',
    statusBg: 'rgba(255,215,0,0.15)',
    icon: '★',
    title: 'Software Engineer',
    org: 'Careers360',
    period: '2022 – Present',
    location: 'Noida, India',
    desc: 'Building AI-powered education platform serving 40M+ students across India. Led major frontend migrations, built recommendation engines, and deployed microservices at scale.',
    tags: ['React', 'Python', 'AWS', 'PostgreSQL', 'Redis'],
    xp: '+2400 XP',
    stars: 5,
  },
  {
    status: 'COMPLETE',
    statusColor: 'var(--rp-green)',
    statusBg: 'rgba(0,255,136,0.08)',
    icon: '✓',
    title: 'Full-Stack Developer',
    org: 'Freelance',
    period: '2021 – 2022',
    location: 'Remote',
    desc: 'Delivered 15+ client projects — e-commerce stores, SaaS dashboards, and REST APIs. Specialized in React + Node.js stacks with rapid delivery timelines.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    xp: '+1200 XP',
    stars: 4,
  },
  {
    status: 'COMPLETE',
    statusColor: 'var(--rp-cyan)',
    statusBg: 'rgba(0,255,255,0.08)',
    icon: '🎓',
    title: 'B.Tech Computer Science',
    org: 'University',
    period: '2018 – 2022',
    location: 'India',
    desc: 'Graduated with CGPA 8.2. Deep-dived into data structures, algorithms, ML fundamentals, and systems design. Built graduation project — an AI-based exam proctoring system.',
    tags: ['DSA', 'ML', 'Java', 'C++', 'DBMS'],
    xp: '+3000 XP',
    stars: 5,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">CAREER HISTORY</span>
          <h2 style={{ color: 'var(--rp-white)' }}>▸ QUEST LOG</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Header box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.35 }}
          style={{
            background: 'var(--rp-deep)',
            border: '4px solid var(--rp-white)',
            boxShadow: '8px 8px 0 #000',
            padding: '20px 24px',
            marginBottom: '48px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'steps(1)' }}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '3px', background: 'var(--rp-gold)',
            }}
          />
          <h1 style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(0.75rem, 2vw, 1.1rem)',
            color: 'var(--rp-gold)',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <span>▸</span> QUEST LOG
          </h1>
          <p style={{
            fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
            color: 'var(--rp-cyan)', marginTop: '6px',
          }}>
            LOCATION: WORLD_MAP_SERVER_01
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* vertical line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: 0, bottom: 0,
            width: '3px',
            background: 'var(--rp-white)',
          }} />

          {QUESTS.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.4 }}
              style={{ position: 'relative', marginBottom: '40px', paddingLeft: '64px' }}
            >
              {/* timeline dot */}
              <div style={{ position: 'absolute', left: '12px', top: '20px' }}>
                {q.status === 'ACTIVE' && (
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      width: '22px', height: '22px',
                      background: 'var(--rp-gold)',
                      border: '2px solid var(--rp-white)',
                      top: '-3px', left: '-3px',
                    }}
                  />
                )}
                <div style={{
                  width: '16px', height: '16px',
                  background: q.status === 'ACTIVE' ? 'var(--rp-gold)' : 'var(--rp-white)',
                  border: '2px solid var(--rp-white)',
                  position: 'relative', zIndex: 2,
                }} />
              </div>

              {/* card */}
              <div
                className="pixel-card"
                style={{ borderColor: q.statusColor, boxShadow: `4px 4px 0 #000` }}
              >
                {/* header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{
                    fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
                    background: q.statusBg, color: q.statusColor,
                    border: `2px solid ${q.statusColor}`,
                    padding: '3px 8px',
                  }}>
                    {q.icon} {q.status}
                  </span>
                  {/* stars */}
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} style={{
                        fontSize: '0.8rem',
                        color: si < q.stars ? 'var(--rp-gold)' : 'var(--rp-gray-dim)',
                      }}>★</span>
                    ))}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.7rem)',
                  color: 'var(--rp-white)', marginBottom: '4px',
                }}>
                  {q.title}
                </h3>

                <div style={{
                  fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
                  color: q.statusColor, marginBottom: '4px',
                }}>
                  {q.org}
                </div>

                <div style={{
                  fontFamily: 'var(--font-pixel)', fontSize: '0.38rem',
                  color: 'var(--rp-gray)', marginBottom: '12px',
                }}>
                  {q.period} · {q.location}
                </div>

                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                  color: 'var(--rp-gray)', lineHeight: 1.6, marginBottom: '14px',
                }}>
                  {q.desc}
                </p>

                {/* tag row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                  {q.tags.map(t => (
                    <span key={t} className="pixel-tag">{t}</span>
                  ))}
                </div>

                {/* XP badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(255,215,0,0.12)',
                  border: '2px solid var(--rp-gold)',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
                  color: 'var(--rp-gold)',
                }}>
                  ⭐ {q.xp}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
