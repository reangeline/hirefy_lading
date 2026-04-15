'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Upload, Wand2, LayoutDashboard, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Upload & Get Your ATS Score',
      description:
        'Upload your PDF resume and get an instant ATS score with a qualitative label and a numbered improvement checklist. No account needed to see your first result.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      number: '02',
      icon: Wand2,
      title: 'Optimize for the Job',
      description:
        "Select your resume, enter the company and role, then paste the job description. Hirefy's AI tailors every keyword and bullet to that exact posting — with a breakdown of matched vs. missing keywords.",
      color: 'from-primary-500 to-primary-700',
    },
    {
      number: '03',
      icon: LayoutDashboard,
      title: 'Track & Get Coached',
      description:
        "Add applications to your Kanban pipeline and move them through stages. Hirefy's AI coach delivers context-aware next steps at every stage — from follow-up timing to interview prep.",
      color: 'from-primary-600 to-primary-800',
    },
  ]

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block bg-white text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg"
            >
              Simple Process
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started in <span className="text-gradient">3 Easy Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From upload to optimized application pipeline — in minutes
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
                }
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Icon Side */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    {/* Number Background */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                      className="absolute -top-8 -left-8 text-8xl font-bold text-primary-100 z-0"
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon Container */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.3 + 0.3,
                        type: 'spring',
                      }}
                      className={`relative z-10 w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                    >
                      <step.icon className="w-16 h-16 text-white" />
                    </motion.div>

                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} filter blur-xl opacity-50`}
                    />
                  </motion.div>
                </div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
                  className="flex-1"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Arrow Connectors (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { opacity: 0.2, pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: i * 0.5 + 0.5 }}
                className="absolute"
                style={{ top: `${i * 300}px` }}
              >
                <ArrowRight className="w-8 h-8 text-primary-400" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-20"
          >
            <motion.a
              href="#download"
              className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all glow-strong"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Optimizing Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.a>
            <p className="mt-4 text-gray-600">
              No credit card required • Free forever
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
