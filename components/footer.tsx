"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Here you can add email submission logic
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer id="contact" className="ml-48 py-16 px-12 bg-card/30 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
            <p className="text-foreground/60 mb-4">Have a project or question? I'd love to hear from you.</p>
            <div className="space-y-2 text-sm">
              <p className="text-foreground/60">
                📧{" "}
                <a
                  href="mailto:contact@example.com"
                  className="text-accent hover:text-accent/80 cursor-pointer transition-colors"
                >
                  contact@example.com
                </a>
              </p>
              <p className="text-foreground/60">
                📞{" "}
                <a href="tel:+1234567890" className="text-accent hover:text-accent/80 cursor-pointer transition-colors">
                  +1 234 567 890
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, "#home")}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#service"
                  onClick={(e) => handleSmoothScroll(e, "#service")}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  onClick={(e) => handleSmoothScroll(e, "#portfolio")}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, "#about")}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-background border border-border rounded text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-background border border-border rounded text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-background border border-border rounded text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded transition-colors cursor-pointer text-sm"
              >
                {submitted ? "✓ Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-accent transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors cursor-pointer">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-accent transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Follow Me</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors cursor-pointer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors cursor-pointer"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-foreground/40 text-sm">
          <p>© 2025 Sarkar Nayan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
