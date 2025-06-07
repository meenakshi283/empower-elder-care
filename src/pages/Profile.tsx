
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">John Doe</CardTitle>
                  <p className="text-muted-foreground">Careseeker • Mumbai</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Contact Information</h3>
                  <p>Email: john.doe@email.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Location: Mumbai, Maharashtra</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Care Preferences</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
