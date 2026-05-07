const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section">
      <div className="container">
        <div className="bento-grid">
          {/* Main Hero Card - Spotlight */}
          <div className="span-12 bento-card">
            <div className="flex flex-col items-center text-center space-y-8 py-12">
              {/* Status Badge */}
              <div className="status-badge">
                <span className="status-dot"></span>
                Open to Opportunities
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="h1">
                  Hi, I'm <span className="gradient-text">Rahul Rachhoya</span>
                </h1>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                  Full-Stack Developer × AI Engineer × Security Researcher
                </p>
                <p className="text-text-tertiary max-w-xl mx-auto">
                  Building production-grade AI systems, trading platforms, and security tools with zero-cost infrastructure
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                  View Projects
                  <span>→</span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          {[
            { value: '4+', label: 'Production Projects' },
            { value: '188', label: 'Test Cases' },
            { value: '4k+', label: 'Lines of Code' },
            { value: '₹0', label: 'Infrastructure Cost' },
          ].map((stat, index) => (
            <div key={index} className="span-3 bento-card">
              <div className="stat">
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
