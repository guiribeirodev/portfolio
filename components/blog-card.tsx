import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

interface BlogPostMetadata {
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
  author: string
  tags: string[]
  coverImage?: string
}

interface BlogCardProps {
  post: BlogPostMetadata
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <div className="flex flex-col space-y-2">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
              {post.title}
            </h3>
          </Link>
          <p className="text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}