
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const About = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Senior Caregiver",
      description: "Transformed from a homemaker to a certified caregiver, now supporting 15+ families",
      testimonial: "Shatam gave me the confidence and skills to build a meaningful career while helping others. The training was comprehensive and the platform makes finding work so easy."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Specialized Caregiver",
      description: "Specializes in Alzheimer's care, completed advanced certification program",
      testimonial: "The specialized training helped me understand complex care needs. I now help families navigate difficult times with compassion and expertise."
    },
    {
      id: 3,
      name: "Sunita Devi",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Community Leader",
      description: "Started as a caregiver, now trains others in her community",
      testimonial: "What began as a way to earn income became my passion. Now I help other women in my village become certified caregivers and build better lives."
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About <span className="text-gradient">Shatam</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            We believe that quality elderly care should be accessible to everyone, 
            and that caregiving can be a dignified, well-rewarded profession.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To bridge the gap between families seeking quality elderly care and individuals 
                looking to build meaningful careers as professional caregivers.
              </p>
              <p className="text-lg text-muted-foreground">
                We provide comprehensive training, secure connections, and ongoing support 
                to create a sustainable ecosystem of care that benefits everyone involved.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Caring hands"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real people, real transformations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={caseStudies[currentCase].image}
                      alt={caseStudies[currentCase].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2">{caseStudies[currentCase].name}</h3>
                    <p className="text-primary font-semibold mb-4">{caseStudies[currentCase].role}</p>
                    <p className="text-muted-foreground mb-6">{caseStudies[currentCase].description}</p>
                    
                    <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                      "{caseStudies[currentCase].testimonial}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevCase}
                className="rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCase ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextCase}
                className="rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Compassion</h3>
              <p className="text-muted-foreground">
                Every interaction is guided by empathy and understanding
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in training and care
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="text-muted-foreground">
                We believe in creating opportunities for growth and dignity
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
