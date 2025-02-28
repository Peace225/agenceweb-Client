import { useState, useEffect } from "react";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import Actualite from "../components/Actualite";
import PourquoiNous from "../components/PourquoiNous";
import NotreMission from "../components/NotreMission";
import { motion } from "framer-motion";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

function Accueil() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timerNewsletter = setTimeout(() => {
      setShowNewsletter(true);
    }, 5000);

    const timerWhatsApp = setTimeout(() => {
      setShowWhatsAppPopup(true);
    }, 10000);

    return () => {
      clearTimeout(timerNewsletter);
      clearTimeout(timerWhatsApp);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);
      setFormData({ name: "", email: "" });
    } catch (error) {
      setMessage("Erreur d'inscription. Veuillez réessayer.");
    }
  };

  return (
    <PageTransition>
      <section aria-label="Section d'Accueil - Hero" className="w-full">
        <Hero />
      </section>

      <section aria-label="Actualité" className="w-full py-4 sm:py-8">
        <Actualite />
      </section>

      <section aria-label="Pourquoi Nous" className="w-full py-4 sm:py-8">
        <PourquoiNous />
      </section>

      <section aria-label="Notre mission" className="w-full py-4 sm:py-8">
        <NotreMission />
      </section>

      <section aria-label="Avis de nos clients" className="w-full py-8 sm:py-12">
        <Testimonials />
      </section>

      {/* Popup Newsletter */}
      {showNewsletter && (
        <motion.div
          className="fixed inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm w-full relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowNewsletter(false)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-xl hover:text-red-500"
            >
              <FaTimes />
            </button>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Recevez nos Offres !</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Inscrivez-vous pour recevoir nos meilleures promotions et nouveautés.
            </p>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                className="w-full p-2 mt-3 border rounded dark:bg-gray-700 dark:text-white"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition w-full"
              >
                S'inscrire
              </button>
            </form>
            {message && <p className="text-sm text-green-500 mt-2">{message}</p>}
          </motion.div>
        </motion.div>
      )}

      {/* Popup WhatsApp */}
      {showWhatsAppPopup && (
        <motion.div
          className="fixed bottom-6 right-6 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2 cursor-pointer"
          onClick={() => window.open("https://wa.me/+2250161899759?text=Bonjour, j'aimerais discuter avec vous !", "_blank")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaWhatsapp className="text-lg sm:text-xl" />
          <span>Discuter avec nous</span>
        </motion.div>
      )}
    </PageTransition>
  );
}

export default Accueil;
