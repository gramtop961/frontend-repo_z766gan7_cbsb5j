import { motion } from 'framer-motion';
import { Bolt, Shield, Gauge, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Bolt className="h-5 w-5 text-indigo-600" />,
    title: 'Snappy Performance',
    desc: 'Built with modern patterns and smart animation primitives that stay smooth on every device.'
  },
  {
    icon: <Shield className="h-5 w-5 text-indigo-600" />,
    title: 'Accessible Motion',
    desc: 'Respects reduced-motion preferences and avoids motion sickness with thoughtful easing and ranges.'
  },
  {
    icon: <Gauge className="h-5 w-5 text-indigo-600" />,
    title: 'Optimized Rendering',
    desc: 'GPU-accelerated transforms and will-change hints to keep frames silky even under load.'
  },
  {
    icon: <Sparkles className="h-5 w-5 text-indigo-600" />,
    title: 'Polished Aesthetics',
    desc: 'Gradient glows, soft shadows, and tasteful depth to make your brand feel premium.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Crafted for beauty and speed
          </h2>
          <p className="mt-3 text-slate-600">
            Everything you need to ship a stunning landing page that feels as good as it looks.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 transition-all duration-300 group-hover:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
