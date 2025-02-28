import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaLaptopCode, FaHeadset } from "react-icons/fa";

// Liste des raisons avec icônes, descriptions et couleurs
const reasons = [
  {
    icon: <FaRocket />,
    title: "Performance et Innovation",
    description: "Nous utilisons les dernières technologies pour créer des sites web rapides, modernes et efficaces.",
    color: "bg-blue-500",
  },
  {
    icon: <FaLightbulb />,
    title: "Stratégie Digitale Gagnante",
    description: "Nous analysons et optimisons votre présence en ligne pour un maximum de conversions.",
    color: "bg-green-500",
  },
  {
    icon: <FaLaptopCode />,
    title: "Développement sur Mesure",
    description: "Nos solutions sont adaptées à vos besoins spécifiques pour un site web unique et performant.",
    color: "bg-purple-500",
  },
  {
    icon: <FaHeadset />,
    title: "Support et Accompagnement",
    description: "Notre équipe est disponible pour vous aider à chaque étape de votre projet.",
    color: "bg-yellow-500",
  }
];

const PourquoiNous = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre animé */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-blue-500 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pourquoi Choisir Notre Agence Web ?
        </motion.h2>

        {/* Liste des avantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`p-5 sm:p-6 rounded-lg shadow-lg text-white flex flex-col items-center text-center ${reason.color} cursor-pointer transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Icône avec animation */}
              <motion.div
                className="text-3xl sm:text-4xl mb-2 sm:mb-3"
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                {reason.icon}
              </motion.div>

              {/* Titre et description */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold">{reason.title}</h3>
              <motion.p
                className="mt-1 sm:mt-2 text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {reason.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PourquoiNous;
