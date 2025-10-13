import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog-post"
import { Sidebar } from "@/components/sidebar"
import { getPostBySlug, getAllPosts } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <BlogPost post={post} />
        </div>
      </main>
    </div>
  )
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}
