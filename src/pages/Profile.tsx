
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const Profile = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Redirect to="/login" />;
  }

  // Admin Dashboard
  if (user.role === 'admin') {
    const caregivers = [
      { id: 1, name: 'John Caregiver', specialization: 'Basic Care', jobs: 12, rating: 4.8 },
      { id: 2, name: 'Sarah Wilson', specialization: 'Medical Care', jobs: 8, rating: 4.9 },
      { id: 3, name: 'Mike Brown', specialization: 'Dementia Care', jobs: 15, rating: 4.7 }
    ];

    const careseekers = [
      { id: 1, name: 'Mary Careseeker', location: 'Mumbai', activeJobs: 1 },
      { id: 2, name: 'Robert Johnson', location: 'Delhi', activeJobs: 0 },
      { id: 3, name: 'Lisa Davis', location: 'Bangalore', activeJobs: 2 }
    ];

    return (
      <div className="min-h-screen bg-gradient-subtle py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
                <p className="text-muted-foreground">System overview and management</p>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Caregivers */}
              <Card>
                <CardHeader>
                  <CardTitle>Registered Caregivers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {caregivers.map((caregiver) => (
                      <div key={caregiver.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{caregiver.name}</p>
                          <p className="text-sm text-muted-foreground">{caregiver.specialization}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">Jobs: {caregiver.jobs}</p>
                          <Badge variant="outline">★ {caregiver.rating}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Careseekers */}
              <Card>
                <CardHeader>
                  <CardTitle>Registered Careseekers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {careseekers.map((careseeker) => (
                      <div key={careseeker.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{careseeker.name}</p>
                          <p className="text-sm text-muted-foreground">{careseeker.location}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={careseeker.activeJobs > 0 ? "default" : "secondary"}>
                            {careseeker.activeJobs} Active Jobs
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feedback Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Recent Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">Mary Careseeker → John Caregiver</p>
                      <Badge>★★★★★</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Excellent care provided. Very professional and caring."
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">Sarah Wilson → Admin</p>
                      <Badge variant="outline">Suggestion</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Would like more training modules on emergency care."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Caregiver Dashboard
  if (user.role === 'caregiver') {
    const jobsCompleted = 12;
    const currentJobs = 2;
    const certifications = ['Basic Care', 'First Aid'];

    return (
      <div className="min-h-screen bg-gradient-subtle py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{user.name}</CardTitle>
                    <p className="text-muted-foreground">Professional Caregiver • {user.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold text-primary">{jobsCompleted}</p>
                    <p className="text-sm text-muted-foreground">Jobs Completed</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold text-primary">{currentJobs}</p>
                    <p className="text-sm text-muted-foreground">Active Jobs</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold text-primary">4.8</p>
                    <p className="text-sm text-muted-foreground">Rating</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Contact Information</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Location: {user.location}</p>
                    <p>Age: {user.age}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {certifications.map((cert, index) => (
                        <Badge key={index} variant="outline">{cert}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="gradient-primary mr-4">Find New Jobs</Button>
                  <Button variant="outline">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">Mary Johnson</p>
                      <Badge>★★★★★</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Excellent care for my mother. Very professional and caring."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Careseeker Dashboard
  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">{user.name}</CardTitle>
                  <p className="text-muted-foreground">Careseeker • {user.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Contact Information</h3>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Location: {user.location}</p>
                  <p>Age: {user.age}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Care Requirements</h3>
                  <p>Care Type: Basic + Medical</p>
                  <p>Schedule: Monday - Friday</p>
                  <p>Duration: 6 months</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="gradient-primary mr-4">Find Best Caregiver</Button>
                <Button variant="outline">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>

          {/* Care Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Medical History & Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Medical Report.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded 2 days ago</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Prescription.jpg</p>
                    <p className="text-sm text-muted-foreground">Uploaded 1 week ago</p>
                  </div>
                  <Button variant="outline" size="sm">Upload Document</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Name:</strong> Dr. Smith</p>
                  <p><strong>Relation:</strong> Family Doctor</p>
                  <p><strong>Phone:</strong> +91 98765 12345</p>
                  <Button variant="outline" size="sm" className="mt-3">Edit Contact</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feedback Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Give Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Rate your recent caregiver: John Caregiver</p>
                  <div className="flex gap-2 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <Button key={star} variant="outline" size="sm">★</Button>
                    ))}
                  </div>
                  <Button size="sm" className="gradient-primary">Submit Feedback</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
