import { motion } from "framer-motion";

const gradientVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

function AnimatedBackground() {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500"
      style={{ backgroundSize: "200% 200%" }}
      variants={gradientVariants}
      animate="animate"
    />
  );
}

export default AnimatedBackground;
