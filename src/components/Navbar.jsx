import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white shadow-sm">
              <Rocket size={18} />
            </span>
            VibeMotion
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-slate-900 px-3.5 py-2 text-white hover:bg-slate-800 transition-colors">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>Features</a>
              <a href="#pricing" className="rounded-md px-3 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>Pricing</a>
              <a href="#faq" className="rounded-md px-3 py-2 hover:bg-slate-100" onClick={() => setOpen(false)}>FAQ</a>
              <a href="#cta" className="rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
