import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Services from "../components/Services";

function ServicesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Titre principal avec animation */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-red-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Services
        </motion.h1>

        {/* Paragraphe de description avec meilleure lisibilité */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-center text-gray-600 dark:text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Découvrez nos services spécialisés en développement web, SEO et design UX/UI, adaptés aux besoins de votre entreprise.
        </motion.p>

        {/* Composant Services */}
        <div className="mt-8">
          <Services />
        </div>
      </div>
    </PageTransition>
  );
}

export default ServicesPage;
