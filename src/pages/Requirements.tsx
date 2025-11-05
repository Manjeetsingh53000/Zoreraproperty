import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, FileText, Clock, Users } from "lucide-react";

const Requirements = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    transactionType: "",
    location: "",
    budget: "",
    bedrooms: "",
    requirements: "",
    timeline: "",
    preferences: []
  });

  const propertyTypes = [
    "Residential Flat",
    "Builder Floor",
    "Villa/Independent House", 
    "Commercial Office",
    "Retail Shop",
    "Showroom",
    "Plot - Residential",
    "Plot - Commercial",
    "Warehouse/Industrial"
  ];

  const locations = [
    "Noida",
    "Greater Noida",
    "Noida Expressway",
    "Sector 94 Supernova",
    "Sector 62",
    "Sector 63",
    "Sector 18",
    "Ghaziabad",
    "Faridabad",
    "Gurugram",
    "Delhi"
  ];

  const budgetRanges = [
    "Under ₹50 Lakh",
    "₹50 Lakh - ₹1 Crore",
    "₹1 Crore - ₹2 Crore",
    "₹2 Crore - ₹5 Crore",
    "Above ₹5 Crore"
  ];

  const preferences = [
    "Ready to Move",
    "Under Construction",
    "RERA Approved",
    "Vastu Compliant",
    "Corner Unit",
    "High Floor",
    "Park Facing",
    "Metro Connectivity",
    "School Nearby",
    "Hospital Nearby",
    "Shopping Mall Nearby",
    "Investment Purpose"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const message = `Property Requirement from ${formData.name}%0A%0AContact: ${formData.phone}%0AEmail: ${formData.email}%0A%0AProperty Type: ${formData.propertyType}%0ATransaction: ${formData.transactionType}%0ALocation: ${formData.location}%0ABudget: ${formData.budget}%0ABedrooms: ${formData.bedrooms}%0ATimeline: ${formData.timeline}%0A%0ARequirements: ${formData.requirements}%0A%0APreferences: ${formData.preferences.join(', ')}`;
    
    window.open(`https://wa.me/919034621905?text=${message}`, '_blank');
  };

  const process = [
    {
      step: "1",
      title: "Submit Requirements",
      description: "Fill out the form with your property requirements and preferences"
    },
    {
      step: "2", 
      title: "Quick Response",
      description: "Our team will contact you within 24 hours with curated options"
    },
    {
      step: "3",
      title: "Site Visits",
      description: "We arrange site visits for shortlisted properties at your convenience"
    },
    {
      step: "4",
      title: "Documentation",
      description: "Complete assistance with legal documentation and loan processing"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
            File Your Requirements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tell us your requirement & budget — we'll shortlist 3–5 best options in 24 hours
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>24 Hour Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Verified Properties</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-secondary">
                  Property Requirement Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
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

                  {/* Property Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Property Type *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          {propertyTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Transaction Type *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, transactionType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Buy or Rent" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buy">Buy</SelectItem>
                          <SelectItem value="rent">Rent</SelectItem>
                          <SelectItem value="sell">Sell</SelectItem>
                          <SelectItem value="lease">Lease</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Location *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>{location}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Budget Range *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Bedrooms (if applicable)</Label>
                      <Select onValueChange={(value) => setFormData({...formData, bedrooms: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 BHK</SelectItem>
                          <SelectItem value="2">2 BHK</SelectItem>
                          <SelectItem value="3">3 BHK</SelectItem>
                          <SelectItem value="4">4 BHK</SelectItem>
                          <SelectItem value="5+">5+ BHK</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1-month">Within 1 Month</SelectItem>
                          <SelectItem value="3-months">Within 3 Months</SelectItem>
                          <SelectItem value="6-months">Within 6 Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="space-y-4">
                    <Label>Preferences (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {preferences.map((preference) => (
                        <div key={preference} className="flex items-center space-x-2">
                          <Checkbox 
                            id={preference}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData, 
                                  preferences: [...formData.preferences, preference]
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  preferences: formData.preferences.filter(p => p !== preference)
                                });
                              }
                            }}
                          />
                          <Label htmlFor={preference} className="text-sm">
                            {preference}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Additional Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Please specify any other requirements, preferences, or questions..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="luxury" size="lg" className="w-full">
                    Submit Requirements via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Process */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-secondary flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-accent" />
                  Our Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {process.map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-secondary text-secondary-foreground shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-accent flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Our property experts are available to help you with your requirements.
                </p>
                
                <div className="space-y-3">
                  <Button variant="golden" size="sm" className="w-full" asChild>
                    <a href="tel:+919034621905">Call +91 9034621905</a>
                  </Button>
                  <Button variant="golden" size="sm" className="w-full" asChild>
                    <a href="https://wa.me/919034621905">WhatsApp Chat</a>
                  </Button>
                </div>
                
                <div className="text-center pt-4 border-t border-secondary-foreground/20">
                  <div className="flex items-center justify-center space-x-2 text-accent">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon-Sat 10AM-7PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;