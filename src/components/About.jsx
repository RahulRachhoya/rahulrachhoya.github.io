const About = () => {
  const highlights = [
    { title: 'Full-Stack Engineer', desc: 'Production-grade web apps' },
    { title: 'AI Specialist', desc: 'Multi-agent systems' },
    { title: 'Security Researcher', desc: 'Bug bounty & pentesting' },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                future
              </span>{' '}
              of autonomous systems
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              I'm a passionate developer building the future of autonomous AI systems. With expertise spanning 
              full-stack development, AI agent orchestration, and security research, I create production-grade 
              solutions that push boundaries.
            </p>
            <p className="text-white/40 leading-relaxed mb-8">
              My approach combines aggressive cost optimization (zero-cost infrastructure) with rigorous engineering 
              practices — every project features comprehensive tests, CI/CD pipelines, and security hardening.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[ 
                { value: '5+', label: 'Years Coding' },
                { value: '10+', label: 'Tech Stack' },
                { value: '1', label: 'OSS Contribution' },
                { value: '∞', label: 'Learning' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-sm font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </div>
                <div className="text-sm text-white/40">{item.desc}</div>
              </div>
            ))}
            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm">
              <div className="text-sm font-medium text-white mb-2">Current Focus</div>
              <div className="flex flex-wrap gap-2">
                {['Multi-Agent Systems', 'AI Orchestration', 'Real-time Trading', 'Security Research'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70">
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
