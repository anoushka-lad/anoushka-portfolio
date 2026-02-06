import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="section-padding py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="font-serif text-xl font-medium text-foreground hover:text-accent transition-colors"
        >
          Anoushka
        </Link>
        
        <ul className="flex items-center gap-8">
          <li>
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
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
