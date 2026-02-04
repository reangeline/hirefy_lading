'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Zap,
  Target,
  FileText,
  Award,
  BarChart3,
  Lightbulb,
} from 'lucide-react'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Zap,
      title: 'Instant ATS Score',
      description:
        'Get your resume analyzed in 30 seconds. Know exactly how ATS systems see your resume.',
    },
    {
      icon: Target,
      title: 'Keyword Optimization',
      description:
        'AI identifies missing keywords from job descriptions and suggests exactly where to add them.',
    },
    {
      icon: FileText,
      title: 'Format Fixer',
      description:
        'Automatically detect and fix formatting issues that cause ATS rejection.',
    },
    {
      icon: Award,
      title: 'Industry-Specific Tips',
      description:
        'Get tailored recommendations for your specific industry and role.',
    },
    {
      icon: BarChart3,
      title: 'Track Your Progress',
      description:
        'See your improvements over time and track which optimizations work best.',
    },
    {
      icon: Lightbulb,
      title: 'AI Suggestions',
      description:
        'Get smart suggestions on how to improve bullet points and descriptions.',
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
              Hirefy gives you all the tools to optimize your resume and land
              more interviews
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
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
                    delay: index * 0.1 + 0.2,
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
              Try All Features Free
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
