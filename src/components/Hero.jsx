     1|import { FolderGit, ExternalLink, MessageCircle, ArrowDown, Sparkles } from 'lucide-react';
     2|import { useEffect, useRef, useState } from 'react';
     3|
     4|const Hero = () => {
     5|  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
     6|  const heroRef = useRef(null);
     7|
     8|  useEffect(() => {
     9|    const handleMouseMove = (e) => {
    10|      if (heroRef.current) {
    11|        const rect = heroRef.current.getBoundingClientRect();
    12|        setMousePosition({
    13|          x: ((e.clientX - rect.left) / rect.width) * 100,
    14|          y: ((e.clientY - rect.top) / rect.height) * 100,
    15|        });
    16|      }
    17|    };
    18|
    19|    window.addEventListener('mousemove', handleMouseMove);
    20|    return () => window.removeEventListener('mousemove', handleMouseMove);
    21|  }, []);
    22|
    23|  const stats = [
    24|    { value: '4+', label: 'Major Projects' },
    25|    { value: '188', label: 'Test Cases' },
    26|    { value: '10+', label: 'Tech Skills' },
    27|    { value: '₹0', label: 'Infra Cost' },
    28|  ];
    29|
    30|  const socialLinks = [
    31|    { icon: FolderGit, href: 'https://github.com/RahulRachhoya', label: 'GitHub' },
    32|    { icon: ExternalLink, href: '#', label: 'LinkedIn' },
    33|    { icon: MessageCircle, href: '#', label: 'MessageCircle' },
    34|  ];
    35|
    36|  return (
    37|    <section
    38|      ref={heroRef}
    39|      id="hero"
    40|      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12"
    41|    >
    42|      {/* Dynamic gradient background */}
    43|      <div
    44|        className="absolute inset-0 opacity-60 transition-all duration-700 pointer-events-none"
    45|        style={{
    46|          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
    47|            rgba(250, 212, 192, 0.4) 0%, 
    48|            rgba(128, 161, 193, 0.2) 30%, 
    49|            transparent 60%)`,
    50|        }}
    51|      />
    52|
    53|      {/* Floating decorative elements */}
    54|      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
    55|      <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
    56|
    57|      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    58|        <div className="bento-grid">
    59|          {/* Main Hero Card - Large */}
    60|          <div className="bento-item span-8">
    61|            <div className="glass-card p-8 lg:p-12 h-full flex flex-col justify-center">
    62|              <div className="flex items-center gap-3 mb-6">
    63|                <span className="tag">
    64|                  <Sparkles className="w-4 h-4" />
    65|                  Available for collaboration
    66|                </span>
    67|              </div>
    68|
    69|              <h1 className="mb-4 text-[var(--text-primary)]">
    70|                Building{' '}
    71|                <span className="gradient-text">scalable systems</span>
    72|                <br />
    73|                with modern stack
    74|              </h1>
    75|
    76|              <p className="text-lg text-[var(--text-tertiary)] max-w-xl mb-8 leading-relaxed">
    77|                Full-stack engineer specializing in AI-powered applications, real-time trading systems, 
    78|                and security research. Open source contributor with 188+ test cases.
    79|              </p>
    80|
    81|              <div className="flex flex-wrap gap-4">
    82|                <a href="#projects" className="btn-primary">
    83|                  View Projects
    84|                  <ArrowDown className="w-4 h-4" />
    85|                </a>
    86|                <a href="#contact" className="btn-secondary">
    87|                  Get in Touch
    88|                </a>
    89|              </div>
    90|            </div>
    91|          </div>
    92|
    93|          {/* Stats Card */}
    94|          <div className="bento-item span-4">
    95|            <div className="glass-card p-6 h-full">
    96|              <div className="grid grid-cols-2 gap-4 h-full">
    97|                {stats.map((stat, index) => (
    98|                  <div
    99|                    key={index}
   100|                    className="flex flex-col justify-center p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-colors"
   101|                  >
   102|                    <div className="stat-number gradient-text">{stat.value}</div>
   103|                    <div className="stat-label">{stat.label}</div>
   104|                  </div>
   105|                ))}
   106|              </div>
   107|            </div>
   108|          </div>
   109|
   110|          {/* Social Links Card */}
   111|          <div className="bento-item span-3">
   112|            <div className="glass-card p-6 h-full flex flex-col justify-center">
   113|              <h4 className="text-[var(--text-secondary)] mb-4 font-medium">Connect</h4>
   114|              <div className="flex flex-col gap-3">
   115|                {socialLinks.map((social, index) => (
   116|                  <a
   117|                    key={index}
   118|                    href={social.href}
   119|                    target="_blank"
   120|                    rel="noopener noreferrer"
   121|                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--primary-subtle)] transition-colors group"
   122|                  >
   123|                    <social.icon className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--secondary)] transition-colors" />
   124|                    <span className="font-medium text-[var(--text-secondary)]">{social.label}</span>
   125|                  </a>
   126|                ))}
   127|              </div>
   128|            </div>
   129|          </div>
   130|
   131|          {/* Current Focus Card */}
   132|          <div className="bento-item span-5">
   133|            <div className="glass-card p-6 h-full">
   134|              <h4 className="text-[var(--text-secondary)] mb-4 font-medium">Currently Exploring</h4>
   135|              <div className="flex flex-wrap gap-2">
   136|                {['Multi-Agent Systems', 'LangGraph', 'CrewAI', 'AWS Bedrock', 'Real-time WebSockets'].map((tech, i) => (
   137|                  <span key={i} className="tag tag-secondary">
   138|                    {tech}
   139|                  </span>
   140|                ))}
   141|              </div>
   142|              <p className="mt-4 text-sm text-[var(--text-tertiary)]">
   143|                Building AI Agent OS - a multi-agent automation platform for Indian market with ₹ pricing.
   144|              </p>
   145|            </div>
   146|          </div>
   147|
   148|          {/* Latest Achievement Card */}
   149|          <div className="bento-item span-4">
   150|            <div className="glass-card p-6 h-full bg-gradient-to-br from-[var(--primary-subtle)] to-transparent">
   151|              <span className="tag mb-3 inline-block">Latest</span>
   152|              <h4 className="text-[var(--text-primary)] mb-2">
   153|                Open Source Contribution
   154|              </h4>
   155|              <p className="text-sm text-[var(--text-tertiary)] mb-3">
   156|                Fixed AutoSaveIndicator import bug in Refine framework. PR #7416 merged.
   157|              </p>
   158|              <a href="https://github.com/refinedev/refine/pull/7416" target="_blank" rel="noopener noreferrer" className="link-hover text-sm">
   159|                View PR →
   160|              </a>
   161|            </div>
   162|          </div>
   163|        </div>
   164|      </div>
   165|    </section>
   166|  );
   167|};
   168|
   169|export default Hero;
   170|