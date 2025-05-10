"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const CTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl overflow-hidden"
        >
          <div className="relative px-6 py-16 md:p-16 text-white">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"></div>
              <div className="absolute -bottom-20 left-1/3 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to transform your workflow?</h2>
              <p className="text-xl md:text-2xl text-white/80 mb-10">
                Join thousands of teams that use SaaSify to collaborate, manage projects, and deliver results faster
                than ever before.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg">
                  Start Your Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg">
                  Schedule a Demo
                </Button>
              </div>

              <p className="mt-8 text-white/70 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
