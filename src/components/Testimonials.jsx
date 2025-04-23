import React from 'react';

const Testimonials = ({ isDarkMode }) => {
    const testimonials = [
        {
        content: "Sebenernya aku jarang make X, soalnya aku punya pacar buat tempat cerita aku.",
        author: "Aisya Rivelia Azzahra",
        role: "Pacar Fattan",
        },
        {
        content: "Seru banget aku bisa nyambat disini setiap hari.",
        author: "R.Aisha Syauqi Ramadhani",
        role: "Tiktokers Akut",
        },
        {
        content: "Seru banget aku bisa liat sambatan ica di X.",
        author: "Zhafira Zahra Alfarisy",
        role: "Tekomplot 23",
        },
        {
            content: "Aku cape ngerjain sbd, mending main X.",
            author: "Audy Natalie",
            role: "Ibu Kost",
        },
        {
            content: "Elon musk kapan balikin twitter circle?",
            author: "Dwigina Sitti Zahwa",
            role: "CEO Tesla",
        },
        {
            content: "Berkat X engagement aku naik drastis, makasih X!",
            author: "Vanesa Kayla Zahra",
            role: "Selebgram",
        },
    ];

    return (
        <section id="testimonials" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Apa Kata Pengguna</h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ribuan orang dan organisasi menggunakan X untuk terhubung dengan dunia. Berikut pengalaman mereka.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div 
                key={index} 
                className={`p-6 rounded-xl ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}
                >
                <svg className={`h-8 w-8 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.content}</p>
                <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
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
        </section>
    );
    };

export default Testimonials;