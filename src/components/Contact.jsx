import { Mail, Github, Linkedin, Twitter, Send, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RahulRachhoya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rahulrachhoya', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/rahulrachhoya', label: 'Twitter' },
    { icon: Mail, href: 'mailto:dev@rahulrachhoya.in', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Contact</span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Let's <span className="gradient-text">build together</span>
          </h2>
          <p className="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
            Have a project idea or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="bento-grid">
          {/* Contact Info Card */}
          <div className="bento-item span-5">
            <div className="glass-card p-8 h-full flex flex-col">
              <h3 className="text-[var(--text-primary)] mb-4">Get in Touch</h3>
              <p className="text-[var(--text-tertiary)] mb-8 leading-relaxed">
                I'm currently open for freelance projects, collaborations, and full-time opportunities. 
                Whether you need help with AI agents, trading systems, or full-stack development, 
                let's discuss how we can work together.
              </p>

              <div className="space-y-4 flex-grow">
                <a
                  href="mailto:dev@rahulrachhoya.in"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[var(--primary-subtle)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary-subtle)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                    <Mail className="w-5 h-5 text-[var(--secondary)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-tertiary)]">Email</div>
                    <div className="font-medium text-[var(--text-primary)]">dev@rahulrachhoya.in</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-[var(--secondary-subtle)] flex items-center justify-center">
                    <span className="text-[var(--text-primary)] font-bold">₹</span>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-tertiary)]">Location</div>
                    <div className="font-medium text-[var(--text-primary)]">India • GMT+5:30</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-[var(--border-soft)]">
                <div className="text-sm text-[var(--text-tertiary)] mb-4">Connect on social</div>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--border-soft)] hover:bg-[var(--primary)] hover:text-white text-[var(--text-tertiary)] transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bento-item span-7">
            <div className="glass-card p-8 h-full">
              <h3 className="text-[var(--text-primary)] mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-[var(--success)]" />
                  </div>
                  <h4 className="text-[var(--text-primary)] mb-2">Message Sent!</h4>
                  <p className="text-[var(--text-tertiary)] text-center">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[var(--border-soft)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[var(--border-soft)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[var(--border-soft)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)] resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
