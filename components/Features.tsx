'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Zap,
  Target,
  Linkedin,
  LayoutDashboard,
  Lightbulb,
  CalendarDays,
  BarChart3,
  Smartphone,
} from 'lucide-react'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const categories = [
    {
      label: 'Resume & ATS',
      badgeColor: 'bg-primary-100 text-primary-700',
      features: [
        {
          icon: Zap,
          title: 'Instant ATS Score',
          description:
            'Upload your PDF and get an ATS score in seconds — with a qualitative label and a numbered improvement checklist. Try it before even creating an account.',
        },
        {
          icon: Target,
          title: 'Job-Specific Optimization',
          description:
            'Select your base resume, enter the company and role, and paste the job description. AI tailors every keyword and bullet to that exact posting — with a matched vs. missing keyword breakdown.',
        },
        {
          icon: Linkedin,
          title: 'LinkedIn Profile Generator',
          description:
            'Generate AI-optimized Headline, About, Experience, Skills, and Languages from your resume — each section in a carousel with a one-click copy button.',
        },
      ],
    },
    {
      label: 'Application Pipeline',
      badgeColor: 'bg-indigo-100 text-indigo-700',
      features: [
        {
          icon: LayoutDashboard,
          title: 'Full Kanban Board',
          description:
            'Manage every application across Wishlist → Applied → Interview → Offer / Rejected with a chronological event timeline per job.',
        },
        {
          icon: Lightbulb,
          title: 'AI Coach per Stage',
          description:
            'Get context-aware AI suggestions for every job based on its current stage and days since you applied — so you always know the right next move.',
        },
        {
          icon: CalendarDays,
          title: 'Interviews, Follow-ups & Contacts',
          description:
            'Log interviews with date and type, track follow-ups by channel (email or LinkedIn), and manage contacts per application — name, role, LinkedIn, and notes.',
        },
      ],
    },
    {
      label: 'Analytics & Extras',
      badgeColor: 'bg-violet-100 text-violet-700',
      features: [
        {
          icon: BarChart3,
          title: 'Application Analytics',
          description:
            'See total applications, response rate, average ATS score, interviews, offers, and ghostings. Find which resume version drove the most callbacks and track weekly activity.',
        },
        {
          icon: Smartphone,
          title: 'iOS Home Screen Widget',
          description:
            'Keep your job search top-of-mind with a native iPhone widget showing your PRO status, credits, and resume count directly on your home screen.',
        },
      ],
    },
  ]

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Powerful Features
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to{' '}
              <span className="text-gradient">Beat ATS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From instant ATS scoring to pipeline management, Hirefy covers
              every step of your job search
            </p>
          </motion.div>

          {/* Features Grid by Category */}
          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <div key={category.label}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${category.badgeColor}`}>
                    {category.label}
                  </span>
                  <div className="flex-1 h-px bg-gray-100" />
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: catIndex * 0.15 + index * 0.1,
                        ease: 'easeOut',
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.2 },
                      }}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: catIndex * 0.15 + index * 0.1 + 0.2,
                          type: 'spring',
                        }}
                        className="bg-gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all"
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="#download"
              className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Try It Free — No Login Needed
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
