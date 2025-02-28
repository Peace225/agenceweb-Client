import { motion } from "framer-motion";

// Définition des animations pour la transition de page
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

function PageTransition({ children }) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex flex-col justify-start pt-4 sm:pt-8 md:pt-12 px-4 sm:px-6"
    >
      <section className="w-full max-w-6xl mx-auto">{children}</section>
    </motion.main>
  );
}

export default PageTransition;
