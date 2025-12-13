import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <div className="overflow-y-auto h-screen">
          <Hero />
          <Services />
          <Footer />
        </div>
      </main>
    </div>
  )
}
