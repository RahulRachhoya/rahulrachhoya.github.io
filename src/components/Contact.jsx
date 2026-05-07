import { useState } from 'react';
import { Mail, Globe, Send, ArrowUpRight, Code, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/RahulRachhoya', 
      icon: Code,
      desc: 'View my repos'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/rahulrachhoya', 
      icon: Globe,
      desc: 'Professional network'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/rahulrachhoya', 
      icon: Shield,
      desc: 'Follow updates'
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 blur-[150px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 50%)' }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[var(--accent-cyan)] mb-4 block tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="mb-4">Let's work together</h2>
          <p className="text-[var(--text-tertiary)] text-lg max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <div className="md:col-span-2 space-y-6">
            {/* Email Card */}
            <a 
              href="mailto:dev@rahulrachhoya.in"
              className="group card p-6 block hover:border-[var(--accent-primary)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[var(--accent-primary)] bg-[var(--accent-primary)]/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    Email
                  </h3>
                  <p className="text-[var(--text-tertiary)] text-sm">dev@rahulrachhoya.in</p>
                </div>
              </div>
            </a>

            {/* Social Links */}
            <div className="card p-6">
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-[var(--bg-elevated)] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} className="text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                        <div>
                          <div className="text-white text-sm font-medium">{link.name}</div>
                          <div className="text-[var(--text-muted)] text-xs">{link.desc}</div>
                        </div>
                      </div>
                      <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-light)] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-light)] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-light)] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: isSubmitting 
                      ? 'var(--bg-elevated)' 
                      : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                  }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
                {status && (
                  <p className="text-center text-[var(--accent-emerald)] text-sm animate-fade-in">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
