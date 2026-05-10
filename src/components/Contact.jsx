import { useState, useEffect, useRef } from 'react';

/* ─── Typewriter effect for dialogue ─── */
const useTypewriter = (text, speed = 35, trigger = false) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, trigger]);

  return { displayed, done };
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const npcDialogue = "Greetings, adventurer! I'm Rahul — Full-Stack Dev & AI Architect. Ready to collaborate on your next quest? Drop a message below!";
  const { displayed, done } = useTypewriter(npcDialogue, 30, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('MESSAGE DELIVERED! Awaiting response from Rahul...');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const socialLinks = [
    { name: 'GITHUB',   url: 'https://github.com/RahulRachhoya',          emoji: '⬡', color: 'var(--rp-white)' },
    { name: 'LINKEDIN', url: 'https://linkedin.com/in/rahulrachhoya',      emoji: '💼', color: 'var(--rp-cyan)' },
    { name: 'TWITTER',  url: 'https://twitter.com/rahulrachhoya',          emoji: '🐦', color: 'var(--rp-cyan)' },
    { name: 'EMAIL',    url: 'mailto:dev@rahulrachhoya.in',                 emoji: '✉️', color: 'var(--rp-gold)' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section" style={{ background: 'var(--rp-deep)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">💬 DIALOGUE 💬</span>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
            TALK TO NPC
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* NPC Dialogue Box */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                background: 'var(--rp-black)',
                border: '4px solid white',
                boxShadow: '6px 6px 0 #000, inset 0 0 0 2px var(--rp-purple-dark)',
                padding: '20px 24px',
                position: 'relative',
              }}
            >
              {/* NPC name label */}
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '20px',
                  background: 'var(--rp-purple)',
                  border: '3px solid white',
                  padding: '2px 12px',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.5rem',
                  color: 'white',
                  letterSpacing: '0.1em',
                }}
              >
                RAHUL.NPC
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                {/* NPC face */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    flexShrink: 0,
                    border: '3px solid var(--rp-purple)',
                    background: 'var(--rp-purple-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    boxShadow: '3px 3px 0 #000',
                    animation: 'idle-float 2.5s ease-in-out infinite',
                  }}
                >
                  👾
                </div>

                {/* Dialogue text */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem', color: 'var(--rp-light)', lineHeight: 1.7 }}>
                    {displayed}
                    {!done && <span style={{ animation: 'blink 0.7s step-end infinite', fontFamily: 'var(--font-pixel)' }}>▮</span>}
                  </p>
                </div>
              </div>

              {/* Arrow indicator */}
              {done && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '16px',
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.5rem',
                    color: 'var(--rp-gold)',
                    animation: 'blink 0.8s step-end infinite',
                  }}
                >
                  ▼
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Left panel — socials + info */}
            <div className="md:col-span-2 space-y-5">
              {/* Contact info */}
              <div className="pixel-card pixel-card-purple">
                <div
                  style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.5rem',
                    color: 'var(--rp-gold)',
                    letterSpacing: '0.1em',
                    marginBottom: '16px',
                    paddingBottom: '12px',
                    borderBottom: '2px solid var(--rp-purple)',
                  }}
                >
                  ♦ CONTACT INFO
                </div>
                <a
                  href="mailto:dev@rahulrachhoya.in"
                  style={{ fontFamily: 'var(--font-retro)', fontSize: '1rem', color: 'var(--rp-cyan)', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  ✉️ dev@rahulrachhoya.in
                </a>
              </div>

              {/* Social links */}
              <div className="pixel-card">
                <div
                  style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.5rem',
                    color: 'var(--rp-gold)',
                    letterSpacing: '0.1em',
                    marginBottom: '14px',
                    paddingBottom: '10px',
                    borderBottom: '2px solid rgba(255,255,255,0.15)',
                  }}
                >
                  ♦ SOCIAL LINKS
                </div>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '0.5rem',
                        color: link.color,
                        padding: '6px 10px',
                        border: `2px solid ${link.color}44`,
                        background: `${link.color}10`,
                        transition: 'all 0.1s',
                        letterSpacing: '0.08em',
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
            </div>

            {/* Right panel — form */}
            <div className="md:col-span-3">
              <div className="pixel-card pixel-card-gold">
                <div
                  style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.5rem',
                    color: 'var(--rp-gold)',
                    letterSpacing: '0.1em',
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '2px solid var(--rp-gold)',
                  }}
                >
                  ♦ SEND MESSAGE
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: 'name',    label: 'YOUR NAME',     type: 'text',  placeholder: 'ADVENTURER...' },
                    { id: 'email',   label: 'EMAIL ADDRESS', type: 'email', placeholder: 'EMAIL...' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gray)', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}
                      >
                        ▶ {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required
                        placeholder={field.placeholder}
                        className="pixel-input"
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gray)', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}
                    >
                      ▶ MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="DESCRIBE YOUR QUEST..."
                      className="pixel-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button type="submit" className="pixel-btn pixel-btn-gold w-full justify-center">
                    ▶ SEND MESSAGE
                  </button>

                  {status && (
                    <div
                      style={{
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '0.45rem',
                        color: 'var(--rp-green)',
                        border: '2px solid var(--rp-green)',
                        padding: '10px 14px',
                        background: 'rgba(0,255,136,0.1)',
                        letterSpacing: '0.05em',
                        textAlign: 'center',
                      }}
                    >
                      ✓ {status}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
