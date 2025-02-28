import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Importation des images des témoins
import aliceImg from "../assets/alice.webp";
import jeanImg from "../assets/jean.webp";
import sarahImg from "../assets/sarrah.webp";

// Liste des témoignages avec images
const testimonials = [
  { name: "Alice", text: "Super service ! Mon site web est magnifique.", image: aliceImg },
  { name: "Jean", text: "Une équipe à l'écoute, travail professionnel.", image: jeanImg },
  { name: "Sarah", text: "SEO boosté, mon site apparaît dans les premiers résultats !", image: sarahImg },
];

function Testimonials() {
  return (
    <section className="py-10 sm:py-14 bg-gray-100 dark:bg-gray-300">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        {/* Titre animé */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-blue-500"
          aria-label="Avis de nos clients"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Avis de nos Clients
        </motion.h2>

        {/* Swiper pour témoignages */}
        <Swiper
          spaceBetween={15}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide 
              key={index} 
              className="p-5 sm:p-6 md:p-8 bg-white dark:bg-gray-600 shadow-lg rounded-lg flex flex-col items-center text-center"
            >
              {/* Image du témoin */}
              <motion.img 
                src={testimonial.image}
                alt={`Photo de ${testimonial.name}`}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-md mb-3 sm:mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Témoignage */}
              <blockquote className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg italic px-3 sm:px-6">
                "{testimonial.text}"
              </blockquote>

              {/* Nom du témoin */}
              <cite className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base md:text-lg">
                {testimonial.name}
              </cite>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
