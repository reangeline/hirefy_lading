'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is an ATS and why does it matter?',
      answer:
        'ATS (Applicant Tracking System) is software used by 98% of Fortune 500 companies to automatically filter resumes. It scans for keywords, formatting, and other criteria before a human ever sees your resume. If your resume isn\'t ATS-optimized, it gets rejected automatically - no matter how qualified you are.',
    },
    {
      question: 'How does Hirefy work?',
      answer:
        'Simply upload your resume and we\'ll analyze it using the same AI technology that recruiters use. In 30 seconds, you\'ll get a detailed report showing your ATS compatibility score, missing keywords, formatting issues, and specific recommendations to improve your resume. You can then download your optimized resume.',
    },
    {
      question: 'Is the free version really free?',
      answer:
        'Yes! You get one free resume analysis with no credit card required. This includes your ATS score, basic formatting check, and general recommendations. To get unlimited analyses, keyword optimization, and advanced features, upgrade to Pro.',
    },
    {
      question: 'What file formats do you support?',
      answer:
        'We support PDF, Word (.docx), and plain text formats. For best results, we recommend uploading a PDF or Word document. Our AI can read and analyze any standard resume format.',
    },
    {
      question: 'Will Hirefy change my resume content?',
      answer:
        'No, we never change your content without your permission. Hirefy provides suggestions and recommendations, but you have full control over what changes to make. We help you understand what to improve and why, but the final decisions are always yours.',
    },
    {
      question: 'How is this different from other resume tools?',
      answer:
        'Unlike template-based tools, Hirefy uses real ATS technology to analyze your resume the same way recruiters do. We don\'t just check spelling - we analyze keyword density, formatting compatibility, ATS parsing, and provide industry-specific recommendations. Plus, we explain why each change matters.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Absolutely! You can cancel your subscription at any time with just one click. No questions asked, no hassle. If you cancel within 30 days, you\'ll get a full refund.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with Hirefy for any reason, just email us within 30 days and we\'ll refund your payment immediately.',
    },
    {
      question: 'Is my resume data secure?',
      answer:
        'Absolutely. We take your privacy seriously. Your resume is encrypted and stored securely. We never share your data with third parties, and you can delete your account and all data at any time. Your resume belongs to you.',
    },
    {
      question: 'Will this work for my industry?',
      answer:
        'Yes! Hirefy works for all industries and roles - from tech to healthcare, finance to education. Our AI is trained on millions of resumes across all sectors and provides industry-specific recommendations based on your field.',
    },
  ]

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 md:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              Got Questions?
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Hirefy
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-primary-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-primary-600" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Reach out to our support team.
            </p>
            <motion.a
              href="mailto:support@hirefy.careers"
              className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
