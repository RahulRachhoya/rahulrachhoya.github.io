const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl opacity-20 blur-2xl" />
              
              {/* Image Container */}
              <div className="relative glass rounded-3xl p-2">
                <div className="bg-gradient-to-br from-dark to-darker rounded-2xl aspect-square flex items-center justify-center">
                  {/* Avatar placeholder - using initials */}
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl font-bold text-white">
                    RR
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-sm font-semibold text-primary">AI Enthusiast</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full" style={{ animationDuration: '4s' }}>
                <span className="text-sm font-semibold text-secondary">Security First</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a passionate developer building the future of autonomous AI systems. 
              With expertise spanning full-stack development, AI agent orchestration, 
              and security research, I create production-grade solutions that push boundaries.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My approach combines aggressive cost optimization (zero-cost infrastructure) 
              with rigorous engineering practices — every project features comprehensive tests, 
              CI/CD pipelines, and security hardening.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-4 skill-card">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-500">Years Coding</div>
              </div>
              <div className="glass rounded-xl p-4 skill-card">
                <div className="text-2xl font-bold text-secondary">10+</div>
                <div className="text-sm text-gray-500">Tech Stack</div>
              </div>
              <div className="glass rounded-xl p-4 skill-card">
                <div className="text-2xl font-bold text-accent">1</div>
                <div className="text-sm text-gray-500">OSS Contribution</div>
              </div>
              <div className="glass rounded-xl p-4 skill-card">
                <div className="text-2xl font-bold text-emerald-400">∞</div>
                <div className="text-sm text-gray-500">Learning</div>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white mb-3">Current Focus</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Multi-Agent Systems',
                  'AI Agent Orchestration',
                  'Real-time Trading Systems',
                  'Security Research',
                  'Zero-Cost Architecture',
                  'HITL Workflows',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-400"
                  >
                    {interest}
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
