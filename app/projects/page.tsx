import { Sidebar } from '@/components/sidebar'
import { ProjectsSection } from '@/components/projects-section'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      
      <main className="lg:ml-64 overflow-y-auto">
        <ProjectsSection />
      </main>
    </div>
  )
}