import React, { useState, useEffect } from 'react';

const TestimonialCarousel = ({ isDarkMode }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    
    const testimonials = [
        {
        content: "Sebenernya aku jarang make X, soalnya aku punya pacar buat tempat cerita aku.",
        author: "Aisya Rivelia Azzahra",
        role: "Pacar Fattan",
        initial: "A"
        },
        {
        content: "Seru banget aku bisa nyambat disini setiap hari.",
        author: "R.Aisha Syauqi Ramadhani",
        role: "Tiktokers Akut",
        initial: "R"
        },
        {
        content: "Seru banget aku bisa liat sambatan ica setiap harinya di X.",
        author: "Zhafira Zahra Alfarisy",
        role: "Tekomplot 23",
        initial: "Z"
        },
        {
        content: "Aku cape ngerjain sbd, mending main X.",
        author: "Audy Natalie",
        role: "Ibu Kost",
        initial: "A"
        },
        {
        content: "Elon musk kapan balikin twitter circle?",
        author: "Dwigina Sitti Zahwa",
        role: "CEO Tesla",
        initial: "D"
        },
        {
        content: "Berkat X engagement aku naik drastis, makasih X!",
        author: "Vanesa Kayla Zahra",
        role: "Selebgram",
        initial: "V"
        },
    ];

    useEffect(() => {
        let interval;
        if (!isPaused) {
        interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);
        }
        return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
    };

    return (
        <section 
        id="testimonials" 
        className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Apa Kata Pengguna
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ribuan orang dan organisasi menggunakan X untuk terhubung dengan dunia. Berikut pengalaman mereka.
            </p>
            </div>

            {/* Mobile Carousel (1 item) */}
            <div className="md:hidden relative">
            <div className="overflow-hidden">
                <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                {testimonials.map((testimonial, index) => (
                    <div 
                    key={index} 
                    className={`p-6 rounded-xl flex-shrink-0 w-full ${
                        isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}
                    >
                    <svg className={`h-8 w-8 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.content}</p>
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        {testimonial.initial}
                        </div>
                        <div className="ml-3">
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.author}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                <button
                    key={index}
                    className={`h-2 w-2 rounded-full ${activeIndex === index ? 'bg-blue-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
                ))}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 flex justify-between w-full px-2">
                <button 
                onClick={handlePrev}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} shadow-md`}
                aria-label="Previous slide"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </button>
                <button 
                onClick={handleNext}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} shadow-md`}
                aria-label="Next slide"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>
            </div>
            </div>

            {/* Desktop Carousel (3 items visible) */}
            <div className="hidden md:block">
            <div className="relative overflow-hidden">
                <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(activeIndex * 100) / 3}%)` }}
                >
                {testimonials.map((testimonial, index) => (
                    <div 
                    key={index} 
                    className={`p-6 rounded-xl flex-shrink-0 w-1/3 ${
                        isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg mx-2`}
                    >
                    <svg className={`h-8 w-8 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.content}</p>
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        {testimonial.initial}
                        </div>
                        <div className="ml-3">
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.author}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="flex justify-center mt-6 gap-4">
                <button 
                onClick={handlePrev}
                className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-100'} shadow-md transition-colors`}
                aria-label="Previous testimonials"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </button>
                <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                    <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${
                        activeIndex === index 
                        ? 'bg-blue-500 w-6' 
                        : isDarkMode 
                            ? 'bg-gray-600' 
                            : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
                </div>
                <button 
                onClick={handleNext}
                className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-100'} shadow-md transition-colors`}
                aria-label="Next testimonials"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>
            </div>
            </div>
        </div>
        </section>
    );
};

export default TestimonialCarousel;