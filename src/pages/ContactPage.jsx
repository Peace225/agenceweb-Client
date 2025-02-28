import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto py-10">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 dark:text-blue-500 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contactez-nous
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-900 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-6 bg-gray-100 dark:bg-blue-500 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            onChange={handleChange}
            value={formData.name}
            className="w-full p-2 mb-2 border rounded dark:bg-blue-700 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="w-full p-2 mb-2 border rounded dark:bg-blue-700 dark:text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            onChange={handleChange}
            value={formData.message}
            className="w-full p-2 mb-2 border rounded dark:bg-blue-700 dark:text-white"
            required
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white  p-2 rounded dark:bg-white">
            Envoyer
          </button>
          {status && <p className="mt-2 text-center text-white">{status}</p>}
        </motion.form>
      </div>
    </PageTransition>
  );
}

export default ContactPage;
