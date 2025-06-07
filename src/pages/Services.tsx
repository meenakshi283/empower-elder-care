
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, UserCheck, Shield } from 'lucide-react';

const Services = () => {
  const steps = [
    {
      number: "01",
      title: "Post Your Need",
      description: "Careseeker creates a detailed profile of care requirements, location, and timing preferences",
      icon: "📝"
    },
    {
      number: "02", 
      title: "Get Matched",
      description: "Our platform automatically matches you with qualified caregivers in your area",
      icon: "🤝"
    },
    {
      number: "03",
      title: "Caregiver Visits", 
      description: "Selected caregiver visits your location and begins providing care",
      icon: "🏠"
    },
    {
      number: "04",
      title: "OTP Verification",
      description: "Caregiver uses OTP to confirm attendance and start the care session",
      icon: "🔐"
    }
  ];

  const serviceTypes = [
    {
      title: "Basic Care",
      description: "Daily assistance with meals, medication reminders, and companionship",
      features: ["Meal preparation", "Medication assistance", "Light housekeeping", "Companionship"],
      duration: "2-4 hours daily"
    },
    {
      title: "Medical Care", 
      description: "Specialized care for specific medical conditions and post-surgery recovery",
      features: ["Medical monitoring", "Therapy assistance", "Wound care", "Health reporting"],
      duration: "4-8 hours daily"
    },
    {
      title: "24/7 Care",
      description: "Round-the-clock comprehensive care for those who need constant supervision",
      features: ["Continuous monitoring", "Emergency response", "Personal care", "Family communication"],
      duration: "Full-time live-in"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
            Professional caregiver matching service with fully automated communication 
            and no human middleman required
          </p>
          <Link to="/login" className="animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 gradient-primary">
              Find a Caregiver
              <Search className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple, secure, and automated process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-2">{step.number}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Care Options</h2>
            <p className="text-xl text-muted-foreground">
              Flexible care solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-primary">{service.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Caregivers</h3>
              <p className="text-muted-foreground">
                All caregivers are background-checked and certified through our training programs
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Automated</h3>
              <p className="text-muted-foreground">
                OTP verification ensures attendance tracking and secure communication
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Matching</h3>
              <p className="text-muted-foreground">
                AI-powered matching based on location, specialization, and availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families who trust Shatam for quality elderly care
          </p>
          <Link to="/login">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Find Your Caregiver Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
