"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { assetPath } from "@/lib/asset-path"
import { Button } from "@/components/ui/button"
import { Mail, Github, Twitter, Linkedin, FileText, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 
          bg-sidebar border-r border-sidebar-border 
          p-6 flex flex-col overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src={assetPath("/gui.png")} alt="Guilherme Ribeiro" />
            <AvatarFallback>GR</AvatarFallback>
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
                  onClick={closeSidebar}
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
      </aside>
    </>
  )
}
