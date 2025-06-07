
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, signup } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
    role: 'careseeker'
  });

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'careseeker',
    location: '',
    age: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(loginForm);
      
      if (success) {
        toast({
          title: "Login Successful",
          description: `Welcome back! You're logged in as a ${loginForm.role}.`,
        });
        
        // Redirect based on role
        switch (loginForm.role) {
          case 'admin':
            navigate('/profile');
            break;
          case 'caregiver':
            navigate('/jobs');
            break;
          default:
            navigate('/profile');
        }
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please check your username, password, and role.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Login Error",
        description: "An error occurred during login. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await signup(signupForm);
      
      if (success) {
        toast({
          title: "Account Created",
          description: `Welcome to Shatam! Your ${signupForm.role} account has been created.`,
        });
        navigate('/profile');
      } else {
        toast({
          title: "Signup Failed",
          description: "An error occurred during registration. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Signup Error",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <span className="text-3xl font-bold text-gradient">Shatam</span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your account or create a new one
          </p>
        </div>

        {/* Demo Credentials */}
        <Card className="mb-6 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-blue-800 mb-3">Demo Credentials</h3>
            <div className="text-sm text-blue-700 space-y-1">
              <p><strong>Admin:</strong> admin / admin123</p>
              <p><strong>Caregiver:</strong> caregiver / care123</p>
              <p><strong>Careseeker:</strong> careseeker / seek123</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl animate-scale-in">
          <CardHeader>
            <CardTitle className="text-center">Account Access</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username/Email</Label>
                    <Input
                      id="username"
                      type="text"
                      value={loginForm.username}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                      placeholder="Enter your username or email"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>I am a:</Label>
                    <RadioGroup 
                      value={loginForm.role} 
                      onValueChange={(value) => setLoginForm(prev => ({ ...prev, role: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="careseeker" id="careseeker-login" />
                        <Label htmlFor="careseeker-login">Careseeker (Family)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="caregiver" id="caregiver-login" />
                        <Label htmlFor="caregiver-login">Caregiver</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="admin" id="admin-login" />
                        <Label htmlFor="admin-login">Admin</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-primary" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={signupForm.age}
                        onChange={(e) => setSignupForm(prev => ({ ...prev, age: e.target.value }))}
                        placeholder="Age"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={signupForm.phone}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={signupForm.location}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="City, State"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        placeholder="Confirm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>I want to:</Label>
                    <RadioGroup 
                      value={signupForm.role} 
                      onValueChange={(value) => setSignupForm(prev => ({ ...prev, role: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="careseeker" id="careseeker-signup" />
                        <Label htmlFor="careseeker-signup">Find a caregiver for my family</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="caregiver" id="caregiver-signup" />
                        <Label htmlFor="caregiver-signup">Become a professional caregiver</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-primary" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            By signing up, you agree to our{' '}
            <Link to="#" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
