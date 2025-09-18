import { Sidebar } from '@/components/sidebar'
import { ProjectsSection } from '@/components/projects-section'

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <ProjectsSection />
      </main>
    </div>
  )
}