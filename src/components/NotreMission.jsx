import { motion } from "framer-motion";
import { FaBullseye, FaHandshake, FaChartLine } from "react-icons/fa";

const missionData = [
  {
    icon: <FaBullseye />,
    title: "Créer des Expériences Uniques",
    description:
      "Notre mission est de concevoir des solutions digitales qui captivent, engagent et convertissent vos visiteurs en clients fidèles.",
    color: "bg-blue-500",
  },
  {
    icon: <FaHandshake />,
    title: "Accompagner Nos Clients",
    description:
      "Nous travaillons main dans la main avec nos clients pour comprendre leurs besoins et leur offrir une solution sur mesure et performante.",
    color: "bg-green-500",
  },
  {
    icon: <FaChartLine />,
    title: "Maximiser Votre Visibilité",
    description:
      "Nous utilisons les meilleures stratégies SEO et marketing digital pour assurer à votre site une place en haut des résultats de recherche.",
    color: "bg-purple-500",
  },
];

const NotreMission = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre animé */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-red-500 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Notre Mission : Vous Propulser Vers le Succès 🚀
        </motion.h2>

        {/* Liste des missions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {missionData.map((mission, index) => (
            <motion.div
              key={index}
              className={`p-4 sm:p-6 rounded-lg shadow-lg text-white flex flex-col items-center text-center ${mission.color} cursor-pointer transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Icône animée */}
              <motion.div
                className="text-3xl sm:text-4xl mb-2 sm:mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {mission.icon}
              </motion.div>

              {/* Titre et description */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold">{mission.title}</h3>
              <motion.p
                className="mt-1 sm:mt-2 text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {mission.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotreMission;
