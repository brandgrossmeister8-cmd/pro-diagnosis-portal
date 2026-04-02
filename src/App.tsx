import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/free-course" element={<FreeCourse />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
          <Route path="/knowledge/:audience" element={<KnowledgeBase />} />
          <Route path="/pro-club" element={<ProClub />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/experts/:id" element={<Experts />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
