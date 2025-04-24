import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import TwitterLogo from '../assets/twitter.svg';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fungsi untuk menangani scroll smooth
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        
        // Jika targetId adalah "home", scroll ke atas halaman
        if (targetId === "home") {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        } else {
        // Untuk target lain, scroll ke elemen dengan ID yang sesuai
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Menutup menu mobile jika terbuka
            if (isMenuOpen) {
            setIsMenuOpen(false);
            }
            
            // Melakukan smooth scroll ke elemen target
            targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
        }
    };

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
                    <a 
                    href="#home" 
                    onClick={(e) => handleSmoothScroll(e, 'home')}
                    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                    Home
                    </a>
                    <a 
                    href="#features" 
                    onClick={(e) => handleSmoothScroll(e, 'features')}
                    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                    Fitur
                    </a>
                    <a 
                    href="#testimonials" 
                    onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                    Testimoni
                    </a>
                    <a 
                    href="#pricing" 
                    onClick={(e) => handleSmoothScroll(e, 'pricing')}
                    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                    Harga
                    </a>
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
                <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-full font-medium transition-colors inline-block`}
                >
                    Daftar Sekarang
                </a>
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
                <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, 'home')}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                Home
                </a>
                <a 
                href="#features" 
                onClick={(e) => handleSmoothScroll(e, 'features')}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                Fitur
                </a>
                <a 
                href="#testimonials" 
                onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                Testimoni
                </a>
                <a 
                href="#pricing" 
                onClick={(e) => handleSmoothScroll(e, 'pricing')}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                Harga
                </a>
                <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`mt-4 block w-full text-center ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-full font-medium transition-colors`}
                >
                    Daftar Sekarang
                </a>
            </div>
            </div>
        )}
        </nav>
    );
};

export default Navbar;