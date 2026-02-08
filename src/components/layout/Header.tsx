"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="section-padding py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="font-serif text-xl font-medium text-foreground hover:text-accent transition-colors"
        >
          Anoushka
        </Link>
        
        <ul className="flex items-center gap-8">
          <li>
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <a 
              href="mailto:hello@anoushka.design" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
