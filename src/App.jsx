import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Accueil from "./pages/Accueil";
import ServicesPage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import Apropos from "./pages/Apropos";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./index.css/";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        {loading ? (
          <Loader />
        ) : (
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </AnimatePresence>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
