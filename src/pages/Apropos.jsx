import { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/dev.webp";

function Apropos() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Titre animé */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A Propos de Nous
        </motion.h2>

        {/* Contenu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Texte avec animation */}
          <motion.div
            className="space-y-5 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Nous sommes une agence web spécialisée dans la création de sites internet modernes,
              l'optimisation SEO et le développement d'applications web et mobiles.
              Notre mission est de transformer vos idées en solutions numériques performantes.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Forts d'une équipe de développeurs, designers et experts en marketing digital,
              nous accompagnons les entreprises dans leur transformation digitale
              en proposant des solutions sur-mesure adaptées à leurs besoins.
            </p>

            {/* Bouton animé avec ouverture du popup */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg"
              onClick={() => setIsPopupOpen(true)}
            >
              En savoir plus
            </motion.button>
          </motion.div>

          {/* Image avec animation */}
          <motion.div
            className="w-full flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image}
              alt="Agence Web"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* POPUP "En savoir plus" */}
      {isPopupOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Bouton de fermeture */}
            <button 
              onClick={() => setIsPopupOpen(false)} 
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-xl hover:text-red-500"
            >
              ✖
            </button>

            {/* Contenu du popup */}
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              En savoir plus sur notre Agence
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Nous aidons les entreprises à se démarquer grâce à des solutions digitales innovantes.
              Notre approche allie créativité, expertise technique et stratégie marketing.
            </p>

            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Bouton WhatsApp Flottant */}
      <a
        href="https://wa.me/+2250161899759?text=Bonjour, j'aimerais discuter avec vous !"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2 text-sm sm:text-base"
      >
        💬 Discuter avec nous
      </a>
    </section>
  );
}

export default Apropos;
