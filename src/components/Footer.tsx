import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-primary-foreground">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">ZORERA</h3>
                <p className="text-xs font-medium tracking-wide text-accent">INFRATECH</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Realty Services. Redefined.
            </p>
            <p className="text-sm text-secondary-foreground/70">
              Trusted property advisors in Noida & NCR — from residential homes to premium commercial spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-accent">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/requirements" className="block text-sm hover:text-accent transition-colors">
                File Requirements
              </Link>
              <Link to="/contact" className="block text-sm hover:text-accent transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-accent">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Residential Sales & Purchase</li>
              <li>Commercial Leasing & Sales</li>
              <li>Plots & Land</li>
              <li>Rentals & Tenant Placement</li>
              <li>Property Marketing</li>
              <li>NRI Advisory Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-accent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80">
                  1135, 11th Floor, Astralis Tower, Supernova, Sector 94, Noida – 201303, UP
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <a 
                  href="tel:+919034621905" 
                  className="text-sm hover:text-accent transition-colors"
                >
                  +91 9034621905
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a 
                  href="mailto:info@zorerainfratech.com" 
                  className="text-sm hover:text-accent transition-colors"
                >
                  info@zorerainfratech.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-accent" />
                <p className="text-sm text-secondary-foreground/80">
                  Mon–Sat 10:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 Zorera Infratech. All rights reserved. | Founder: Aaditya Nitesh Pruthi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;