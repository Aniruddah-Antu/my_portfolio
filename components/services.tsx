"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useState } from "react"

const services = [
  {
    title: "Web Design",
    description:
      "Website design refers to the process of creating and designing the visual layout, user interface, and overall aesthetic appearance of a website. Front-end development.",
    icon: "🎨",
    details: "Professional UI/UX design with modern aesthetics and user-centered approach.",
  },
  {
    title: "WordPress Development",
    description:
      "WordPress development refers to the creation of websites, themes, and plugins using the WordPress content management system. Its flexibility, user-friendly, and extensive plugin.",
    icon: "📘",
    details: "Custom WordPress themes, plugins, and CMS solutions for your business.",
  },
  {
    title: "Web Development",
    description:
      "Web development is the process of creating websites or web applications. Front-end development and Back-end development design is user-friendly, and aligned.",
    icon: "💻",
    details: "Full-stack development with PHP, Laravel, React, and modern frameworks.",
  },
  {
    title: "UI UX Design",
    description:
      "UI UX Design combines various disciplines to create visually appealing, efficient, and user-friendly interfaces for digital products, enhancing user experiences.",
    icon: "✨",
    details: "Creating intuitive and beautiful interfaces for web and mobile applications.",
  },
]

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="service" className="ml-48 py-24 px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Service</h2>

        {/* Timeline Layout */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="flex gap-8 items-stretch">
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-accent border-4 border-background cursor-pointer hover:scale-125 transition-transform"></div>
                {index !== services.length - 1 && <div className="w-0.5 h-32 bg-border/30"></div>}
              </div>

              {/* Content */}
              <Card
                className="flex-1 bg-card/50 border-border/30 hover:bg-card/70 transition-all cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60 leading-relaxed mb-4">{service.description}</p>
                  {expandedIndex === index && (
                    <div className="mt-4 pt-4 border-t border-border/20 text-foreground/70 text-sm">
                      {service.details}
                    </div>
                  )}
                  <button
                    className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {expandedIndex === index ? "Show Less" : "Read More..."}
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
