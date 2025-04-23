import React from 'react';

const Hero = ({ isDarkMode }) => {
    
    return (
        <div className={`py-12 md:py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Bercerita. <span className="text-blue-500">Berbagi.</span> Bersenang-senang.
                </h1>
                <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                X adalah tempat terbaik untuk terhubung dengan apa yang terjadi di dunia secara real-time. Dari berita terkini hingga percakapan yang sedang tren, ikuti topik dan akun yang Anda minati.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-3 rounded-full font-medium text-lg transition-colors`}>
                    Mulai Sekarang
                </button>
                <button className={`${isDarkMode ? 'bg-grey-800 hover:bg-grey-700 border border-grey-600' : 'bg-white hover:bg-gray-100 border border-gray-300'} px-6 py-3 rounded-full font-medium text-lg transition-colors`}>
                    Pelajari Lebih Lanjut
                </button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl p-4 max-w-md`}>
                    <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">X</div>
                    <div className="ml-3">
                        <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>X Official</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>@x • 2m</p>
                    </div>
                    </div>
                    <p className={`${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
                    Selamat datang di X, tempat di mana pembicaraan terjadi. Bergabunglah dengan komunitas global kami sekarang!
                    </p>
                    {/* Gambar Konten */}
                    <div className={`h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center mb-4`}>
                    <img
                        src="/src/assets/Konten.jpg"
                        alt="Konten Gambar"
                        className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex justify-between">
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'} cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>42</span>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-500 hover:text-green-500'} cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>128</span>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'} cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>365</span>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'} cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span>Share</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };
    export default Hero;