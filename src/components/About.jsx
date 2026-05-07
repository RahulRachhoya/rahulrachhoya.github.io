const About = () => {
  const highlights = [
    { 
      number: '4+', 
      label: 'Production Projects',
      desc: 'Shipped to production'
    },
    { 
      number: '188', 
      label: 'Test Coverage',
      desc: 'Tests passing'
    },
    { 
      number: '0', 
      label: 'Infrastructure Cost',
      desc: 'Free tier maximized'
    },
  ];

  const values = [
    {
      title: 'Security First',
      desc: 'Security hardening from day one with Dependabot, CodeQL, and gitleaks',
    },
    {
      title: 'Zero-Cost Infrastructure',
      desc: 'Production-grade systems without breaking the bank',
    },
    {
      title: 'AI-Native Development',
      desc: 'Autonomous workflows with human oversight and rigorous testing',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 blur-[200px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 60%)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[var(--accent-cyan)] mb-4 block tracking-wider">
            ABOUT ME
          </span>
          <h2 className="mb-4">Engineer, Builder, Learner</h2>
          <p className="text-[var(--text-tertiary)] text-lg max-w-2xl mx-auto">
            I build production-grade systems with modern tooling and zero-cost infrastructure
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((stat, i) => (
            <div
              key={i}
              className="card p-8 text-center group hover:scale-[1.02] transition-all duration-300"
            >
              <div 
                className="text-5xl font-bold mb-3"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.number}
              </div>
              <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-sm text-[var(--text-muted)]">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="card p-8 group hover:border-[var(--accent-primary)] transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[var(--text-tertiary)] text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
