import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaWhatsapp } from "react-icons/fa";

// Données des FAQ
const faqData = [
  { 
    question: "Quels services proposez-vous ?", 
    answer: "Nous créons des applications web & mobiles, optimisons le SEO et faisons du design UX/UI." 
  },
  { 
    question: "Comment fonctionne votre agence ?", 
    answer: "Nous analysons vos besoins, développons votre projet et assurons un suivi technique après lancement." 
  },
  { 
    question: "Quels sont vos délais de livraison ?", 
    answer: "Tout dépend de la complexité du projet, mais nous garantissons des délais optimisés et respectés." 
  },
  { 
    question: "Pourquoi choisir votre agence web ?", 
    answer: "Nous offrons des solutions innovantes et personnalisées avec un excellent service client." 
  },
  { 
    question: "Faites-vous du marketing digital ?", 
    answer: "Oui, nous créons des stratégies de marketing digital performantes pour booster votre visibilité en ligne." 
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-blue-600">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        {/* Titre de la section */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Foire Aux Questions (FAQ)
        </motion.h2>

        {/* Liste des FAQ */}
        <div className="max-w-md sm:max-w-2xl mx-auto space-y-3 sm:space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-5 bg-white dark:bg-blue-800 text-gray-900 dark:text-white rounded-lg shadow-md cursor-pointer transition duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === index}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">{item.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-600 dark:text-gray-300" />
                ) : (
                  <FaChevronDown className="text-gray-600 dark:text-gray-300" />
                )}
              </div>

              {/* Réponse (accordéon) */}
              {openIndex === index && (
                <motion.p
                  className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bouton WhatsApp Flottant */}
      <a
        href="https://wa.me/1234567890?text=Bonjour, j'aimerais discuter avec vous !"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2 text-sm sm:text-base"
      >
        <FaWhatsapp className="text-lg sm:text-xl" />
        Discuter avec nous
      </a>
    </section>
  );
}

export default Faq;
