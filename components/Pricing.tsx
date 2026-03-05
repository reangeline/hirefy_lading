'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Zap, Crown, Sparkles } from 'lucide-react'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out Hirefy',
      icon: Sparkles,
      features: [
        '1 resume analysis',
        'Basic ATS score',
        'Format check',
        'General recommendations',
        'Community support',
      ],
      cta: 'Get Started Free',
      popular: false,
      gradient: 'from-gray-400 to-gray-600',
    },
    {
      name: 'Pro Monthly',
      price: '$9.99',
      period: 'per month',
      description: 'For active job seekers',
      icon: Zap,
      features: [
        'Unlimited resume analyses',
        'Advanced ATS optimization',
        'Keyword suggestions',
        'Industry-specific tips',
        'Before/after comparisons',
        'Track changes over time',
        'LinkedIn profile optimization',
        'Priority email support',
        'Resume templates',
      ],
      cta: 'Start Free Trial',
      popular: true,
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      name: 'Pro Yearly',
      price: '$79.99',
      period: 'per year',
      savings: 'Save 33%',
      description: 'Best value for serious professionals',
      icon: Crown,
      features: [
        'Everything in Monthly',
        '2 months FREE',
        'Career coaching tips',
        'Interview prep resources',
        'LinkedIn profile optimization',
        'Cover letter templates',
        'Job search tracker',
        'Lifetime updates',
      ],
      cta: 'Get Best Deal',
      popular: false,
      gradient: 'from-yellow-500 to-yellow-700',
    },
  ]

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
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
              className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Simple Pricing
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-gradient">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, upgrade when you're ready. Cancel anytime.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: plan.popular ? 1.05 : 1.03,
                  y: -10,
                }}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                  plan.popular
                    ? 'border-4 border-primary-500 md:-mt-8'
                    : 'border border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-bold"
                  >
                    ⭐ MOST POPULAR
                  </motion.div>
                )}

                <div
                  className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.2,
                      type: 'spring',
                    }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                    {plan.savings && (
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {plan.savings}
                      </motion.span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#download"
                    className={`block w-full text-center py-4 rounded-full font-bold text-lg mb-8 transition-all ${
                      plan.popular
                        ? 'bg-gradient-primary text-white shadow-lg hover:shadow-2xl glow'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.a>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: index * 0.2 + 0.5 + featureIndex * 0.05,
                        }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full">
              <span className="text-2xl">✓</span>
              <span className="font-semibold text-green-800">
                30-Day Money-Back Guarantee • Cancel Anytime
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
