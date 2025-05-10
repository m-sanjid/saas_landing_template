"use client"

import { motion } from "framer-motion"
import { BarChart3, Zap, Shield, Users, Clock, Globe } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with our powerful analytics tools. Track performance and make data-driven decisions.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring your team can work efficiently without delays.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Enterprise Security",
    description: "Rest easy knowing your data is protected with enterprise-grade security and compliance features.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team in real-time, no matter where they are located.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Automation",
    description: "Save time and reduce errors by automating repetitive tasks and workflows.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Support",
    description: "24/7 support from our global team ensures you always have help when you need it.",
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Our comprehensive platform provides all the tools your team needs to collaborate effectively and drive
            results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why choose SaaSify?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                We've built our platform with your success in mind. Here's what sets us apart from the competition:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Intuitive interface that requires minimal training</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Seamless integration with your existing tools</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Customizable workflows that adapt to your processes
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Regular updates with new features based on customer feedback
                  </p>
                </li>
              </ul>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 mix-blend-overlay"></div>
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="SaaSify Dashboard Features"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
