import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 18 } }
  };

  return (
    <section className="relative overflow-hidden pt-28">
      {/* background gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-sky-400/30 to-cyan-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <motion.div variants={item} className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur-md shadow-sm">
              <Sparkles size={14} className="text-indigo-600" />
              Smooth, handcrafted animations
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Create landing pages that feel alive
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Delight your audience with buttery-smooth motion, modern aesthetics, and performance that scales. Built with React, Tailwind, and Framer Motion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0">
                Start Building
              </a>
              <a href="#features" className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm hover:bg-slate-50">
                See Features
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative h-[420px] w-full"
          >
            {/* animated orbs */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-2xl border border-white/40 shadow-xl" />
            <motion.div
              className="absolute left-6 top-8 h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 shadow-lg"
              animate={shouldReduceMotion ? { opacity: 0.9 } : { y: [0, -20, 0], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ willChange: 'transform, opacity' }}
            />
            <motion.div
              className="absolute right-8 top-24 h-16 w-16 rounded-full bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-rose-400 shadow-lg"
              animate={shouldReduceMotion ? { opacity: 0.9 } : { x: [0, 20, 0], y: [0, 10, 0], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ willChange: 'transform, opacity' }}
            />
            <motion.div
              className="absolute bottom-8 left-16 h-20 w-20 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 shadow-lg"
              animate={shouldReduceMotion ? { opacity: 0.9 } : { x: [0, -15, 0], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ willChange: 'transform, opacity' }}
            />

            {/* mock preview card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.15 }}
              className="absolute inset-6 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-2xl backdrop-blur-sm"
            >
              <div className="h-full w-full rounded-lg bg-gradient-to-br from-slate-50 to-slate-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
