import { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperPlaneTilt, At, LinkedinLogo, GithubLogo, ArrowUpRight } from '@phosphor-icons/react';

const LINKS = [
  {
    label: 'Email',
    value: 'rahulrachhoya0@gmail.com',
    href: 'mailto:rahulrachhoya0@gmail.com',
    icon: <At size={18} weight="light" />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahulrachhoya',
    href: 'https://linkedin.com/in/rahulrachhoya',
    icon: <LinkedinLogo size={18} weight="light" />,
  },
  {
    label: 'GitHub',
    value: 'github.com/RahulRachhoya',
    href: 'https://github.com/RahulRachhoya',
    icon: <GithubLogo size={18} weight="light" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.32, 0.72, 0, 1] },
  }),
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/rahulrachhoya0@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });
      if (res.ok) {
        setSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '120px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeUp} custom={0} style={{ marginBottom: 16 }}>
          <span className="eyebrow">Send Message</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: '#f5f5f5',
            marginBottom: 56,
          }}
        >
          Let's build something
          <span style={{ color: 'var(--accent)' }}> together</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* Form */}
          <motion.div variants={fadeUp} custom={2} className="card-outer">
            <div className="card-inner" style={{ padding: '32px 28px' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { key: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Geist Mono', monospace", display: 'block', marginBottom: 8 }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={formState[field.key]}
                      onChange={e => setFormState(s => ({ ...s, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      required
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border)',
                        borderRadius: 12,
                        padding: '12px 16px',
                        fontSize: 14,
                        color: '#f5f5f5',
                        outline: 'none',
                        transition: 'border-color 0.3s cubic-bezier(0.32,0.72,0,1)',
                        fontFamily: "'Geist', sans-serif",
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Geist Mono', monospace", display: 'block', marginBottom: 8 }}>
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      padding: '12px 16px',
                      fontSize: 14,
                      color: '#f5f5f5',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.3s cubic-bezier(0.32,0.72,0,1)',
                      fontFamily: "'Geist', sans-serif",
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    background: error ? '#ef4444' : sent ? '#22c55e' : 'var(--accent)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '14px 28px',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#fff',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    transition: 'background 0.4s cubic-bezier(0.32,0.72,0,1)',
                    boxShadow: error ? '0 0 20px rgba(239,68,68,0.3)' : sent ? '0 0 20px rgba(34,197,94,0.3)' : '0 0 20px rgba(59,130,246,0.2)',
                    fontFamily: "'Geist', sans-serif",
                    opacity: sending ? 0.8 : 1,
                  }}
                >
                  {error ? 'Failed — Try Again' : sent ? 'Message Sent!' : sending ? 'Sending...' : 'Send Message'}
                  <span style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: 'rgba(0,0,0,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    animation: sending ? 'pulse 1s ease-in-out infinite' : 'none',
                  }}>
                    <PaperPlaneTilt size={12} weight="fill" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                variants={fadeUp}
                custom={i + 3}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="card-outer"
                style={{ textDecoration: 'none', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <div className="card-inner" style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 36, height: 36,
                      borderRadius: 10,
                      background: 'rgba(59,130,246,0.08)',
                      border: '1px solid rgba(59,130,246,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--accent)',
                    }}>
                      {link.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Geist Mono', monospace", marginBottom: 2 }}>
                        {link.label}
                      </div>
                      <div style={{ fontSize: 13, color: '#f5f5f5', fontWeight: 500 }}>
                        {link.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} weight="bold" style={{ color: 'var(--text-muted)' }} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
