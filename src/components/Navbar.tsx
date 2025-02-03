import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-8 w-8" />
            <span className="font-bold text-xl">EcoCollecte</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-green-200 transition">Accueil</Link>
            <Link to="/partner" className="hover:text-green-200 transition">Espace Partenaire</Link>
            <Link to="/blog" className="hover:text-green-200 transition">Blog</Link>
            <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-100 transition">
              Connexion
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-green-200 transition">Accueil</Link>
              <Link to="/partner" className="hover:text-green-200 transition">Espace Partenaire</Link>
              <Link to="/blog" className="hover:text-green-200 transition">Blog</Link>
              <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-100 transition">
                Connexion
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;