"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Sarkar_Nayan_Resume.pdf"
    link.click()
  }

  const handleBookNow = () => {
    window.open("https://calendly.com", "_blank")
  }

  const handleUpwork = () => {
    window.open("https://upwork.com", "_blank")
  }

  return (
    <section
      id="home"
      className="ml-48 min-h-screen bg-gradient-to-b from-background to-card/50 flex items-center justify-center px-12"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:order-2">
          <div className="relative">
            <div className="w-80 h-80 rounded-lg overflow-hidden border-2 border-border/20 bg-card flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 via-background to-muted/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-accent/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent text-4xl">👨‍💻</span>
                  </div>
                  <p className="text-foreground/40 text-sm">Sarkar Nayan</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-lg blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 lg:order-1">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">Sarkar Nayan</h1>

          <p className="text-lg text-foreground/70 leading-relaxed">
            Highly motivated and detail-oriented Web Developer with a Bachelor's degree in Computer Science and
            Engineering for 4 years. Proficient in PHP, with a deep understanding of the Laravel framework. Seeking to
            leverage my technical skills and passion for web development to provide high-quality, user-centric solutions
            in a challenging role.
          </p>

          {/* Key Stats */}
          <p className="text-foreground/60 text-sm leading-relaxed">
            Committed to producing high-quality, innovative, and scalable code to drive the success of your team and
            projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={handleResumeDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Resume
            </Button>
            <Button onClick={handleBookNow} variant="outline" className="border-border bg-transparent cursor-pointer">
              📅 Book Now
            </Button>
            <Button onClick={handleUpwork} variant="outline" className="border-border bg-transparent cursor-pointer">
              Upwork
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
