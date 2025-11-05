import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Fill Your Requirement", href: "/requirements" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-gold">
              <span className="text-2xl font-serif font-bold text-primary-foreground">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-secondary">ZORERA</h1>
              <p className="text-xs text-primary font-medium tracking-wide">INFRATECH</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+919034621905"
              className="hidden md:flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 9034621905</span>
            </a>
            
            <Button 
              variant="default" 
              size="sm"
              className="hidden sm:inline-flex bg-gradient-primary hover:shadow-gold transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/919034621905" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-soft-gold/30 rounded-md ${
                    isActive(item.href) ? "text-primary bg-soft-gold/20" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 border-t border-border">
                <a
                  href="tel:+919034621905"
                  className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+91 9034621905</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;