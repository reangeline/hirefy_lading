'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Google',
      image: '👩‍💻',
      rating: 5,
      text: 'Hirefy helped me land my dream job at Google. My ATS score went from 45% to 89% after optimization. Got 5 interview calls in 2 weeks!',
    },
    {
      name: 'Michael Torres',
      role: 'Product Manager',
      company: 'Amazon',
      image: '👨‍💼',
      rating: 5,
      text: 'Game changer! I was applying to dozens of jobs with no response. After using Hirefy, I started getting calls. The keyword suggestions were spot-on.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Salesforce',
      image: '👩‍💼',
      rating: 5,
      text: 'I had no idea my resume formatting was killing my applications. Hirefy fixed everything and explained why. Highly recommended!',
    },
    {
      name: 'David Kim',
      role: 'Data Scientist',
      company: 'Meta',
      image: '👨‍🔬',
      rating: 5,
      text: 'The industry-specific recommendations were incredibly helpful. Went from 10% response rate to 40%. Worth every penny.',
    },
    {
      name: 'Jessica Williams',
      role: 'UX Designer',
      company: 'Adobe',
      image: '👩‍🎨',
      rating: 5,
      text: 'As a designer, I thought my creative resume was great. Turns out ATS hated it. Hirefy helped me balance creativity with ATS compatibility.',
    },
    {
      name: 'Carlos Martinez',
      role: 'Business Analyst',
      company: 'McKinsey',
      image: '👨‍💻',
      rating: 5,
      text: 'Simple, fast, and effective. Got 3 job offers within a month of optimizing my resume. The before/after comparison was eye-opening.',
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
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
              className="inline-block bg-white text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg"
            >
              Success Stories
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Users <span className="text-gradient">Are Saying</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of job seekers who landed their dream jobs with
              Hirefy
            </p>

            {/* Overall Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8 inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">from 10,000+ reviews</span>
            </motion.div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100" />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 bg-gradient-primary text-white p-12 rounded-3xl text-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundImage:
                  'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '50px 50px',
              }}
            />
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-5xl font-bold mb-2"
                >
                  10,000+
                </motion.div>
                <div className="text-white/90">Optimized Resumes</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="text-5xl font-bold mb-2"
                >
                  3x
                </motion.div>
                <div className="text-white/90">More Interviews</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-5xl font-bold mb-2"
                >
                  89%
                </motion.div>
                <div className="text-white/90">ATS Pass Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
