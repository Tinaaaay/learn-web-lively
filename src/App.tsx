import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import WhatIsWebsite from "./pages/WhatIsWebsite";
import HowToCreate from "./pages/HowToCreate";
import DesignTips from "./pages/DesignTips";
import Technologies from "./pages/Technologies";
import Credits from "./pages/Credits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-is-website" element={<WhatIsWebsite />} />
            <Route path="/how-to-create" element={<HowToCreate />} />
            <Route path="/design-tips" element={<DesignTips />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
