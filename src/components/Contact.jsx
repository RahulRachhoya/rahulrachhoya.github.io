import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Typewriter ─── */
const useTypewriter = (text, speed = 30, trigger = false) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!trigger) return;
    setDisplayed(''); setDone(false); let i = 0;
    const t = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, ++i)); }
      else { setDone(true); clearInterval(t); }
    }, speed);
    return () => clearInterval(t);
  }, [text, speed, trigger]);
  return { displayed, done };
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus]     = useState('');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const npcDialogue = "Greetings, adventurer! I'm Rahul — AI Engineer & Full-Stack Dev. Ready to collaborate on your next quest? Drop a message below!";
  const { displayed, done } = useTypewriter(npcDialogue, 28, inView);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('MESSAGE DELIVERED! Awaiting response from Rahul...');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  const socialLinks = [
    { name: 'GITHUB',   url: 'https://github.com/RahulRachhoya',     emoji: '⬡', color: 'var(--rp-white)' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/rahul-rachhoya/', emoji: '💼', color: 'var(--rp-cyan)'  },
    { name: 'EMAIL',    url: 'mailto:rahulrachhoya0@gmail.com',       emoji: '✉️', color: 'var(--rp-gold)'  },
  ];

  return (
    <section id="contact" ref={ref} className="section" style={{ background: 'var(--rp-deep)' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-label">💬 DIALOGUE 💬</span>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
            TALK TO NPC
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        <div className="max-w-4xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* NPC Dialogue Box */}
          <div style={{ position: 'relative', paddingTop: '1rem' }}>
            <div style={{
              background: 'var(--rp-black)',
              border: '4px solid white',
              boxShadow: '6px 6px 0 #000, inset 0 0 0 2px var(--rp-purple-dark)',
              padding: '20px 24px',
              position: 'relative',
            }}>
              {/* NPC name badge */}
              <div style={{
                position: 'absolute', top: '-14px', left: '20px',
                background: 'var(--rp-purple)', border: '3px solid white',
                padding: '2px 12px', fontFamily: 'var(--font-pixel)',
                fontSize: '0.5rem', color: 'white', letterSpacing: '0.1em',
              }}>
                RAHUL.NPC
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px', height: '48px', flexShrink: 0,
                  border: '3px solid var(--rp-purple)', background: 'var(--rp-purple-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', boxShadow: '3px 3px 0 #000',
                  animation: 'idle-float 2.5s ease-in-out infinite',
                }}>
                  👾
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1.05rem', color: 'var(--rp-light)', lineHeight: 1.7, margin: 0 }}>
                    {displayed}
                    {!done && <span style={{ animation: 'blink 0.7s step-end infinite', fontFamily: 'var(--font-pixel)' }}>▮</span>}
                  </p>
                </div>
              </div>

              {done && (
                <div style={{
                  position: 'absolute', bottom: '10px', right: '16px',
                  fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
                  color: 'var(--rp-gold)', animation: 'blink 0.8s step-end infinite',
                }}>▼</div>
              )}
            </div>
          </div>

          {/* Two-column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>

            {/* Left — contact info + socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Email card */}
              <div className="pixel-card pixel-card-purple">
                <div style={{
                  fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
                  color: 'var(--rp-gold)', letterSpacing: '0.1em',
                  marginBottom: '14px', paddingBottom: '10px',
                  borderBottom: '2px solid var(--rp-purple)',
                }}>
                  ♦ CONTACT INFO
                </div>
                <a
                  href="mailto:rahulrachhoya0@gmail.com"
                  style={{
                    fontFamily: 'var(--font-retro)', fontSize: '0.95rem',
                    color: 'var(--rp-cyan)', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    wordBreak: 'break-all',
                  }}
                >
                  ✉️ rahulrachhoya0@gmail.com
                </a>
              </div>

              {/* Social links */}
              <div className="pixel-card">
                <div style={{
                  fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
                  color: 'var(--rp-gold)', letterSpacing: '0.1em',
                  marginBottom: '14px', paddingBottom: '10px',
                  borderBottom: '2px solid rgba(255,255,255,0.15)',
                }}>
                  ♦ SOCIAL LINKS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
                        color: link.color, padding: '8px 10px',
                        border: `2px solid ${link.color}44`,
                        background: `${link.color}10`,
                        transition: 'all 0.1s', letterSpacing: '0.08em',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${link.color}25`;
                        e.currentTarget.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${link.color}10`;
                        e.currentTarget.style.transform = '';
                      }}
                    >
                      <span>{link.emoji}</span>
                      ▶ {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume download CTA */}
              <motion.a
                href="/resume.pdf"
                download="Rahul_Rachhoya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '10px', padding: '14px 20px',
                  background: 'linear-gradient(135deg, var(--rp-purple), var(--rp-purple-dark))',
                  border: '3px solid var(--rp-gold)',
                  boxShadow: '4px 4px 0 #000',
                  fontFamily: 'var(--font-pixel)', fontSize: '0.55rem',
                  color: 'var(--rp-gold)', letterSpacing: '0.1em',
                  textDecoration: 'none', cursor: 'pointer',
                }}
              >
                ⬇ DOWNLOAD RESUME
              </motion.a>
            </div>

            {/* Right — form */}
            <div className="pixel-card pixel-card-gold">
              <div style={{
                fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
                color: 'var(--rp-gold)', letterSpacing: '0.1em',
                marginBottom: '20px', paddingBottom: '12px',
                borderBottom: '2px solid var(--rp-gold)',
              }}>
                ♦ SEND MESSAGE
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { id: 'name',  label: 'YOUR NAME',     type: 'text',  placeholder: 'ADVENTURER...' },
                  { id: 'email', label: 'EMAIL ADDRESS',  type: 'email', placeholder: 'hero@quest.gg' },
                ].map((field) => (
                  <div key={field.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label
                      htmlFor={field.id}
                      style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gray)', letterSpacing: '0.1em' }}
                    >
                      ▶ {field.label}
                    </label>
                    <input
                      type={field.type} id={field.id} name={field.id}
                      value={formData[field.id]} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      required placeholder={field.placeholder} className="pixel-input"
                    />
                  </div>
                ))}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="message"
                    style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gray)', letterSpacing: '0.1em' }}
                  >
                    ▶ MESSAGE
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    required rows={4} placeholder="DESCRIBE YOUR QUEST..."
                    className="pixel-input" style={{ resize: 'none' }}
                  />
                </div>

                <button type="submit" className="pixel-btn pixel-btn-gold w-full justify-center">
                  ▶ SEND MESSAGE
                </button>

                {status && (
                  <div style={{
                    fontFamily: 'var(--font-pixel)', fontSize: '0.45rem',
                    color: 'var(--rp-green)', border: '2px solid var(--rp-green)',
                    padding: '10px 14px', background: 'rgba(0,255,136,0.1)',
                    letterSpacing: '0.05em', textAlign: 'center',
                  }}>
                    ✓ {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
