
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../contexts/AuthContext';

const Jobs = () => {
  const { user, isAuthenticated } = useAuth();

  const jobs = [
    {
      id: 1,
      title: "Senior Care - Daytime",
      location: "Mumbai, Bandra",
      type: "Part-time",
      duration: "4 hours daily",
      requirements: "Basic care certification",
      pay: "₹15,000/month",
      urgent: true,
      description: "Assistance with daily activities for elderly gentleman. Light medical monitoring required."
    },
    {
      id: 2,
      title: "Post-Surgery Care",
      location: "Delhi, CP",
      type: "Short-term",
      duration: "2 weeks",
      requirements: "Medical care certification",
      pay: "₹25,000/month",
      urgent: false,
      description: "Post-operative care for knee replacement surgery. Physiotherapy assistance needed."
    },
    {
      id: 3,
      title: "Dementia Care",
      location: "Bangalore, Koramangala",
      type: "Full-time",
      duration: "Long-term",
      requirements: "Dementia care specialization",
      pay: "₹30,000/month",
      urgent: false,
      description: "24/7 care for dementia patient. Experience with behavioral management preferred."
    }
  ];

  // If user is not authenticated or not a caregiver, show informational view
  if (!isAuthenticated || user?.role !== 'caregiver') {
    return (
      <div className="min-h-screen bg-gradient-subtle py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Caregiving Opportunities</h1>
            <p className="text-muted-foreground">
              {!isAuthenticated 
                ? "Sign up as a caregiver to access job opportunities" 
                : "Available for caregivers only"}
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <p className="text-muted-foreground">{job.location}</p>
                    </div>
                    <div className="text-right">
                      {job.urgent && <Badge variant="destructive" className="mb-2">Urgent</Badge>}
                      <p className="font-semibold text-primary">{job.pay}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p><strong>Type:</strong> {job.type}</p>
                      <p><strong>Duration:</strong> {job.duration}</p>
                    </div>
                    <div>
                      <p><strong>Requirements:</strong> {job.requirements}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button disabled variant="outline">
                      {!isAuthenticated ? "Login Required" : "Caregiver Access Only"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Caregiver view with interactive job acceptance
  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
          <p className="text-muted-foreground">Find caregiving opportunities near you</p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                  <div className="text-right">
                    {job.urgent && <Badge variant="destructive" className="mb-2">Urgent</Badge>}
                    <p className="font-semibold text-primary">{job.pay}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p><strong>Type:</strong> {job.type}</p>
                    <p><strong>Duration:</strong> {job.duration}</p>
                  </div>
                  <div>
                    <p><strong>Requirements:</strong> {job.requirements}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="gradient-primary">Accept Job</Button>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
