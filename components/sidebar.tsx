"use client"

import type React from "react"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, ExternalLink, BookOpen, Briefcase } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Gigs", href: "#gigs" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  { icon: Briefcase, href: "https://fiverr.com", label: "Fiverr" },
  { icon: BookOpen, href: "#blog", label: "Blog" },
  { icon: ExternalLink, href: "https://upwork.com", label: "Upwork" },
]

export function Sidebar() {
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
    <aside className="fixed left-0 top-0 h-screen w-48 bg-foreground/5 border-r border-border p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-8 pb-8 border-b border-border/30">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
          <span className="text-primary-foreground font-bold text-lg">SN</span>
        </div>
        <h1 className="text-lg font-bold text-foreground">Sarkar Nayan</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="pt-8 border-t border-border/30">
        <div className="flex flex-wrap gap-2 mb-8">
          {socialLinks.map((social, i) => {
            const Icon = social.icon
            return (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors text-foreground/60 hover:text-foreground cursor-pointer"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>

        {/* Contact Info */}
        <div className="text-xs text-foreground/60 space-y-3">
          <div>
            <p className="text-foreground/40 mb-1">Email</p>
            <a
              href="mailto:contact@example.com"
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
            >
              contact@example.com
            </a>
          </div>
          <div>
            <p className="text-foreground/40 mb-1">Phone</p>
            <a href="tel:+1234567890" className="text-foreground hover:text-accent transition-colors cursor-pointer">
              +1 234 567 890
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-xs text-foreground/40">
          <p>Copyright © 2025</p>
          <p>All Rights Reserved.</p>
        </div>

        {/* Links */}
        <div className="mt-4 text-xs space-y-1">
          <a href="#" className="text-foreground/50 hover:text-foreground block transition-colors cursor-pointer">
            Terms & Conditions
          </a>
          <a href="#" className="text-foreground/50 hover:text-foreground block transition-colors cursor-pointer">
            Privacy Policy
          </a>
        </div>

        {/* Fiverr Button */}
        <button
          onClick={() => window.open("https://fiverr.com", "_blank")}
          className="mt-6 w-full py-2 px-3 bg-foreground/10 hover:bg-foreground/20 text-foreground text-xs font-medium rounded transition-colors cursor-pointer"
        >
          Fiverr
        </button>
      </div>
    </aside>
  )
}
