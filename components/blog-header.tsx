interface BlogHeaderProps {
  title: string
  description: string
}

export function BlogHeader({ title, description }: BlogHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  )
}