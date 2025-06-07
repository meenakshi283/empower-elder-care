
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Book, User, ArrowRight } from 'lucide-react';

const Learning = () => {
  const courses = [
    {
      level: "Basic",
      title: "Fundamentals of Elderly Care",
      description: "Essential skills for providing compassionate and safe elderly care",
      duration: "4 weeks",
      modules: 8,
      progress: 0,
      skills: ["Basic health monitoring", "Safety protocols", "Communication", "Personal hygiene assistance"],
      color: "bg-green-500"
    },
    {
      level: "Medium", 
      title: "Specialized Care Techniques",
      description: "Advanced care for specific conditions and medical needs",
      duration: "6 weeks",
      modules: 12,
      progress: 0,
      skills: ["Medication management", "Mobility assistance", "Dementia care", "Emergency response"],
      color: "bg-yellow-500"
    },
    {
      level: "Advanced",
      title: "Professional Caregiver Mastery", 
      description: "Expert-level skills and leadership in elderly care",
      duration: "8 weeks",
      modules: 16,
      progress: 0,
      skills: ["Medical equipment", "Family counseling", "Care planning", "Team leadership"],
      color: "bg-red-500"
    }
  ];

  const benefits = [
    {
      icon: "🎓",
      title: "Free Certification",
      description: "Complete training programs at no cost with official certification"
    },
    {
      icon: "💼",
      title: "Job Placement",
      description: "Direct access to job opportunities upon course completion"
    },
    {
      icon: "📱",
      title: "Mobile Learning",
      description: "Learn at your own pace with our mobile-friendly platform"
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Instructors",
      description: "Learn from healthcare professionals and experienced caregivers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Free Certified Training</span> for Aspiring Caregivers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
            Build a meaningful career in elderly care with our comprehensive, 
            professionally designed training programs
          </p>
          <Link to="/login" className="animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 gradient-primary">
              Start Learning Today
              <Book className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Levels</h2>
            <p className="text-xl text-muted-foreground">
              Progressive learning path from beginner to expert
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${course.color} text-white`}>
                      {course.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {course.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.modules} modules • Interactive content • Practical exercises
                    </p>
                    <Button className="w-full" variant={course.progress === 0 ? "default" : "outline"}>
                      {course.progress === 0 ? "Start Course" : "Continue Learning"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Train with Shatam?</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to start a successful caregiving career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Register & Assess</h3>
                <p className="text-muted-foreground">
                  Create your profile and take a skills assessment to determine your starting level
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Learn & Practice</h3>
                <p className="text-muted-foreground">
                  Progress through interactive modules with video lessons, quizzes, and practical exercises
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Get Certified & Work</h3>
                <p className="text-muted-foreground">
                  Complete your certification and get matched with families needing your services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Caregiving Journey Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of caregivers who have transformed their lives through our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <User className="mr-2 h-5 w-5" />
                Register as Caregiver
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-purple-600">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learning;
