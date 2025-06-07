
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Learning from "./pages/Learning";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <Layout>
                <Index />
              </Layout>
            } />
            <Route path="/about" element={
              <Layout>
                <About />
              </Layout>
            } />
            <Route path="/services" element={
              <Layout>
                <Services />
              </Layout>
            } />
            <Route path="/learning" element={
              <Layout>
                <Learning />
              </Layout>
            } />
            <Route path="/jobs" element={
              <Layout>
                <Jobs />
              </Layout>
            } />
            <Route path="/profile" element={
              <Layout>
                <Profile />
              </Layout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
