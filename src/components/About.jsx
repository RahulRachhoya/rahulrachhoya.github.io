import { motion } from 'framer-motion';

const stats = [
  { label: 'ATK',  value: 95, color: 'var(--rp-gold)',   desc: 'AI Engineering'     },
  { label: 'MAG',  value: 92, color: 'var(--rp-purple)', desc: 'LLM Architecture'   },
  { label: 'DEF',  value: 85, color: 'var(--rp-cyan)',   desc: 'MLOps & Infra'      },
  { label: 'SPD',  value: 88, color: 'var(--rp-green)',  desc: 'Delivery Speed'     },
  { label: 'INT',  value: 94, color: 'var(--rp-white)',  desc: 'RAG & Vector DBs'   },
  { label: 'LUCK', value: 78, color: 'var(--rp-gold)',   desc: 'Bug Bounty Finds'   },
];

const achievements = [
  { icon: '🏆', title: '10K+ AI Sessions',     desc: 'Voice AI career counselor at Careers360' },
  { icon: '⭐', title: '40% Cost Cut',          desc: 'Prompt caching + A/B testing LLM pipelines' },
  { icon: '🔥', title: '35% Hallucination Drop', desc: 'RAG + hybrid search engineering' },
  { icon: '🚀', title: 'Fine-tuned Mistral 7B',  desc: '78%→92% accuracy, $50 vs $2K full retrain' },
  { icon: '🌐', title: '500+ Daily Users',        desc: 'Streamlit AI dashboard on AWS' },
  { icon: '📝', title: '5K+ Article Views',       desc: '"Building Production Voice AI with Claude"' },
];

const About = () => (
  <section id="about" className="section" style={{ background: 'var(--rp-deep)' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">👤 PLAYER PROFILE 👤</span>
        <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
          CHARACTER STATS
        </h2>
        <div className="section-divider mx-auto mt-3" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>

        {/* Left — stat card */}
        <motion.div
          className="pixel-card pixel-card-purple"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Avatar + level */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid var(--rp-purple)' }}>
            <div style={{
              width: '64px', height: '64px', flexShrink: 0,
              border: '3px solid var(--rp-gold)', background: 'var(--rp-purple-dark)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem', boxShadow: '4px 4px 0 #000',
              animation: 'idle-float 3s ease-in-out infinite',
            }}>🧙</div>
            <div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.55rem', color: 'white', letterSpacing: '0.05em' }}>RAHUL RACHHOYA</div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gold)' }}>LVL 26 · AI ENGINEER</div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.4rem', color: 'var(--rp-green)' }}>📍 Noida, India</div>
            </div>
          </div>

          {/* Bio */}
          <p style={{ fontFamily: 'var(--font-retro)', fontSize: '0.95rem', color: 'var(--rp-light)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            AI Engineer with 3+ years building production-grade AI systems — LLMs, RAG, Voice AI, fine-tuning.
            Expertise in Python, AWS Bedrock, LangGraph, and deploying scalable AI workflows with full observability.
            Strong track record of reducing hallucinations, cutting costs 40%, and shipping measurable impact.
          </p>

          {/* RPG stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {stats.map(({ label, value, color, desc }) => (
              <div key={label} title={desc} style={{
                background: 'var(--rp-black)', border: `2px solid ${color}55`,
                padding: '8px 4px', textAlign: 'center', cursor: 'default',
              }}>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.42rem', color, marginBottom: '2px' }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', color: 'white' }}>{value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', color: 'var(--rp-gold)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            🏅 ACHIEVEMENTS UNLOCKED
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {achievements.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                className="pixel-card"
                whileHover={{ x: 4 }}
                style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 14px' }}
              >
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.48rem', color: 'white', letterSpacing: '0.04em', marginBottom: '2px' }}>{title}</div>
                  <div style={{ fontFamily: 'var(--font-retro)', fontSize: '0.85rem', color: 'var(--rp-gray)' }}>{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginTop: '1.25rem' }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-cyan)', letterSpacing: '0.08em', marginBottom: '8px' }}>
              📜 CERTIFICATIONS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                'AWS Certified ML – Specialty (In Progress)',
                'Deep Learning Specialization – Coursera',
                'Open-source contributions: LangChain, LlamaIndex',
              ].map((cert) => (
                <div key={cert} style={{ fontFamily: 'var(--font-retro)', fontSize: '0.9rem', color: 'var(--rp-light)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--rp-gold)' }}>▶</span>{cert}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
