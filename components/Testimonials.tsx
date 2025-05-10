"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "SaaSify has transformed how our team collaborates. We've seen a 40% increase in productivity since implementing it across our organization.",
    author: "Sarah Johnson",
    title: "CTO, TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The analytics features alone are worth the investment. We now have insights we never had access to before, helping us make better strategic decisions.",
    author: "Michael Chen",
    title: "Director of Operations, Innovate Inc",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I was skeptical at first, but after the first month, I was convinced. SaaSify is now an essential part of our tech stack that we couldn't live without.",
    author: "Jessica Williams",
    title: "Product Manager, GrowthLabs",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by teams worldwide</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <Quote className="h-10 w-10 text-primary/30 mb-4" />
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonials[current].quote}"
                  </p>

                  <div>
                    <h4 className="text-lg font-bold">{testimonials[current].author}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[current].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === current
                      ? "bg-primary"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
