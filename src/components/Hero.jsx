import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// Liste des images de fond avec titres et descriptions
const bgImages = [
  {
    id: 1,
    img: "/images/crea.jpg",
    title: "Développez votre Présence en Ligne",
    description: "Profitez de nos meilleures offres sur le e-commerce.",
  },
  {
    id: 2,
    img: "/images/Design.jpg",
    title: "Design UX/UI Exceptionnel",
    description: "Une expérience utilisateur unique et immersive.",
  },
  {
    id: 3,
    img: "/images/experience.jpg",
    title: "Optimisation SEO & Marketing",
    description: "Boostez votre visibilité sur le web et augmentez vos ventes.",
  },
  {
    id: 4,
    img: "/images/dev.webp",
    title: "Stratégie Digitale et Marketing",
    description: "Boostez votre image de marque avec une stratégie digitale efficace.",
  },
];

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);



  return (
    <section
      className="relative w-full min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[500px]  flex items-center justify-center mt-0 md:mt-6 lg:mt-0"
      aria-label="Section d'Accueil - Hero"
    >
      {/* Swiper avec images en background */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="absolute inset-0 w-full h-full"
      >
        {bgImages.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Image de fond avec effet de zoom progressif */}
            <motion.div
              className="absolute inset-0 w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.img}")` }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Overlay sombre pour meilleure lisibilité */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Texte animé avec effet fluide */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-xs sm:text-sm md:text-lg lg:text-xl mt-2 sm:mt-3 max-w-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {slide.description}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 px-5 mt-4 sm:mt-5 rounded-lg shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
