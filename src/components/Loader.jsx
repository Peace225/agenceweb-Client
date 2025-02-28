import { motion } from "framer-motion";

const loaderVariants = {
  animate: {
    rotate: [0, 360],
    borderRadius: ["0%", "50%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function Loader() {
  return (
    <motion.div
      className="w-12 h-12 bg-blue-500 dark:bg-yellow-400"
      variants={loaderVariants}
      animate="animate"
    ></motion.div>
  );
}

export default Loader;
