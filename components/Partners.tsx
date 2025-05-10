"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Acme Inc.", logo: "ACME" },
  { name: "Globex", logo: "GLOBEX" },
  { name: "Soylent Corp", logo: "SOYLENT" },
  { name: "Initech", logo: "INITECH" },
  { name: "Umbrella", logo: "UMBRELLA" },
  { name: "Stark Industries", logo: "STARK" },
]

const Partners = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Trusted by industry leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="h-8 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-400 dark:text-gray-600">{partner.logo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
