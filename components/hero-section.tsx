import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mail, Github, Twitter, Linkedin, FileText } from "lucide-react"

const socialLinks = [
  { icon: Mail, href: "mailto:guiribeirodev@gmail.com" },
  { icon: Github, href: "https://github.com/guiribeirodev" },
  // { icon: Twitter, href: "https://twitter.com/mariecurie" },
  { icon: Linkedin, href: "https://linkedin.com/in/guiribeirodev" },
  // { icon: FileText, href: "#cv" },
]

export function HeroSection() {
  return (
    <section id="home" className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Bem vindo! Eu sou o <span className="text-accent">Guilherme Ribeiro</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">Desenvolvedor</p>
          <p className="text-foreground leading-relaxed max-w-2xl">
            Mais do que um escritor de código, um entregador de soluções!
          </p>

          <div className="flex space-x-2 mt-6">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="ml-8">
          <Avatar className="w-48 h-48">
            <AvatarImage src="/gui.png" alt="Guilherme Ribeiro" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  )
}
