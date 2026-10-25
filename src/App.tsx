import CompanyCulture from "./pages/companyCulture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component, type ErrorInfo, type ReactNode } from "react";
import i18n from "./locales";
import Home from "./pages/home";
import Collection from "./pages/collection";
import Products from "./pages/products";
import Sustainability from "./pages/sustainability";
import Contacts from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ColorCard from "./pages/colorcard";

// Only catches errors thrown while rendering, so harmless browser warnings
// (e.g. "ResizeObserver loop") no longer replace the whole site.
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-[#b35b28] mb-4">{i18n.t("common.errorTitle")}</h1>
            <p className="text-gray-600 mb-4">{i18n.t("common.errorMessage")}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#b35b28] text-white rounded-lg hover:bg-[#b35b28]/80"
            >
              {i18n.t("common.reload")}
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/yarn" element={<ColorCard />} />
          <Route path="/color-cards" element={<ColorCard />} />
          <Route path="/company-culture" element={<CompanyCulture />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}
