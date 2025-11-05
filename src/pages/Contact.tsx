import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Contact Inquiry from ${formData.name}%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919034621905?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Office Address",
      details: [
        "1135, 11th Floor, Astralis Tower",
        "Supernova, Sector 94",
        "Noida – 201303, UP"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Phone Numbers",
      details: [
        "+91 9034621905 (Call/WhatsApp)",
        "Available for immediate assistance"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Addresses",
      details: [
        "info@zorerainfratech.com",
        "aadityaniteshpruthi@zorerainfratech.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Office Hours",
      details: [
        "Monday – Saturday: 10:00 AM – 7:00 PM",
        "Sunday: By appointment only"
      ]
    }
  ];

  const quickActions = [
    {
      title: "WhatsApp Chat",
      description: "Get instant response on WhatsApp",
      action: "Chat Now",
      link: "https://wa.me/919034621905",
      variant: "luxury" as const
    },
    {
      title: "Schedule a Call",
      description: "Book a consultation call",
      action: "Call +91 9034621905",
      link: "tel:+919034621905",
      variant: "golden" as const
    },
    {
      title: "File Requirements",
      description: "Submit your property requirements",
      action: "Get Started",
      link: "/requirements",
      variant: "hero" as const
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to find your dream property? Get in touch with our expert team for personalized assistance.
            </p>
            <p className="text-lg text-primary font-semibold">
              Fast response guaranteed within 24 hours!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-secondary mb-2">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {action.description}
                  </p>
                  <Button 
                    variant={action.variant} 
                    className="w-full"
                    asChild
                  >
                    <a href={action.link} target={action.link.startsWith('http') ? '_blank' : undefined}>
                      {action.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-secondary flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2 text-accent" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="e.g., Property inquiry, Investment advice, etc."
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your requirements or questions in detail..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-secondary mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help you with all your real estate needs. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-soft-gold rounded-lg flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-secondary mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Founder Contact */}
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-accent mb-4">
                    Connect with Our Founder
                  </h3>
                  <div className="space-y-3">
                    <p className="text-secondary-foreground/90">
                      <strong>Aaditya Nitesh Pruthi</strong><br />
                      Founder & CEO
                    </p>
                    <p className="text-sm text-secondary-foreground/80">
                      Direct access to leadership for important decisions and premium services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <Button variant="golden" size="sm" asChild>
                        <a href="mailto:aadityaniteshpruthi@zorerainfratech.com">
                          Email Aaditya
                        </a>
                      </Button>
                      <Button variant="golden" size="sm" asChild>
                        <a href="https://wa.me/919034621905">
                          WhatsApp Direct
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Noida's business district
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-elegant">
            <div className="bg-muted h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-secondary mb-2">
                  Astralis Tower, Supernova
                </h3>
                <p className="text-muted-foreground mb-4">
                  1135, 11th Floor, Sector 94, Noida – 201303, UP
                </p>
                <Button variant="luxury" asChild>
                  <a 
                    href="https://maps.google.com/?q=Astralis+Tower+Supernova+Sector+94+Noida" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              <strong>Landmark:</strong> Near Supernova Mall, easily accessible via Noida Expressway
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;