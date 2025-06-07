
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'caregiver' | 'careseeker';
  phone?: string;
  location?: string;
  age?: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: { username: string; password: string; role: string }) => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy users for testing
const DUMMY_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@shatam.com',
    username: 'admin',
    password: 'admin123',
    role: 'admin' as const,
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra'
  },
  {
    id: '2',
    name: 'John Caregiver',
    email: 'john.caregiver@shatam.com',
    username: 'caregiver',
    password: 'care123',
    role: 'caregiver' as const,
    phone: '+91 98765 43211',
    location: 'Delhi, India',
    age: '28'
  },
  {
    id: '3',
    name: 'Mary Careseeker',
    email: 'mary.careseeker@shatam.com',
    username: 'careseeker',
    password: 'seek123',
    role: 'careseeker' as const,
    phone: '+91 98765 43212',
    location: 'Bangalore, Karnataka',
    age: '45'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('shatam_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials: { username: string; password: string; role: string }): Promise<boolean> => {
    // Find user in dummy data
    const foundUser = DUMMY_USERS.find(
      u => (u.username === credentials.username || u.email === credentials.username) && 
           u.password === credentials.password && 
           u.role === credentials.role
    );

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        phone: foundUser.phone,
        location: foundUser.location,
        age: foundUser.age
      };
      setUser(userData);
      localStorage.setItem('shatam_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = async (userData: any): Promise<boolean> => {
    // In a real app, this would create a new user in the database
    // For now, we'll just simulate successful signup
    const newUser = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      phone: userData.phone,
      location: userData.location,
      age: userData.age
    };
    setUser(newUser);
    localStorage.setItem('shatam_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shatam_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
