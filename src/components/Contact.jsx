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
    { name: 'GitHub', url: 'https://github.com/RahulRachhoya', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/rahulrachhoya', icon: 'LI' },
    { name: 'Twitter', url: 'https://twitter.com/rahulrachhoya', icon: 'X' },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's build something amazing
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:dev@rahulrachhoya.in"
                  className="flex items-center gap-3 text-white/60 hover:text-indigo-400 transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    ✉
                  </span>
                  dev@rahulrachhoya.in
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">Social Links</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message →
            </button>
            {status && (
              <p className="text-center text-emerald-400 text-sm">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
