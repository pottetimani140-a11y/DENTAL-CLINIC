import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-teal rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold font-[family-name:var(--font-heading)] leading-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                SmileCare
              </span>
              <span className={`text-[10px] uppercase tracking-widest transition-colors ${scrolled ? 'text-secondary' : 'text-teal-light'}`}>
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? scrolled
                      ? 'text-secondary bg-secondary/10'
                      : 'text-teal-light bg-white/10'
                    : scrolled
                      ? 'text-text-dark hover:text-secondary hover:bg-secondary/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#appointment"
              onClick={(e) => { e.preventDefault(); handleNavClick('#appointment'); }}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </a>

            {/* Hamburger */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-6 rounded-full transition-all duration-300 origin-center ${
                    isOpen ? 'rotate-45 translate-y-[9px] bg-text-dark' : scrolled ? 'bg-text-dark' : 'bg-white'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : scrolled ? 'bg-text-dark' : 'bg-white'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded-full transition-all duration-300 origin-center ${
                    isOpen ? '-rotate-45 -translate-y-[9px] bg-text-dark' : scrolled ? 'bg-text-dark' : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[400px] mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-secondary bg-secondary/10'
                    : 'text-text-dark hover:bg-surface hover:text-secondary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={(e) => { e.preventDefault(); handleNavClick('#appointment'); }}
              className="block w-full text-center bg-gradient-to-r from-secondary to-teal text-white px-5 py-3 rounded-xl text-sm font-semibold mt-2"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
