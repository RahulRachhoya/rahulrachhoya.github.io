const About = () => {
  const highlights = [
    { title: 'Full-Stack Engineer', desc: 'Production-grade web applications', icon: '💻' },
    { title: 'AI Specialist', desc: 'Multi-agent systems & orchestration', icon: '🤖' },
    { title: 'Security Researcher', desc: 'Bug bounty & pentesting', icon: '🔒' },
  ];

  const stats = [
    { value: '5+', label: 'Years Coding' },
    { value: '10+', label: 'Tech Stack' },
    { value: '1', label: 'OSS Contribution' },
    { value: '∞', label: 'Learning' },
  ];

  const currentFocus = [
    'Multi-Agent Systems',
    'AI Orchestration',
    'Real-time Trading',
    'Security Research',
  ];

  return (
    <section id="about" className="section bg-surface-base">
      <div className="container">
        <div className="text-center mb-12">
          <span className="tag mb-4">About Me</span>
          <h2 className="h2 mb-4">
            Building the <span className="gradient-text">future</span> of autonomous systems
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Passionate developer creating production-grade AI solutions that push boundaries
          </p>
        </div>

        <div className="bento-grid">
          {/* Main Content */}
          <div className="span-6 bento-card">
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                I'm a passionate developer building the future of autonomous AI systems. With expertise spanning
                full-stack development, AI agent orchestration, and security research, I create production-grade
                solutions that push boundaries.
              </p>
              <p className="text-text-tertiary leading-relaxed">
                My approach combines aggressive cost optimization (zero-cost infrastructure) with rigorous engineering
                practices — every project features comprehensive tests, CI/CD pipelines, and security hardening.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-border">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="stat-value text-2xl">{stat.value}</div>
                    <div className="stat-label text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="span-6 space-y-4">
            {highlights.map((item, i) => (
              <div key={i} className="bento-card bg-primary-subtle border-primary/20">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="h4 text-base mb-1">{item.title}</h4>
                    <p className="text-sm text-text-tertiary">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Current Focus */}
            <div className="bento-card bg-gradient-to-br from-primary-subtle to-secondary-subtle border-primary/20">
              <h4 className="h4 text-base mb-3">Current Focus</h4>
              <div className="flex flex-wrap gap-2">
                {currentFocus.map((tag) => (
                  <span key={tag} className="tag tag-secondary text-xs">
                    {tag}
                  </span>
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
