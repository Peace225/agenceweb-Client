import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Définition des services
const services = [
  {
    title: "Développement Web",
    description: "Création de sites web performants et responsifs.",
    icon: "💻",
    hoverColor: "hover:bg-blue-500",
  },
  {
    title: "SEO & Marketing",
    description: "Optimisation pour moteurs de recherche et publicité en ligne.",
    icon: "📈",
    hoverColor: "hover:bg-green-500",
  },
  {
    title: "Design UX/UI",
    description: "Expérience utilisateur fluide et attractive.",
    icon: "🎨",
    hoverColor: "hover:bg-purple-500",
  },
];

function Services() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription envoyée :", formData);
    setShowNewsletter(false);
  };
 

  return (
    <section className="py-10 sm:py-14 bg-gray-100 dark:bg-gray-400 relative">
      <div className="container mx-auto text-center px-4 sm:px-6">
        {/* Titre animé avec accessibilité */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-red-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Nos Services"
        >
          Nos Services
        </motion.h2>

        {/* Liste des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-4 sm:p-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md flex flex-col items-center transition duration-300 transform hover:scale-105 ${service.hoverColor} hover:text-white w-[95%] sm:w-[90%] md:w-auto mx-auto`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.span>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold">{service.title}</h3>
              <p className="mt-1 text-xs sm:text-sm md:text-base bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Texte "Besoin d'un devis ?" + Bouton WhatsApp flottant */}
      <div className="fixed bottom-24 right-6 bg-white dark:bg-gray-500 p-2 sm:p-3 rounded-lg shadow-md text-gray-800 dark:text-white text-xs sm:text-sm">
        Besoin d'un devis ?
      </div>
      <a
        href="https://wa.me/1234567890?text=Besoin%20d'un%20devis%20?%20Bonjour,%20je%20souhaite%20demander%20un%20devis."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2"
        aria-label="Discuter sur WhatsApp"
      >
        <span className="text-lg">💬</span> WhatsApp
      </a>

      {/* Popup Newsletter avec Formulaire */}
      {showNewsletter && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg text-center max-w-xs sm:max-w-sm w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
              Recevez nos Offres !
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2">
              Inscrivez-vous pour recevoir nos meilleures promotions et nouveautés.
            </p>
            <form onSubmit={handleFormSubmit} className="mt-3 sm:mt-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded dark:bg-gray-700 text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 sm:mt-3 border rounded dark:bg-gray-700 text-white"
                required
              />
              <button
                type="submit"
                className="mt-3 sm:mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition w-full"
              >
                S'inscrire
              </button>
            </form>
            <button
              className="mt-2 text-blue-500 text-xs sm:text-sm underline"
              onClick={() => setShowNewsletter(false)}
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Services;
