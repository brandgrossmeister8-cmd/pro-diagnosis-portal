import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import SpecialistRoute from "@/components/auth/SpecialistRoute";
import Index from "./pages/Index";
import Specialists from "./pages/Specialists";
import Patients from "./pages/Patients";
import Courses from "./pages/Courses";
import FreeCourse from "./pages/FreeCourse";
import AIAnalysis from "./pages/AIAnalysis";
import KnowledgeBase from "./pages/KnowledgeBase";
import ProClub from "./pages/ProClub";
import Experts from "./pages/Experts";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Auth from "./pages/Auth";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            {/* Public pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/experts/:id" element={<Experts />} />

            {/* Patient pages — free access */}
            <Route path="/patients" element={<Patients />} />
            <Route path="/knowledge/patients" element={<KnowledgeBase />} />

            {/* Specialist pages — registration required */}
            <Route path="/specialists" element={<SpecialistRoute><Specialists /></SpecialistRoute>} />
            <Route path="/courses" element={<SpecialistRoute><Courses /></SpecialistRoute>} />
            <Route path="/courses/:id" element={<SpecialistRoute><Courses /></SpecialistRoute>} />
            <Route path="/free-course" element={<SpecialistRoute><FreeCourse /></SpecialistRoute>} />
            <Route path="/ai-analysis" element={<SpecialistRoute><AIAnalysis /></SpecialistRoute>} />
            <Route path="/knowledge/specialists" element={<SpecialistRoute><KnowledgeBase /></SpecialistRoute>} />
            <Route path="/pro-club" element={<SpecialistRoute><ProClub /></SpecialistRoute>} />
            <Route path="/dashboard" element={<SpecialistRoute><Dashboard /></SpecialistRoute>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
