import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images depuis `src/assets/images/`
import Ecommerce from "../assets/Ecommerce.jpg";
import Landing from "../assets/landing.jpg";
import Booster from "../assets/Booster.jpg";
import Application from "../assets/Application.jpg";

// Liste des projets
const ImageList = [
  {
    id: 1,
    img: Ecommerce,
    title: "E-Commerce",
    description: "Une plateforme de vente en ligne optimisée.",
  },
  {
    id: 2,
    img: Landing,
    title: "Landing Page",
    description: "Une page d'atterrissage moderne et efficace.",
  },
  {
    id: 3,
    img: Booster,
    title: "SEO Booster",
    description: "Améliorez votre référencement pour un meilleur classement.",
  },
  {
    id: 4,
    img: Application,
    title: "Application Mobile",
    description: "Des applications performantes pour iOS et Android.",
  },
];

function PortfolioPage() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Configuration du Slider
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription envoyée :", formData);
    setShowNewsletter(false);
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex justify-center items-center duration-200  pt-[-10px] sm:pt-4 mt-[-2px] sm:mt-[-10]">
      {/* Hero Section - Remontée et ajustée */}
      <div className="container pb-6 sm:pb-0  sm:mt-[-30px]">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div
                className="flex flex-col justify-center items-center min-h-[350px] sm:min-h-[450px] text-center px-4 sm:px-10"
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Texte Centré */}
                <motion.div
                  className="bg-black bg-opacity-50 p-5 rounded-lg shadow-lg w-full max-w-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400">
                    {data.title}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-md text-gray-300 mt-2">
                    {data.description}
                  </p>
                  <div className="mt-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 px-5 mt-5 rounded-lg shadow-md transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    En savoir plus
                  </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Bouton WhatsApp */}
        <a
          href="https://wa.me/+2250161899759?text=Besoin%20d'un%20devis%20?%20Bonjour,%20je%20souhaite%20demander%20un%20devis."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2"
        >
          <span className="text-lg">💬</span> WhatsApp
        </a>

        {/* Popup Newsletter */}
        {showNewsletter && (
          <motion.div
            className="fixed top-10 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg text-center max-w-xs sm:max-w-sm w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm sm:text-lg font-bold text-gray-800 dark:text-white">
                Recevez nos Offres !
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2">
                Inscrivez-vous pour recevoir nos meilleures promotions et
                nouveautés.
              </p>
              <form onSubmit={handleFormSubmit} className="mt-3 sm:mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 sm:mt-3 border rounded dark:bg-gray-700 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition w-full"
                >
                  S'inscrire
                </button>
              </form>
              <button
                className="mt-2 text-gray-500 text-xs sm:text-sm underline"
                onClick={() => setShowNewsletter(false)}
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default PortfolioPage;
