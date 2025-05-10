"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

const Pricing = () => {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      price: annual ? 29 : 39,
      description: "Perfect for individuals and small teams just getting started.",
      features: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support", "2 projects"],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: annual ? 79 : 99,
      description: "Ideal for growing teams that need more power and flexibility.",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "20GB storage",
        "Priority email & chat support",
        "Unlimited projects",
        "Custom integrations",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: annual ? 199 : 249,
      description: "For large organizations with complex needs and dedicated support.",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Unlimited storage",
        "24/7 phone, email & chat support",
        "Unlimited projects",
        "Advanced security",
        "Custom onboarding",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium ${!annual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            >
              Monthly
            </span>
            <Switch checked={annual} onCheckedChange={setAnnual} className="data-[state=checked]:bg-primary" />
            <span
              className={`text-sm font-medium ${annual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            >
              Annual <span className="text-primary text-xs font-bold">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary shadow-xl dark:border-primary"
                  : "border border-gray-200 dark:border-gray-800 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  RECOMMENDED
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 h-12">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                  {annual && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Billed annually</p>}
                </div>

                <Button
                  className={`w-full mb-8 ${plan.popular ? "" : "bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Need a custom plan for your specific needs?</p>
          <Button variant="outline" size="lg">
            Contact our Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
