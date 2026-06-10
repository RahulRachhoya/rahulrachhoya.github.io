import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100dvh' }}>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GitHubActivity />
      <Contact />
      <Footer />
    </div>
  );
}
