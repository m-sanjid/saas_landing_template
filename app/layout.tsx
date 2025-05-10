import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaaSify - Streamline Your Workflow",
  description:
    "The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster than ever before.",
  openGraph: {
    title: "SaaSify - Streamline Your Workflow",
    description:
      "The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster than ever before.",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
