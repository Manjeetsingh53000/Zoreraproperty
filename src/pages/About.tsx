import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award, Handshake, Clock } from "lucide-react";
import founderImage from "@/assets/founder-photo.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Mission",
      description: "To redefine real estate services by providing transparent, reliable, and personalized property solutions that turn dreams into reality."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Vision", 
      description: "To become the most trusted real estate advisory in NCR, known for integrity, innovation, and exceptional customer experience."
    },
    {
      icon: <Handshake className="w-8 h-8 text-accent" />,
      title: "Values",
      description: "Transparency, integrity, customer-centricity, and excellence in every interaction and transaction we facilitate."
    }
  ];

  const whyChooseUs = [
    "Curated shortlists matched to your budget & location",
    "Transparent advice, zero hidden surprises", 
    "Quick response on WhatsApp and on-ground support",
    "Strong network with top developers across NCR",
    "Documentation & loan assistance under one roof",
    "Expert guidance for NRI clients",
    "Professional property marketing services",
    "End-to-end transaction support"
  ];

  const achievements = [
    { number: "500+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "200+", label: "Properties Sold", icon: <Award className="w-6 h-6" /> },
    { number: "24hrs", label: "Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "5 Years", label: "Experience", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
              About Zorera Infratech
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Realty Services. Redefined.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A professionally driven real-estate advisory focused on quality service and genuine customer satisfaction. We believe real estate is not just "property"; it's a dream.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome to Zorera Infratech — a professionally driven real-estate advisory focused on quality service and genuine customer satisfaction. Founded by Aaditya Nitesh Pruthi, we started with a simple belief: real estate is not just "property"; it's a dream.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team works as facilitators to help every client achieve that dream with transparent guidance, curated options, and end-to-end support — from site visits and negotiations to documentation and loan assistance.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in the heart of Noida's business district at Supernova, we understand the pulse of NCR's real estate market and leverage our expertise to deliver exceptional results for our clients.
              </p>
              
              <Button variant="luxury" size="lg" asChild>
                <a href="/contact">
                  Connect With Our Team
                </a>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img 
                src={founderImage} 
                alt="Aaditya Nitesh Pruthi - Founder of Zorera Infratech" 
                className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on strong principles that guide every interaction and transaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-secondary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-secondary mb-8">
                Why Choose Zorera Infratech?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="luxury" size="lg" asChild>
                  <a href="/requirements">
                    Start Your Property Journey
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg text-secondary-foreground">
              <h3 className="text-2xl font-serif font-semibold text-accent mb-6">
                Our Promise to You
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                "Tell us your requirement & budget — we'll shortlist 3–5 best options in 24 hours."
              </p>
              <p className="text-secondary-foreground/80 mb-6">
                We understand that buying or selling property is one of life's biggest decisions. That's why we're committed to making the process as smooth, transparent, and stress-free as possible.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>24/7 WhatsApp support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>No hidden charges or surprises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Complete documentation assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-accent mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center text-accent">
                  {achievement.icon}
                </div>
                <h3 className="text-4xl font-serif font-bold">{achievement.number}</h3>
                <p className="text-secondary-foreground/80">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-8">
              Meet Our Founder
            </h2>
            
            <Card className="p-8 shadow-elegant">
              <CardContent className="space-y-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-serif font-bold text-primary-foreground">AP</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-secondary mb-2">
                    Aaditya Nitesh Pruthi
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">Founder & CEO</p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  With a vision to transform the real estate experience in NCR, Aaditya founded Zorera Infratech to bridge the gap between property dreams and reality. His commitment to transparency and customer satisfaction drives every aspect of our business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button variant="golden" asChild>
                    <a href="mailto:aadityaniteshpruthi@zorerainfratech.com">
                      Connect with Aaditya
                    </a>
                  </Button>
                  <Button variant="luxury" asChild>
                    <a href="https://wa.me/919034621905">
                      WhatsApp Direct
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;