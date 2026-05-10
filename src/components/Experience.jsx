const Experience = () => {
  const quests = [
    {
      id: 'Q-001',
      status: 'ACTIVE',
      title: 'AI AGENT ARCHITECT',
      company: 'AI Agent OS — Freelance',
      period: '2024 — PRESENT',
      desc: 'Architecting a multi-agent autonomous freelance business. Building CrewAI + LangGraph orchestration pipelines, HITL checkpoints, Razorpay billing, and Celery task queues on AWS Bedrock. Production-grade, fully automated.',
      tags: ['CrewAI', 'LangGraph', 'AWS Bedrock', 'Celery', 'Supabase'],
      reward: '+50 AI XP',
      rewardColor: 'var(--rp-pink)',
      icon: '🔮',
      difficulty: '★★★★★',
    },
    {
      id: 'Q-002',
      status: 'ACTIVE',
      title: 'SHADOW HUNTER',
      company: 'Bug Bounty Programs',
      period: '2024 — PRESENT',
      desc: 'Hunting CVEs, logic flaws, and OS-level vulnerabilities across public bug bounty programs. Building OSploit — a cross-platform exploit automation framework with custom payload generation.',
      tags: ['Pentesting', 'Web Security', 'CVE Analysis', 'OS Security'],
      reward: '+40 SEC XP',
      rewardColor: 'var(--rp-red)',
      icon: '🗡️',
      difficulty: '★★★★☆',
    },
    {
      id: 'Q-003',
      status: 'COMPLETED',
      title: 'FULL-STACK PALADIN',
      company: 'TradeKit — Personal Project',
      period: '2023 — PRESENT',
      desc: 'Built TradeKit from scratch: a production-ready trading platform with 500:1 leverage, WebSocket gateway, order execution engine with SL/TP, market data streaming, and ₹0 infrastructure cost via Cloudflare + Deno + Upstash.',
      tags: ['TypeScript', 'Deno', 'WebSocket', 'Redis', 'Supabase'],
      reward: '+60 ENG XP',
      rewardColor: 'var(--rp-green)',
      icon: '⚔️',
      difficulty: '★★★★★',
    },
    {
      id: 'Q-004',
      status: 'COMPLETED',
      title: 'OPEN SOURCE GUARDIAN',
      company: 'Refine Framework — OSS',
      period: '2023',
      desc: 'Identified and fixed a critical swizzle command bug in the Refine OSS framework — incorrect AutoSaveIndicator import paths were corrupting folder structures. PR #7416 merged to main.',
      tags: ['TypeScript', 'React', 'Open Source'],
      reward: '+20 REP XP',
      rewardColor: 'var(--rp-gold)',
      icon: '🛡️',
      difficulty: '★★★☆☆',
    },
  ];

  const statusColor = {
    ACTIVE: 'var(--rp-green)',
    COMPLETED: 'var(--rp-gold)',
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">📜 ADVENTURE LOG 📜</span>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
            QUEST LOG
          </h2>
          <div className="section-divider mx-auto mt-3" />
          <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1rem', color: 'var(--rp-gray)', marginTop: '12px' }}>
            Completed and in-progress missions. Each quest awards XP and unlocks new abilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {quests.map((q, i) => (
            <div
              key={i}
              className="pixel-card"
              style={{
                borderColor: statusColor[q.status],
                boxShadow: `4px 4px 0 ${statusColor[q.status]}55`,
                background: 'var(--rp-deep)',
              }}
            >
              {/* Quest header bar */}
              <div
                className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3"
                style={{ borderBottom: `2px solid ${statusColor[q.status]}44` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: 'var(--font-pixel)',
                      fontSize: '0.45rem',
                      color: 'var(--rp-gray-dim)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    [{q.id}]
                  </span>
                  <span style={{ fontSize: '1.3rem' }}>{q.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.5rem, 1.2vw, 0.65rem)', color: 'white' }}>
                      {q.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-retro)', fontSize: '0.9rem', color: 'var(--rp-gray)', marginTop: '2px' }}>
                      {q.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {/* Status badge */}
                  <span
                    style={{
                      fontFamily: 'var(--font-pixel)',
                      fontSize: '0.45rem',
                      color: statusColor[q.status],
                      border: `2px solid ${statusColor[q.status]}`,
                      padding: '3px 8px',
                      background: `${statusColor[q.status]}15`,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {q.status === 'ACTIVE' ? '▶ IN PROGRESS' : '✓ COMPLETED'}
                  </span>

                  {/* Period */}
                  <span
                    style={{
                      fontFamily: 'var(--font-pixel)',
                      fontSize: '0.4rem',
                      color: 'var(--rp-gray-dim)',
                    }}
                  >
                    {q.period}
                  </span>
                </div>
              </div>

              {/* Difficulty stars */}
              <div className="mb-3">
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gold)', letterSpacing: '0.2em' }}>
                  DIFFICULTY: {q.difficulty}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1.05rem', color: 'var(--rp-light)', lineHeight: 1.7, marginBottom: '16px' }}>
                {q.desc}
              </p>

              {/* Tags + reward */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {q.tags.map((tag) => (
                    <span key={tag} className="pixel-tag">{tag}</span>
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '0.45rem',
                    color: q.rewardColor,
                    background: `${q.rewardColor}15`,
                    border: `2px solid ${q.rewardColor}`,
                    padding: '3px 10px',
                  }}
                >
                  🏆 REWARD: {q.reward}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
