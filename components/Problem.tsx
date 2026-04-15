'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { XCircle, AlertTriangle, Clock, FileX } from 'lucide-react'

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const problems = [
    {
      icon: FileX,
      title: '75% of Resumes Get Rejected',
      description:
        "Your resume is filtered by ATS software before a human ever sees it. Without an optimized score, your application doesn't exist — no matter how qualified you are.",
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: AlertTriangle,
      title: 'Hidden Formatting Issues',
      description:
        'Tables, columns, images, and creative layouts confuse ATS parsers — making your skills and experience invisible to the systems that matter most.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: XCircle,
      title: 'Generic Resumes Miss the Mark',
      description:
        'Every job posting has specific keywords. Without tailoring your resume to each role, even overqualified candidates get auto-rejected before a human reads their name.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Clock,
      title: 'No System to Track Applications',
      description:
        'You apply to dozens of jobs with no way to track stages, schedule follow-ups, or manage recruiter contacts. Opportunities slip through the cracks without a structured pipeline.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              The Hidden Problem
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Qualified Candidates{' '}
              <span className="text-gradient">Get Rejected</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              It's not about your skills. It's about getting past the robots
              that read your resume first.
            </p>
          </motion.div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`${problem.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  <problem.icon className={`w-8 h-8 ${problem.color}`} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Callout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-primary text-white p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundImage:
                  'radial-gradient(circle, transparent 20%, white 20%, white 80%, transparent 80%)',
                backgroundSize: '50px 50px',
              }}
            />
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-6xl md:text-7xl font-bold mb-4"
              >
                98%
              </motion.div>
              <p className="text-xl md:text-2xl font-semibold mb-2">
                of Fortune 500 companies use ATS
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                That means your resume needs to be optimized for robots before
                it ever reaches a human recruiter
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
