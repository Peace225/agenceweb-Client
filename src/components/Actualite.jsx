import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dev from "../assets/dev.webp";
import image from "../assets/entrepreneug.webp";
import image2 from "../assets/roi.webp";
import image1 from "../assets/Seo.webp";

// Données des actualités
const newsData = [
  {
    title: "L'importance du SEO en 2024",
    description: "Le référencement naturel est plus important que jamais pour apparaître en première page sur Google.",
    image: image1,
  },
  {
    title: "Tendances du Marketing Digital",
    description: "Découvrez les stratégies numériques qui fonctionnent le mieux cette année.",
    image: image,
  },
  {
    title: "Publicité sur Internet : ROI élevé",
    description: "Comment optimiser vos campagnes publicitaires pour obtenir un meilleur retour sur investissement.",
    image: image2,
  },
  {
    title: "Développement Web : Les tendances 2024",
    description: "Découvrez les nouvelles technologies et frameworks qui révolutionnent le développement web.",
    image: dev,
  }
];

const Actualite = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setArticles(newsData);
    }, 1000);
  }, []);

  return (
    <section className="py-8 sm:py-12 bg-white dark:bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre animé */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-red-500  mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dernières Actualités du Numérique
        </motion.h2>

        {/* Liste des actualités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md cursor-pointer transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Image de l'actualité */}
              <motion.img 
                src={article.image}
                alt={article.title}
                className="w-full h-36 sm:h-40 object-cover rounded-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />

              {/* Titre et description */}
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-white mt-3">{article.title}</h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-2">{article.description}</p>

              {/* Lien Lire Plus avec animation */}
              <motion.button
                onClick={() => setSelectedArticle(article)}
                className="mt-3 text-red-500 hover:text-red-600 font-semibold text-sm sm:text-base"
                whileHover={{ scale: 1.05, x: 3 }}
                transition={{ duration: 0.3 }}
              >
                Lire plus →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedArticle && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg max-w-xs sm:max-w-lg w-full relative max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Bouton de fermeture */}
            <button 
              onClick={() => setSelectedArticle(null)} 
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-lg sm:text-xl hover:text-red-500"
            >
              ✖
            </button>

            {/* Image de l'article */}
            <img 
              src={selectedArticle.image} 
              alt={selectedArticle.title} 
              className="w-full h-40 sm:h-48 object-cover rounded-md"
            />

            {/* Titre et description */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mt-4">
              {selectedArticle.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-2">
              {selectedArticle.description}
            </p>

            {/* Bouton de fermeture */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition w-full"
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Actualite;
