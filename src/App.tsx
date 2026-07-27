import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Collection from "./pages/collection";
import Products from "./pages/products";
import Sustainability from "./pages/sustainability";
import Contacts from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ColorCard from "./pages/colorcard";

function ErrorBoundary({ children, error }: { children: React.ReactNode; error: Error | null }) {
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#b35b28] text-white rounded-lg hover:bg-[#b35b28]/80"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}

export default function App() {
  const [error, setError] = useState<Error | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Handle global errors
    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error);
      setError(new Error(event.message));
      event.preventDefault();
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1b2b3d]">
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-white/30 border-t-orange-400 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary error={error}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/color-cards" element={<ColorCard />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}