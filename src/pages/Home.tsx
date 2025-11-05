import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";
import aboutImage from "@/assets/about-team.jpg";

const Home = () => {
  const services = [
    {
      title: "Residential Sales & Purchase",
      description: "Flats, Builder Floors, Villas",
      icon: "🏠"
    },
    {
      title: "Commercial Leasing & Sales", 
      description: "Shops, Offices, Showrooms",
      icon: "🏢"
    },
    {
      title: "Plots & Land",
      description: "Residential / Commercial / Investment",
      icon: "🏗️"
    },
    {
      title: "Rentals & Tenant Placement",
      description: "Residential & Commercial",
      icon: "🔑"
    }
  ];

  const whyChooseUs = [
    "Curated shortlists matched to your budget & location",
    "Transparent advice, zero hidden surprises", 
    "Quick response on WhatsApp and on-ground support",
    "Strong network with top developers across NCR",
    "Documentation & loan assistance under one roof"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury real estate in Noida" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6">
            ZORERA INFRATECH
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium mb-8 tracking-wide">
            Realty Services. Redefined.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Trusted property advisors in Noida & NCR — from residential homes to premium commercial spaces. Fast response on WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/919034621905" target="_blank" rel="noopener noreferrer">
                Get Started on WhatsApp
              </a>
            </Button>
            <Button 
              variant="golden" 
              size="lg"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="/requirements">
                File Your Requirements
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs across Noida, Greater Noida, and Delhi-NCR
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-serif font-semibold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-primary font-medium mb-6">
              "Tell us your requirement & budget — we'll shortlist 3–5 best options in 24 hours."
            </p>
            <Button variant="luxury" size="lg" asChild>
              <a href="/requirements">
                Start Your Property Search
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Welcome to Zorera Infratech — a professionally driven real-estate advisory focused on quality service and genuine customer satisfaction. We believe real estate is not just "property"; it's a dream. Our team works as facilitators to help every client achieve that dream with transparent guidance, curated options, and end-to-end support.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  Why Choose Us
                </h3>
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="luxury" size="lg" asChild>
                <a href="/about">
                  Learn More About Us
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Zorera Infratech team consultation" 
                className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Connect with our expert team today and let us help you discover the perfect property in Noida & NCR.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="golden" 
              size="lg"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+919034621905">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9034621905
              </a>
            </Button>
            <Button 
              variant="golden" 
              size="lg"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:info@zorerainfratech.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;