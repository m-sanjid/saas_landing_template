"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "You can sign up for our 14-day free trial without providing any payment information. You'll have full access to all features during the trial period. At the end of the trial, you can choose to subscribe to one of our plans or your account will automatically downgrade to the free tier with limited features.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available and we'll prorate your billing. When downgrading, the changes will take effect at the end of your current billing cycle.",
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer:
      "The number of team members you can add depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes, we offer special pricing for non-profit organizations, educational institutions, and open-source projects. Please contact our sales team for more information about our discount programs.",
  },
  {
    question: "How secure is my data on your platform?",
    answer:
      "We take security very seriously. Our platform uses industry-standard encryption for all data, both in transit and at rest. We maintain SOC 2 compliance and undergo regular security audits. Additionally, we offer features like two-factor authentication, single sign-on, and role-based access controls to help you keep your account secure.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include some level of support. The Starter plan includes email support with a 24-hour response time. The Professional plan adds chat support and faster response times. The Enterprise plan includes 24/7 phone support, a dedicated account manager, and guaranteed response times as specified in our SLA.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Have questions? We're here to help.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-4 border-b border-gray-200 dark:border-gray-800 pb-4 ${
                index === 0 ? "border-t pt-4" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-semibold pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
