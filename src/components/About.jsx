import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { label: 'ATK', value: 92, cls: 'bar-atk' },
  { label: 'DEF', value: 78, cls: 'bar-def' },
  { label: 'SPD', value: 85, cls: 'bar-spd' },
  { label: 'MAG', value: 95, cls: 'bar-mag' },
];

const ACHIEVEMENTS = [
  { icon: '⚔', value: '47+',    label: 'PROJECTS' },
  { icon: '⏱', value: '3+',     label: 'YEARS EXP' },
  { icon: '★',  value: 'SR',    label: 'RANK' },
  { icon: '🏆', value: '∞',     label: 'COFFEE' },
];

function StatBar({ label, value, cls, animate }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{
        fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
        color: 'var(--rp-gray)', width: '32px', flexShrink: 0,
      }}>
        {label}
      </span>
      <div className="stat-bar-container" style={{ flex: 1 }}>
        <div
          className={`stat-bar-fill ${cls}`}
          style={{ width: animate ? `${value}%` : '0%' }}
        />
      </div>
      <span style={{
        fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
        color: 'var(--rp-white)', width: '28px', textAlign: 'right', flexShrink: 0,
      }}>
        {value}
      </span>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">PLAYER PROFILE</span>
          <h2 style={{ color: 'var(--rp-white)' }}>▸ ABOUT ME</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {/* Class card */}
          <motion.div
            className="pixel-card pixel-card-gold"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '16px', textAlign: 'center',
            }}>
              {/* pixel avatar */}
              <div style={{
                width: '80px', height: '80px',
                background: 'var(--rp-purple-dark)',
                border: '3px solid var(--rp-gold)',
                boxShadow: '3px 3px 0 #000',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem',
              }}>🧙</div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
                  color: 'var(--rp-gold)', letterSpacing: '0.15em', marginBottom: '6px',
                }}>
                  CLASS
                </div>
                <div style={{
                  fontFamily: 'var(--font-pixel)', fontSize: '0.6rem',
                  color: 'var(--rp-white)',
                }}>
                  FULL-STACK DEV
                </div>
              </div>

              <div style={{
                display: 'flex', gap: '16px',
                fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
                color: 'var(--rp-gray)',
              }}>
                <span>LVL <span style={{ color: 'var(--rp-gold)' }}>23</span></span>
                <span>CLASS <span style={{ color: 'var(--rp-cyan)' }}>A</span></span>
              </div>

              {/* XP bar */}
              <div style={{ width: '100%' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: 'var(--font-pixel)', fontSize: '0.38rem',
                  color: 'var(--rp-gray)', marginBottom: '6px',
                }}>
                  <span>XP</span><span>8420 / 10000</span>
                </div>
                <div className="stat-bar-container">
                  <div
                    className="stat-bar-fill bar-xp"
                    style={{ width: inView ? '84%' : '0%' }}
                  />
                </div>
              </div>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                color: 'var(--rp-gray)', lineHeight: 1.6, textAlign: 'left',
              }}>
                Full-stack developer & AI engineer from India. Building production systems at Careers360 (40M+ users) and crafting open-source AI tools at night.
              </p>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            className="pixel-card pixel-card-purple"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div style={{
              fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
              color: 'var(--rp-gold)', marginBottom: '20px', letterSpacing: '0.1em',
            }}>
              ▸ BATTLE STATS
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {STATS.map(s => (
                <StatBar key={s.label} {...s} animate={inView} />
              ))}
            </div>

            <div style={{
              marginTop: '24px',
              borderTop: '2px solid var(--rp-purple)',
              paddingTop: '16px',
            }}>
              <div style={{
                fontFamily: 'var(--font-pixel)', fontSize: '0.42rem',
                color: 'var(--rp-gold)', marginBottom: '12px',
              }}>
                HP / MP
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.42rem', color: 'var(--rp-green)', width: '24px' }}>HP</span>
                  <div className="stat-bar-container" style={{ flex: 1 }}>
                    <div className="stat-bar-fill bar-hp" style={{ width: inView ? '100%' : '0%' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.38rem', color: 'var(--rp-white)', width: '50px', textAlign: 'right' }}>999/999</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.42rem', color: 'var(--mp-color)', width: '24px' }}>MP</span>
                  <div className="stat-bar-container" style={{ flex: 1 }}>
                    <div className="stat-bar-fill bar-mp" style={{ width: inView ? '75%' : '0%' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.38rem', color: 'var(--rp-white)', width: '50px', textAlign: 'right' }}>750/999</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements card */}
          <motion.div
            className="pixel-card"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div style={{
              fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
              color: 'var(--rp-gold)', marginBottom: '20px', letterSpacing: '0.1em',
            }}>
              ▸ ACHIEVEMENTS
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '12px', marginBottom: '24px',
            }}>
              {ACHIEVEMENTS.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                  style={{
                    background: 'var(--rp-black)',
                    border: '2px solid var(--rp-purple)',
                    boxShadow: '2px 2px 0 #000',
                    padding: '12px 8px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{a.icon}</div>
                  <div style={{
                    fontFamily: 'var(--font-pixel)', fontSize: '0.65rem',
                    color: 'var(--rp-gold)', marginBottom: '4px',
                  }}>{a.value}</div>
                  <div style={{
                    fontFamily: 'var(--font-pixel)', fontSize: '0.35rem',
                    color: 'var(--rp-gray)', letterSpacing: '0.1em',
                  }}>{a.label}</div>
                </motion.div>
              ))}
            </div>

            <div style={{
              borderTop: '2px solid var(--rp-purple)',
              paddingTop: '16px',
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.38rem',
              color: 'var(--rp-gray)',
              lineHeight: 2,
            }}>
              <div>📍 <span style={{ color: 'var(--rp-white)' }}>Noida, India</span></div>
              <div>🎓 <span style={{ color: 'var(--rp-white)' }}>B.Tech CSE 2022</span></div>
              <div>⚡ <span style={{ color: 'var(--rp-cyan)' }}>React · Python · AI/ML</span></div>
              <div>🌐 <span style={{ color: 'var(--rp-green)' }}>Open to Remote</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
