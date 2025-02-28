module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // 📌 Vérifie bien les chemins
  theme: {
    extend: {
      screens: {
        xs: "480px", // 📌 Ajout d'un breakpoint pour mobile petit écran
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
