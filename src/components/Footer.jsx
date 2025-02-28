import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-600 dark:bg-gray-900 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Agence Web. Tous droits réservés.</p>
    </footer>
  );
}



export default Footer