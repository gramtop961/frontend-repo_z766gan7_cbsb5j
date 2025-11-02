import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-cyan-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-sm sm:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Ready to craft something beautiful?</h3>
            <p className="mt-3 text-slate-600">
              Launch your next landing page with motion that feels effortless. No clutter, just results.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#" className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0">
                Get Started Free
              </a>
              <a href="#faq" className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm hover:bg-slate-50">
                Learn More
              </a>
            </div>
          </div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 opacity-30 blur-2xl"
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
