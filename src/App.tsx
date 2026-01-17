import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ShippingInfo from "./pages/ShippingInfo";
import ReturnsRefunds from "./pages/ReturnsRefunds";
import LiveArrivalGuarantee from "./pages/LiveArrivalGuarantee";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import FAQ from "./pages/FAQ";
import LearningCenter from "./pages/LearningCenter";
import GuideDetail from "./pages/GuideDetail";
import PlantCare from "./pages/PlantCare";
import PlantCareDetail from "./pages/PlantCareDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:category" element={<Collections />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shipping" element={<ShippingInfo />} />
            <Route path="/returns" element={<ReturnsRefunds />} />
            <Route path="/guarantee" element={<LiveArrivalGuarantee />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/guides" element={<LearningCenter />} />
            <Route path="/guides/:slug" element={<GuideDetail />} />
            <Route path="/plant-care" element={<PlantCare />} />
            <Route path="/plant-care/:slug" element={<PlantCareDetail />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
