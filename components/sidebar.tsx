import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mail, Github, Twitter, Linkedin, FileText } from "lucide-react"
import Link from "next/link"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },

  // { name: "Research", href: "#research" },
  // { name: "Papers", href: "#papers" },
  // { name: "CV", href: "#cv" },
]

const socialLinks = [
  { icon: Mail, href: "mailto:guiribeirodev@gmail.com" },
  { icon: Github, href: "https://github.com/guiribeirodev" },
  // { icon: Twitter, href: "https://twitter.com/mariecurie" },
  { icon: Linkedin, href: "https://linkedin.com/in/guiribeirodev" },
  // { icon: FileText, href: "#cv" },
]

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-sidebar border-r border-sidebar-border p-6 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="/gui.png" alt="Guilherme Ribeiro" />
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-semibold text-sidebar-foreground text-center">Guilherme Ribeiro</h2>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                asChild
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-center space-x-2 mt-8">
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="text-sidebar-foreground hover:text-sidebar-accent"
            asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <link.icon className="h-4 w-4" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}
