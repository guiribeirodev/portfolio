import { Sidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroSection } from "@/components/hero-section"
import { ResearchAreas } from "@/components/research-areas"
import { Publications } from "@/components/publications"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-8">
            {/* <ThemeToggle /> */}
          </div>

          <HeroSection />
          <ResearchAreas />
          {/* <Publications /> */}

          <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
            <p className="mb-2">Copyright © 2025 - All right reserved by Marie Curie</p>
            <p className="text-sm">
              Built with <span className="text-accent">Astro Academia</span> ❤️ by Matteo Barbero
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
