const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Rahul.
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {currentYear} Rahul Rachhoya. All rights reserved.
            </p>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs mb-2">Built with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'Vite', 'Tailwind CSS', 'Deno', 'GitHub Pages'].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-white/5 text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
