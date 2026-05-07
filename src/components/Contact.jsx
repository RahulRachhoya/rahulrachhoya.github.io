     1|import { Mail, Code2, ExternalLink, Twitter, Send, ArrowUpRight } from 'lucide-react';
     2|import { useState } from 'react';
     3|
     4|const Contact = () => {
     5|  const [formData, setFormData] = useState({
     6|    name: '',
     7|    email: '',
     8|    message: '',
     9|  });
    10|  const [isSubmitting, setIsSubmitting] = useState(false);
    11|  const [submitted, setSubmitted] = useState(false);
    12|
    13|  const handleSubmit = async (e) => {
    14|    e.preventDefault();
    15|    setIsSubmitting(true);
    16|    
    17|    // Simulate form submission
    18|    await new Promise(resolve => setTimeout(resolve, 1000));
    19|    
    20|    setIsSubmitting(false);
    21|    setSubmitted(true);
    22|    setFormData({ name: '', email: '', message: '' });
    23|    
    24|    setTimeout(() => setSubmitted(false), 5000);
    25|  };
    26|
    27|  const handleChange = (e) => {
    28|    setFormData(prev => ({
    29|      ...prev,
    30|      [e.target.name]: e.target.value
    31|    }));
    32|  };
    33|
    34|  const socialLinks = [
    35|    { icon: Code2, href: 'https://github.com/RahulRachhoya', label: 'GitHub' },
    36|    { icon: ExternalLink, href: 'https://linkedin.com/in/rahulrachhoya', label: 'LinkedIn' },
    37|    { icon: Twitter, href: 'https://twitter.com/rahulrachhoya', label: 'Twitter' },
    38|    { icon: Mail, href: 'mailto:dev@rahulrachhoya.in', label: 'Email' },
    39|  ];
    40|
    41|  return (
    42|    <section id="contact" className="py-20 lg:py-32">
    43|      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    44|        {/* Section Header */}
    45|        <div className="text-center mb-16">
    46|          <span className="tag mb-4 inline-block">Contact</span>
    47|          <h2 className="text-[var(--text-primary)] mb-4">
    48|            Let's <span className="gradient-text">build together</span>
    49|          </h2>
    50|          <p className="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
    51|            Have a project idea or want to collaborate? I'd love to hear from you.
    52|          </p>
    53|        </div>
    54|
    55|        <div className="bento-grid">
    56|          {/* Contact Info Card */}
    57|          <div className="bento-item span-5">
    58|            <div className="glass-card p-8 h-full flex flex-col">
    59|              <h3 className="text-[var(--text-primary)] mb-4">Get in Touch</h3>
    60|              <p className="text-[var(--text-tertiary)] mb-8 leading-relaxed">
    61|                I'm currently open for freelance projects, collaborations, and full-time opportunities. 
    62|                Whether you need help with AI agents, trading systems, or full-stack development, 
    63|                let's discuss how we can work together.
    64|              </p>
    65|
    66|              <div className="space-y-4 flex-grow">
    67|                <a
    68|                  href="mailto:dev@rahulrachhoya.in"
    69|                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[var(--primary-subtle)] transition-colors group"
    70|                >
    71|                  <div className="w-12 h-12 rounded-xl bg-[var(--primary-subtle)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
    72|                    <Mail className="w-5 h-5 text-[var(--secondary)] group-hover:text-white transition-colors" />
    73|                  </div>
    74|                  <div>
    75|                    <div className="text-sm text-[var(--text-tertiary)]">Email</div>
    76|                    <div className="font-medium text-[var(--text-primary)]">dev@rahulrachhoya.in</div>
    77|                  </div>
    78|                  <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
    79|                </a>
    80|
    81|                <div className="flex items-center gap-4 p-4 rounded-2xl">
    82|                  <div className="w-12 h-12 rounded-xl bg-[var(--secondary-subtle)] flex items-center justify-center">
    83|                    <span className="text-[var(--text-primary)] font-bold">₹</span>
    84|                  </div>
    85|                  <div>
    86|                    <div className="text-sm text-[var(--text-tertiary)]">Location</div>
    87|                    <div className="font-medium text-[var(--text-primary)]">India • GMT+5:30</div>
    88|                  </div>
    89|                </div>
    90|              </div>
    91|
    92|              {/* Social Links */}
    93|              <div className="mt-8 pt-8 border-t border-[var(--border-soft)]">
    94|                <div className="text-sm text-[var(--text-tertiary)] mb-4">Connect on social</div>
    95|                <div className="flex gap-3">
    96|                  {socialLinks.map((social, index) => (
    97|                    <a
    98|                      key={index}
    99|                      href={social.href}
   100|                      target="_blank"
   101|                      rel="noopener noreferrer"
   102|                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--border-soft)] hover:bg-[var(--primary)] hover:text-white text-[var(--text-tertiary)] transition-all duration-300 group"
   103|                      aria-label={social.label}
   104|                    >
   105|                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
   106|                    </a>
   107|                  ))}
   108|                </div>
   109|              </div>
   110|            </div>
   111|          </div>
   112|
   113|          {/* Contact Form Card */}
   114|          <div className="bento-item span-7">
   115|            <div className="glass-card p-8 h-full">
   116|              <h3 className="text-[var(--text-primary)] mb-6">Send a Message</h3>
   117|              
   118|              {submitted ? (
   119|                <div className="flex flex-col items-center justify-center h-full py-12">
   120|                  <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 flex items-center justify-center mb-4">
   121|                    <Send className="w-8 h-8 text-[var(--success)]" />
   122|                  </div>
   123|                  <h4 className="text-[var(--text-primary)] mb-2">Message Sent!</h4>
   124|                  <p className="text-[var(--text-tertiary)] text-center">
   125|                    Thanks for reaching out. I'll get back to you soon.
   126|                  </p>
   127|                </div>
   128|              ) : (
   129|                <form onSubmit={handleSubmit} className="space-y-5">
   130|                  <div>
   131|                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
   132|                      Your Name
   133|                    </label>
   134|                    <input
   135|                      type="text"
   136|                      id="name"
   137|                      name="name"
   138|                      value={formData.name}
   139|                      onChange={handleChange}
   140|                      required
   141|                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[var(--border-soft)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
   142|                      placeholder="John Doe"
   143|                    />
   144|                  </div>
   145|
   146|                  <div>
   147|                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
   148|                      Email Address
   149|                    </label>
   150|                    <input
   151|                      type="email"
   152|                      id="email"
   153|                      name="email"
   154|                      value={formData.email}
   155|                      onChange={handleChange}
   156|                      required
   157|                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[var(--border-soft)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
   158|                      placeholder="john@example.com"
   159|                    />
   160|                  </div>
   161|
   162|                  <div>
   163|                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
   164|                      Message
   165|                    </label>
   166|                    <textarea
   167|                      id="message"
   168|                      name="message"
   169|                      value={formData.message}
   170|                      onChange={handleChange}
   171|                      required
   172|                      rows={4}
   173|                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[var(--border-soft)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)] resize-none"
   174|                      placeholder="Tell me about your project..."
   175|                    />
   176|                  </div>
   177|
   178|                  <button
   179|                    type="submit"
   180|                    disabled={isSubmitting}
   181|                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
   182|                  >
   183|                    {isSubmitting ? (
   184|                      <>
   185|                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
   186|                        Sending...
   187|                      </>
   188|                    ) : (
   189|                      <>
   190|                        Send Message
   191|                        <Send className="w-4 h-4" />
   192|                      </>
   193|                    )}
   194|                  </button>
   195|                </form>
   196|              )}
   197|            </div>
   198|          </div>
   199|        </div>
   200|      </div>
   201|    </section>
   202|  );
   203|};
   204|
   205|export default Contact;
   206|