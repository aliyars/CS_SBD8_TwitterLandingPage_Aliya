import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import TwitterLogo from '../assets/twitter.svg';

    const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <img 
                    className="h-8 w-auto" 
                    src={TwitterLogo}
                    alt="X Logo" 
                />
                </div>
                <span className={`ml-3 text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        Halo, selamat datang di X!
                    </span>
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#features" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Fitur</a>
                    <a href="#testimonials" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Testimoni</a>
                    <a href="#pricing" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Harga</a>
                </div>
                </div>
            </div>
            <div className="flex items-center">
                <button
                onClick={toggleDarkMode}
                className={`mr-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
                aria-label="Toggle dark mode"
                >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div className="hidden md:block">
                <button className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-full font-medium transition-colors`}>Daftar Sekarang</button>
                </div>
                <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 rounded-md ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                </div>
            </div>
            </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <a href="#features" className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Fitur</a>
                <a href="#testimonials" className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Testimoni</a>
                <a href="#pricing" className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Harga</a>
                <button className={`mt-4 w-full ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-full font-medium transition-colors`}>Daftar Sekarang</button>
            </div>
            </div>
        )}
        </nav>
    );
    };

    export default Navbar;