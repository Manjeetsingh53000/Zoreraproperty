import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building, MapPin, Key, Camera, Globe, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const primaryServices = [
    {
      icon: <Home className="w-12 h-12 text-accent" />,
      title: "Residential Sales & Purchase",
      description: "Find your dream home with our extensive collection of flats, builder floors, and villas across NCR.",
      features: ["Verified Properties", "RERA Compliance", "Price Negotiation", "Documentation"],
      areas: ["1-4 BHK Flats", "Builder Floors", "Independent Villas", "Luxury Residences"]
    },
    {
      icon: <Building className="w-12 h-12 text-accent" />,
      title: "Commercial Leasing & Sales",
      description: "Premium commercial spaces for your business growth - offices, shops, and showrooms in prime locations.",
      features: ["Prime Locations", "Ready Possession", "Flexible Terms", "Legal Support"],
      areas: ["Corporate Offices", "Retail Shops", "Showrooms", "Co-working Spaces"]
    },
    {
      icon: <MapPin className="w-12 h-12 text-accent" />,
      title: "Plots & Land",
      description: "Investment opportunities in residential and commercial plots with excellent growth potential.",
      features: ["Clear Titles", "Development Ready", "Investment Advice", "Future Planning"],
      areas: ["Residential Plots", "Commercial Land", "Farmhouse Plots", "Industrial Land"]
    },
    {
      icon: <Key className="w-12 h-12 text-accent" />,
      title: "Rentals & Tenant Placement",
      description: "Hassle-free rental solutions for both property owners and tenants with complete assistance.",
      features: ["Tenant Verification", "Rental Management", "Legal Agreements", "Maintenance Support"],
      areas: ["Residential Rentals", "Commercial Leasing", "Furnished Properties", "PG Accommodation"]
    }
  ];

  const additionalServices = [
    {
      icon: <Camera className="w-8 h-8 text-accent" />,
      title: "Property Marketing",
      description: "Professional photography, videos, and 360° virtual tours to showcase your property.",
      features: ["HD Photography", "Drone Videos", "Virtual Tours", "Marketing Materials"]
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "NRI Advisory Services",
      description: "Specialized services for NRI clients including investment advice and transaction facilitation.",
      features: ["Investment Guidance", "Legal Compliance", "Remote Assistance", "Documentation"]
    }
  ];

  const operationalAreas = [
    "Noida", "Greater Noida", "Noida Expressway", "Sector 94 Supernova", 
    "Ghaziabad", "Faridabad", "Delhi NCR", "Gurugram"
  ];

  const whyChooseUs = [
    "Curated property shortlists matched to your budget",
    "Transparent pricing with no hidden charges",
    "24-hour response time on WhatsApp",
    "Strong network with top developers",
    "End-to-end documentation assistance",
    "Loan facilitation and advisory"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive real estate solutions tailored to your needs across Noida, Greater Noida, and Delhi-NCR
            </p>
            <p className="text-lg text-primary font-semibold mb-8">
              "Tell us your requirement & budget — we'll shortlist 3–5 best options in 24 hours."
            </p>
            
            <Button variant="luxury" size="lg" asChild>
              <a href="/requirements">
                Get Started Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
              Primary Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert real estate services designed to meet all your property needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {primaryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-soft-gold rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-secondary mb-3">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-secondary mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary mb-3">Property Types</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.areas.map((area, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300" asChild>
                    <a href="/requirements">
                      Get Quote <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Value-added services to enhance your real estate experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-soft-gold rounded-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-secondary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
              Areas We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Extensive coverage across NCR's prime real estate markets
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {operationalAreas.map((area, index) => (
                <Badge key={index} variant="outline" className="text-lg px-4 py-2 border-accent text-accent">
                  {area}
                </Badge>
              ))}
            </div>
            
            <p className="text-lg text-primary font-medium">
              <strong>Special Focus:</strong> Sector 94 Supernova, Noida Expressway, and premium NCR locations
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-accent mb-8">
                Why Choose Zorera Infratech?
              </h2>
              
              <div className="space-y-4">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-foreground/90">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold mb-6">
                  Ready to Get Started?
                </h3>
                <p className="mb-8 text-primary-foreground/90">
                  Share your requirements and let our experts find the perfect property for you.
                </p>
                
                <div className="space-y-4">
                  <Button variant="golden" size="lg" className="w-full" asChild>
                    <a href="/requirements">
                      File Your Requirements
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <a href="https://wa.me/919034621905">
                      WhatsApp: +91 9034621905
                    </a>
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/80">
                    <strong>Office Hours:</strong> Mon–Sat 10:00 AM – 7:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;