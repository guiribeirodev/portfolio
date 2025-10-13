import { BlogHeader } from "@/components/blog-header"
import { BlogCard } from "@/components/blog-card"
import { Sidebar } from "@/components/sidebar"
import { getAllPosts, type BlogPost } from "@/lib/blog-data"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:ml-64 p-8">
        <div className="max-w-4xl mx-auto">

      <BlogHeader 
        title="Blog" 
        description="Compartilhando conhecimentos sobre desenvolvimento web, tecnologia e programação." 
      />
    
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Nenhum post encontrado. Volte em breve para novos conteúdos!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard 
              key={post.slug} 
              post={{
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                date: post.date,
                readTime: post.readTime,
                author: post.author,
                tags: post.tags,
                coverImage: post.coverImage
              }} 
            />
          ))}
        </div>
      )}
        </div>
      </main>
    </div>
  )
}
