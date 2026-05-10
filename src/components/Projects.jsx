const Projects = () => {
  const projects = [
    {
      id: 'CART-01',
      title: 'TRADEKIT',
      genre: 'FINTECH · REAL-TIME',
      rating: 'E',
      ratingColor: 'var(--rp-green)',
      desc: 'Production-ready trading platform. 500:1 leverage, WebSocket gateway, order execution engine with SL/TP, market data streaming.',
      tags: ['Deno', 'TypeScript', 'WebSocket', 'Supabase', 'Redis'],
      github: 'https://github.com/RahulRachhoya/tradekit',
      demo: null,
      stats: { tests: '188', endpoints: '34', cost: '₹0' },
      color: 'var(--rp-green)',
      featured: true,
      cartColor: '#1A4A2E',
    },
    {
      id: 'CART-02',
      title: 'AI AGENT OS',
      genre: 'AI · AUTOMATION',
      rating: 'A',
      ratingColor: 'var(--rp-pink)',
      desc: 'Multi-agent freelance automation OS. CrewAI + LangGraph orchestration, HITL workflows, Razorpay billing, Celery queues.',
      tags: ['Python', 'CrewAI', 'LangGraph', 'AWS Bedrock'],
      github: 'https://github.com/RahulRachhoya/ai_agent_os',
      demo: null,
      stats: { agents: '5+', integrations: 'Razorpay', stack: 'Bedrock' },
      color: 'var(--rp-purple)',
      featured: true,
      cartColor: '#2D1B69',
    },
    {
      id: 'CART-03',
      title: 'OSPLOIT',
      genre: 'SECURITY · RESEARCH',
      rating: 'M',
      ratingColor: 'var(--rp-red)',
      desc: 'Cross-platform exploit automation framework for security research. CVE database integration, custom payload generation.',
      tags: ['Python', 'Security', 'Pentesting', 'Nmap'],
      github: 'https://github.com/RahulRachhoya/osploit',
      demo: null,
      stats: { modules: 'CVE DB', scope: 'Multi-OS', type: 'Research' },
      color: 'var(--rp-red)',
      featured: false,
      cartColor: '#3D1010',
    },
    {
      id: 'CART-04',
      title: 'REFINE OSS',
      genre: 'OPEN SOURCE · FIX',
      rating: 'E',
      ratingColor: 'var(--rp-gold)',
      desc: 'PR #7416 merged — fixed swizzle command bug in the Refine OSS framework. AutoSaveIndicator import path correction.',
      tags: ['TypeScript', 'React', 'Open Source'],
      github: 'https://github.com/refinedev/refine/pull/7416',
      demo: null,
      stats: { pr: '#7416', status: 'MERGED', impact: 'Community' },
      color: 'var(--rp-gold)',
      featured: false,
      cartColor: '#2D2600',
    },
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--rp-black)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">🗡️ GAME SELECTION 🗡️</span>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
            SELECT PROJECT
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group cursor-default"
              style={{
                border: `3px solid ${p.color}`,
                boxShadow: `5px 5px 0px ${p.color}88, 0 0 20px ${p.color}22`,
                background: p.cartColor,
                transition: 'transform 0.1s, box-shadow 0.1s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-3px, -3px)';
                e.currentTarget.style.boxShadow = `8px 8px 0px ${p.color}88, 0 0 30px ${p.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = `5px 5px 0px ${p.color}88, 0 0 20px ${p.color}22`;
              }}
            >
              {/* Cartridge top label */}
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{
                  borderBottom: `3px solid ${p.color}`,
                  background: `${p.color}22`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.4rem', color: 'var(--rp-gray-dim)' }}>
                    {p.id}
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-pixel)',
                      fontSize: '0.45rem',
                      color: p.color,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {p.genre}
                  </div>
                </div>
                {/* Rating badge */}
                <div
                  style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.7rem',
                    color: p.ratingColor,
                    border: `2px solid ${p.ratingColor}`,
                    padding: '2px 7px',
                    background: `${p.ratingColor}15`,
                  }}
                >
                  {p.rating}
                </div>
              </div>

              {/* Main content */}
              <div className="p-5">
                <h3
                  style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: 'clamp(0.6rem, 1.5vw, 0.85rem)',
                    color: 'white',
                    marginBottom: '12px',
                    textShadow: `2px 2px 0 ${p.color}55`,
                  }}
                >
                  {p.title}
                </h3>

                <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1rem', color: 'var(--rp-light)', lineHeight: 1.7, marginBottom: '14px' }}>
                  {p.desc}
                </p>

                {/* Mini stats */}
                <div
                  className="flex flex-wrap gap-2 mb-4 p-3"
                  style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${p.color}44` }}
                >
                  {Object.entries(p.stats).map(([k, v]) => (
                    <div key={k} className="flex items-center gap-1">
                      <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.35rem', color: 'var(--rp-gray-dim)', textTransform: 'uppercase' }}>{k}:</span>
                      <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.4rem', color: p.color }}>{v}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pixel-tag"
                      style={{ borderColor: p.color, color: p.color, background: `${p.color}15` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn pixel-btn-ghost flex-1 justify-center !text-[0.45rem]"
                    style={{ borderColor: p.color, color: p.color }}
                  >
                    ▶ START GAME
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn flex-1 justify-center !text-[0.45rem]"
                      style={{ background: p.color, color: 'black', border: '2px solid white', boxShadow: '3px 3px 0 #000' }}
                    >
                      🎮 DEMO
                    </a>
                  )}
                </div>
              </div>

              {/* Featured badge */}
              {p.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.35rem',
                    background: 'var(--rp-gold)',
                    color: 'black',
                    padding: '3px 7px',
                    letterSpacing: '0.1em',
                  }}
                >
                  ★ FEATURED
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/RahulRachhoya"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn pixel-btn-ghost"
          >
            ⬡ ALL PROJECTS ON GITHUB →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
