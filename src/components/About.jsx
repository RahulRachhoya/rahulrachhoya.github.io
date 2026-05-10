const About = () => {
  const highlights = [
    {
      title: 'FULL-STACK ENGINEER',
      desc: 'Production-grade web applications with zero-cost infrastructure. Every line tested, every deployment hardened.',
      icon: '💻',
      color: 'var(--rp-cyan)',
    },
    {
      title: 'AI SPECIALIST',
      desc: 'Multi-agent systems, LLM orchestration, HITL workflows on AWS Bedrock. CrewAI + LangGraph in production.',
      icon: '🔮',
      color: 'var(--rp-pink)',
    },
    {
      title: 'SHADOW HUNTER',
      desc: 'Bug bounty programs, CVE research, OSploit framework. OS-level & web security penetration testing.',
      icon: '🗡️',
      color: 'var(--rp-red)',
    },
  ];

  const stats = [
    { value: '5+',  label: 'YRS CODING',    color: 'var(--rp-green)' },
    { value: '10+', label: 'TECH STACKS',   color: 'var(--rp-cyan)' },
    { value: '1',   label: 'OSS MERGED',    color: 'var(--rp-gold)' },
    { value: '∞',   label: 'LEARNING',      color: 'var(--rp-pink)' },
  ];

  const currentFocus = [
    { label: 'Multi-Agent Systems', icon: '🔮' },
    { label: 'AI Orchestration',    icon: '🤖' },
    { label: 'Real-time Trading',   icon: '📈' },
    { label: 'Security Research',   icon: '🛡️' },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--rp-deep)' }}>
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <span className="section-label">👾 PLAYER PROFILE 👾</span>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
            ABOUT ME
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left — bio + mini stats */}
          <div className="pixel-card" style={{ background: 'var(--rp-black)' }}>
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
              ♦ PLAYER BIO
            </div>

            <div className="space-y-4">
              <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1.05rem', color: 'var(--rp-light)', lineHeight: 1.75 }}>
                I'm a passionate developer building the future of autonomous AI systems. With expertise spanning
                full-stack development, AI agent orchestration, and security research, I create production-grade
                solutions that push boundaries.
              </p>
              <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1rem', color: 'var(--rp-gray)', lineHeight: 1.75 }}>
                My approach combines aggressive cost optimization — zero-cost infrastructure — with rigorous
                engineering: every project ships with full tests, CI/CD pipelines, and security hardening.
              </p>
            </div>

            {/* Mini stats */}
            <div
              className="grid grid-cols-4 gap-3 mt-6 pt-5"
              style={{ borderTop: '2px dashed rgba(255,255,255,0.15)' }}
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    style={{
                      fontFamily: 'var(--font-pixel)',
                      fontSize: '1rem',
                      color: s.color,
                      textShadow: `2px 2px 0 ${s.color}44`,
                      marginBottom: '4px',
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.35rem', color: 'var(--rp-gray-dim)', letterSpacing: '0.05em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — role cards + current focus */}
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="pixel-card"
                style={{
                  borderColor: h.color,
                  boxShadow: `4px 4px 0 ${h.color}55`,
                  background: 'var(--rp-black)',
                  padding: '16px 20px',
                }}
              >
                <div className="flex items-start gap-4">
                  <span style={{ fontSize: '1.5rem', flexShrink: 0, filter: 'drop-shadow(0 0 6px currentColor)' }}>
                    {h.icon}
                  </span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem', color: h.color, marginBottom: '6px', letterSpacing: '0.08em' }}>
                      {h.title}
                    </div>
                    <p style={{ fontFamily: 'var(--font-retro)', fontSize: '0.95rem', color: 'var(--rp-gray)', lineHeight: 1.6 }}>
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Current focus */}
            <div
              className="pixel-card pixel-card-purple"
              style={{ background: 'linear-gradient(135deg, var(--rp-black), var(--rp-purple-dark))' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.5rem',
                  color: 'var(--rp-gold)',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                ♦ CURRENT FOCUS
              </div>
              <div className="grid grid-cols-2 gap-2">
                {currentFocus.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 10px',
                      background: 'rgba(107,70,193,0.15)',
                      border: '2px solid var(--rp-purple)',
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{f.icon}</span>
                    <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.9rem', color: 'var(--rp-light)' }}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
