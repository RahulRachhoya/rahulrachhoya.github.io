import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/RahulRachhoya', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/rahulrachhoya', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/rahulrachhoya', icon: 'twitter' },
  ];

  return (
    <section id="contact" className="section bg-surface-base">
      <div className="container">
        <div className="text-center mb-12">
          <span className="tag mb-4">Get in Touch</span>
          <h2 className="h2 mb-4">Let's build something amazing</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bento-grid">
            {/* Contact Info */}
            <div className="span-5 space-y-6">
              <div className="bento-card">
                <h3 className="h4 text-lg mb-4">Contact Info</h3>
                <a
                  href="mailto:dev@rahulrachhoya.in"
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-subtle flex items-center justify-center">
                    <span className="text-xl">✉️</span>
                  </div>
                  <span className="font-medium">dev@rahulrachhoya.in</span>
                </a>
              </div>

              <div className="bento-card">
                <h3 className="h4 text-lg mb-4">Social Links</h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary-subtle hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all hover:scale-110"
                      title={link.name}
                    >
                      <span className="text-xl">
                        {link.icon === 'github' && '📦'}
                        {link.icon === 'linkedin' && '💼'}
                        {link.icon === 'twitter' && '🐦'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="span-7 bento-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-base border border-border text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-base border border-border text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-surface-base border border-border text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                  <span>→</span>
                </button>
                {status && (
                  <p className="text-center text-success text-sm font-medium">{status}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
