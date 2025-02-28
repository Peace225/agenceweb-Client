import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa"; // Icône Code

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Détecte le défilement pour ajouter une ombre au header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header fixé en haut avec ombre au scroll */}
      <header
        className={`fixed top-0 left-0 w-full z-50 p-4 bg-blue-600 text-white transition-shadow ${
          isScrolling ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo avec Icône */}
          <div className="flex items-center space-x-2">
            <FaCode className="text-2xl sm:text-3xl" /> {/* Icône avant le texte */}
            <h1 className="text-lg sm:text-xl font-bold">AGENCE WEB</h1>
          </div>

          {/* Bouton Hamburger (Mobile) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-7 h-7 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 transition-transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          {/* Menu de Navigation (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300 transition">Accueil</Link>
            <Link to="/apropos" className="hover:text-gray-300 transition">A Propos</Link>
            <Link to="/services" className="hover:text-gray-300 transition">Services</Link>
            <Link to="/portfolio" className="hover:text-gray-300 transition">Portfolio</Link>
            <Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Menu Mobile (Fixe et s'affiche sans chevauchement) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
      <div
        className={`fixed top-16 right-4 w-64 bg-blue-700 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          {[
            { name: "Accueil", link: "/" },
            { name: "A Propos", link: "/apropos" },
            { name: "Services", link: "/services" },
            { name: "Portfolio", link: "/portfolio" },
            { name: "FAQ", link: "/faq" },
            { name: "Contact", link: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="block p-3 text-center text-white bg-blue-600 rounded-md transition hover:bg-blue-500 active:bg-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Ajout d'un padding pour éviter le chevauchement du contenu sous le Header */}
      <div className="pt-20"></div>
    </>
  );
}

export default Header;
