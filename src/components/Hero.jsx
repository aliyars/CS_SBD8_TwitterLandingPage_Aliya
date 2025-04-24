import React, { useState, useRef } from 'react';

// Using SVG content directly instead of image paths
const TwitterLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
    );

    const Hero = ({ isDarkMode }) => {
    // State untuk mengontrol tweet yang aktif
    const [currentTweet, setCurrentTweet] = useState(0);
    
    // State untuk menyimpan input teks di tweet ke-4
    const [tweetText, setTweetText] = useState('');
    
    // State untuk menyimpan gambar yang diupload
    const [uploadedImage, setUploadedImage] = useState(null);
    
    // State baru untuk status pengiriman tweet
    const [isTweetSent, setIsTweetSent] = useState(false);
    
    // Ref untuk input file
    const fileInputRef = useRef(null);

    // Data tweets (untuk konten statis)
    const [tweets, setTweets] = useState([
        {
        id: 1,
        author: "X Official",
        handle: "@x",
        time: "2m",
        content: "Selamat datang di X, tempat di mana pembicaraan terjadi. Bergabunglah dengan komunitas global kami sekarang!",
        comments: 42,
        retweets: 128,
        likes: 365,
        liked: false,
        retweeted: false,
        image: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" className="w-full h-full">
            <rect width="800" height="400" fill="#1DA1F2" />
            <text x="400" y="200" fontFamily="Arial" fontSize="36" fill="white" textAnchor="middle">Welcome to X</text>
            <path d="M400,100 C500,100 500,300 400,300 C300,300 300,100 400,100" fill="white" opacity="0.2" />
            <circle cx="400" cy="200" r="50" fill="white" />
            <path d="M385,180 L415,220 M415,180 L385,220" stroke="white" strokeWidth="5" />
            </svg>
        )
        },
        {
        id: 2,
        author: "Tech News",
        handle: "@technews",
        time: "5m",
        content: "Fitur baru telah hadir! Nikmati pengalaman berbagi yang lebih baik dengan update terbaru kami.",
        comments: 63,
        retweets: 235,
        likes: 512,
        liked: false,
        retweeted: false,
        image: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" className="w-full h-full">
            <rect width="800" height="400" fill="#34B7F1" />
            <rect x="100" y="75" width="600" height="250" rx="20" fill="white" />
            <circle cx="200" cy="150" r="40" fill="#FF6B6B" />
            <rect x="300" y="130" width="350" height="15" rx="5" fill="#E0E0E0" />
            <rect x="300" y="160" width="250" height="15" rx="5" fill="#E0E0E0" />
            <rect x="150" y="240" width="500" height="50" rx="10" fill="#F2F2F2" />
            <text x="400" y="275" fontFamily="Arial" fontSize="24" fill="#555" textAnchor="middle">New Features Available!</text>
            </svg>
        )
        },
        {
        id: 3,
        author: "Travel Enthusiast",
        handle: "@travelgram",
        time: "12m",
        content: "Destinasi terbaik untuk liburan tahun ini! Cek rekomendasi tempat wisata kami yang wajib dikunjungi.",
        comments: 87,
        retweets: 156,
        likes: 729,
        liked: false,
        retweeted: false,
        image: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" className="w-full h-full">
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#1E88E5" />
            </linearGradient>
            <rect width="800" height="400" fill="url(#skyGradient)" />
            <rect x="0" y="250" width="800" height="150" fill="#4CAF50" />
            <circle cx="650" cy="80" r="60" fill="#FFEB3B" />
            <path d="M300,250 L200,150 L100,250" fill="#795548" />
            <path d="M500,250 L400,100 L300,250" fill="#795548" />
            <path d="M700,250 L600,170 L500,250" fill="#795548" />
            <rect x="450" y="180" width="100" height="70" fill="#E57373" />
            <rect x="475" y="200" width="25" height="50" fill="#5D4037" />
            <path d="M0,250 C100,200 200,300 300,250 C400,200 500,300 600,250 C700,200 800,300 800,250 L800,400 L0,400 Z" fill="#82B1FF" opacity="0.3" />
            </svg>
        )
        }
    ]);

    // Fungsi untuk tweet selanjutnya
    const nextTweet = () => {
        setCurrentTweet((prev) => (prev === 3 ? 0 : prev + 1)); // 3 karena punya 3 tweets + 1 custom
        // Reset status tweet saat berpindah
        setIsTweetSent(false);
    };

    // Fungsi untuk tweet sebelumnya
    const prevTweet = () => {
        setCurrentTweet((prev) => (prev === 0 ? 3 : prev - 1)); // 3 karena punya 3 tweets + 1 custom
        // Reset status tweet saat berpindah
        setIsTweetSent(false);
    };

    // Fungsi untuk menangani upload gambar
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg")) {
        const reader = new FileReader();
        
        reader.onload = () => {
            setUploadedImage(reader.result);
        };
        
        reader.readAsDataURL(file);
        } else {
        alert("Harap upload file gambar (PNG, JPEG, atau JPG)");
        }
    };

    // Fungsi untuk memicu klik pada input file yang tersembunyi
    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    // Fungsi baru untuk menangani pengiriman tweet
    const handleTweet = () => {
        // Implementasi logika pengiriman tweet di sini
        // Di contoh ini hanya mengubah status UI
        setIsTweetSent(true);
        
        // Opsional: Reset form setelah beberapa detik
        setTimeout(() => {
        setIsTweetSent(false);
        setTweetText('');
        setUploadedImage(null);
        // Pindah ke tweet pertama setelah mengirim
        setCurrentTweet(0);
        }, 2000);
    };

    // Fungsi untuk menambah like
    const handleLike = (index) => {
        const updatedTweets = [...tweets];
        if (updatedTweets[index].liked) {
        // Jika sudah dilike, remove like
        updatedTweets[index].likes -= 1;
        updatedTweets[index].liked = false;
        } else {
        // Jika belum dilike, tambah like
        updatedTweets[index].likes += 1;
        updatedTweets[index].liked = true;
        }
        setTweets(updatedTweets);
    };

    // Fungsi untuk menambah retweet
    const handleRetweet = (index) => {
        const updatedTweets = [...tweets];
        if (updatedTweets[index].retweeted) {
        // Jika sudah diretweet, remove retweet
        updatedTweets[index].retweets -= 1;
        updatedTweets[index].retweeted = false;
        } else {
        // Jika belum diretweet, tambah retweet
        updatedTweets[index].retweets += 1;
        updatedTweets[index].retweeted = true;
        }
        setTweets(updatedTweets);
    };

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
                <button 
                    onClick={(e) => {
                    e.preventDefault();
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                        pricingSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                        });
                    }
                    }}
                    className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-3 rounded-full font-medium text-lg transition-colors`}
                >
                    Mulai Sekarang
                </button>
                <button 
                    onClick={(e) => {
                    e.preventDefault();
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                        featuresSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                        });
                    }
                    }}
                    className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600' : 'bg-white hover:bg-gray-100 border border-gray-300'} ${isDarkMode ? 'text-white' : 'text-gray-800'} px-6 py-3 rounded-full font-medium text-lg transition-colors`}
                >
                    Pelajari Lebih Lanjut
                </button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                {/* Controls */}
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
                    <button 
                    onClick={prevTweet}
                    className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} h-8 w-8 rounded-full shadow-lg flex items-center justify-center`}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    </button>
                </div>
                
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl p-4 transition-all duration-300`}>
                    {currentTweet < 3 ? (
                    // Tweet normal untuk ID 1-3
                    <>
                        <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                            {tweets[currentTweet].handle.charAt(1).toUpperCase()}
                        </div>
                        <div className="ml-3">
                            <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{tweets[currentTweet].author}</p>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{tweets[currentTweet].handle} • {tweets[currentTweet].time}</p>
                        </div>
                        </div>
                        <p className={`${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
                        {tweets[currentTweet].content}
                        </p>
                        {/* Gambar Konten dari SVG */}
                        <div className={`h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center mb-4`}>
                        {tweets[currentTweet].image}
                        </div>
                        <div className="flex justify-between">
                        <div className={`flex items-center ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'} cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{tweets[currentTweet].comments}</span>
                        </div>
                        <div 
                            className={`flex items-center cursor-pointer ${
                            tweets[currentTweet].retweeted 
                                ? (isDarkMode ? 'text-green-400' : 'text-green-500') 
                                : (isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-500 hover:text-green-500')
                            }`}
                            onClick={() => handleRetweet(currentTweet)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill={tweets[currentTweet].retweeted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>{tweets[currentTweet].retweets}</span>
                        </div>
                        <div 
                            className={`flex items-center cursor-pointer ${
                            tweets[currentTweet].liked 
                                ? (isDarkMode ? 'text-red-400' : 'text-red-500') 
                                : (isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500')
                            }`}
                            onClick={() => handleLike(currentTweet)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill={tweets[currentTweet].liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{tweets[currentTweet].likes}</span>
                        </div>
                        <div className={`flex items-center ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'} cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <span>Share</span>
                        </div>
                        </div>
                    </>
                    ) : (
                    // Tweet khusus untuk ID 4 (tweet yang bisa edit)
                    <>
                        <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                            <TwitterLogo />
                        </div>
                        <div className="ml-3">
                            <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Anda</p>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>@username • sekarang</p>
                        </div>
                        </div>
                        
                        {/* Area input teks "What's happening" */}
                        <textarea
                        className={`w-full p-2 mb-4 rounded-lg resize-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-black'} border-none focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                        placeholder="What's happening?"
                        value={tweetText}
                        onChange={(e) => setTweetText(e.target.value)}
                        rows={3}
                        disabled={isTweetSent}
                        ></textarea>
                        
                        {/* Area upload gambar */}
                        {uploadedImage ? (
                        <div className="relative mb-4">
                            <img
                            src={uploadedImage}
                            alt="Gambar yang diupload"
                            className="w-full h-48 object-cover rounded-lg"
                            />
                            {!isTweetSent && (
                            <button
                                onClick={() => setUploadedImage(null)}
                                className={`absolute top-2 right-2 rounded-full p-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            )}
                        </div>
                        ) : (
                        !isTweetSent && (
                            <div 
                            className={`h-12 mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center cursor-pointer`}
                            onClick={triggerFileInput}
                            >
                            <div className="flex items-center mx-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>Tambahkan foto</span>
                            </div>
                            </div>
                        )
                        )}
                        
                        {/* Input file tersembunyi */}
                        <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageUpload} 
                        accept="image/png, image/jpeg, image/jpg" 
                        className="hidden" 
                        disabled={isTweetSent}
                        />
                        
                        {/* Tombol Tweet */}
                        <div className="flex justify-between items-center">
                        {!isTweetSent ? (
                            <>
                            <div className="flex space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <button 
                                onClick={handleTweet}
                                className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-full font-medium text-sm transition-colors`}
                                disabled={!tweetText.trim() && !uploadedImage}
                            >
                                Tweet
                            </button>
                            </>
                        ) : (
                            <div className="flex justify-center items-center w-full">
                            <div className={`flex items-center justify-center ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} text-white px-6 py-2 rounded-full font-medium text-sm transition-colors animate-pulse`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Tweet Sent
                            </div>
                            </div>
                        )}
                        </div>
                    </>
                    )}
                </div>
                
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <button 
                    onClick={nextTweet}
                    className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} h-8 w-8 rounded-full shadow-lg flex items-center justify-center`}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                    {[0, 1, 2, 3].map((index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTweet(index)}
                        className={`h-2 w-2 rounded-full ${currentTweet === index ? 'bg-blue-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} transition-colors`}
                        aria-label={`Tweet ${index + 1}`}
                    />
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;