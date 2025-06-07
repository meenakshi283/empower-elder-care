
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Book, Briefcase, Settings, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  
  // Define navigation items based on user role
  const getNavItems = () => {
    const baseItems = [
      { path: '/', label: 'Home', icon: Home },
      { path: '/about', label: 'About', icon: User },
      { path: '/services', label: 'Services', icon: Settings },
    ];

    if (!isAuthenticated) {
      return [
        ...baseItems,
        { path: '/learning', label: 'Learning', icon: Book },
        { path: '/jobs', label: 'Jobs', icon: Briefcase },
        { path: '/login', label: 'Login', icon: LogIn },
      ];
    }

    // Role-based navigation
    if (user?.role === 'caregiver') {
      return [
        ...baseItems,
        { path: '/learning', label: 'Learning', icon: Book },
        { path: '/jobs', label: 'Jobs', icon: Briefcase },
        { path: '/profile', label: 'Profile', icon: User },
      ];
    } else if (user?.role === 'careseeker') {
      return [
        ...baseItems,
        { path: '/profile', label: 'Profile', icon: User },
      ];
    } else if (user?.role === 'admin') {
      return [
        ...baseItems,
        { path: '/learning', label: 'Learning', icon: Book },
        { path: '/jobs', label: 'Jobs', icon: Briefcase },
        { path: '/profile', label: 'Admin Dashboard', icon: User },
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Shatam</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-primary/10 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              
              {isAuthenticated && (
                <Button
                  onClick={logout}
                  variant="ghost"
                  className="flex items-center space-x-2 px-4 py-2 text-muted-foreground hover:text-primary"
                >
                  <LogOut size={18} />
                  <span className="font-medium">Logout</span>
                </Button>
              )}
            </div>

            {/* User Info */}
            {isAuthenticated && (
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground">Welcome,</span>
                <span className="font-medium">{user?.name}</span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full capitalize">
                  {user?.role}
                </span>
              </div>
            )}

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button className="p-2 rounded-lg hover:bg-primary/10">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-primary"></div>
                  <div className="w-full h-0.5 bg-primary"></div>
                  <div className="w-full h-0.5 bg-primary"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              );
            })}
            
            {isAuthenticated && (
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                <LogOut size={18} />
                <span className="font-medium text-sm">Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 md:pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold text-gradient">Shatam</span>
              </div>
              <p className="text-muted-foreground">
                Transforming Elderly Care by Empowering India's Caregivers
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">Services</Link>
                <Link to="/learning" className="block text-muted-foreground hover:text-primary transition-colors">Learning</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Help Center</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Shatam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
