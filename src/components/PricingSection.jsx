import React from 'react';

    const PricingSection = ({ isDarkMode }) => {
    const plans = [
        {
        name: 'Gratis',
        price: 'Rp 0',
        description: 'Akses dasar ke platform X',
        features: [
            'Posting teks hingga 280 karakter',
            'Berbagi foto dan video',
            'Mengikuti akun dan topik',
            'Fitur repost dan like',
            'Pesan langsung terbatas',
        ],
        buttonText: 'Daftar Sekarang',
        highlighted: false,
        },
        {
        name: 'Premium',
        price: 'Rp 89.000',
        period: '/bulan',
        description: 'Pengalaman X yang ditingkatkan',
        features: [
            'Posting teks hingga 4.000 karakter',
            'Edit postingan setelah diterbitkan',
            'Tanda verifikasi biru',
            'Pengurangan iklan hingga 50%',
            'Pesan langsung tanpa batas',
            'Fitur eksklusif lainnya',
        ],
        buttonText: 'Berlangganan Sekarang',
        highlighted: true,
        },
        {
        name: 'Bisnis',
        price: 'Rp 250.000',
        period: '/bulan',
        description: 'Solusi terbaik untuk organisasi',
        features: [
            'Semua fitur Premium',
            'Badge identitas khusus perusahaan',
            'Analitik lanjutan',
            'Dukungan prioritas',
            'Manajemen multi-akun',
            'Kolaborasi tim',
        ],
        buttonText: 'Kontak Penjualan',
        highlighted: false,
        },
    ];

    return (
        <section id="pricing" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pilih Paket yang Tepat untuk Anda</h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Mulai dengan akun gratis atau tingkatkan ke Premium untuk fitur eksklusif. Solusi bisnis juga tersedia.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
                <div 
                key={index} 
                className={`rounded-2xl overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                    plan.highlighted 
                    ? isDarkMode ? 'border-2 border-blue-500 bg-gray-700' : 'border-2 border-blue-500 bg-white shadow-xl' 
                    : isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200 shadow-lg'
                }`}
                >
                <div 
                    className={`p-6 ${
                    plan.highlighted 
                        ? isDarkMode ? 'bg-blue-600' : 'bg-blue-500' 
                        : isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } text-center`}
                >
                    <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : isDarkMode ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className="mt-4">
                    <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : isDarkMode ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                    {plan.period && (
                        <span className={`${plan.highlighted ? 'text-blue-100' : isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{plan.period}</span>
                    )}
                    </div>
                    <p className={`mt-2 ${plan.highlighted ? 'text-blue-100' : isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{plan.description}</p>
                </div>
                <div className="p-6">
                    <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                        <svg className={`h-5 w-5 mr-2 mt-0.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                        </li>
                    ))}
                    </ul>
                    <button 
                    className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                        plan.highlighted 
                        ? isDarkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : isDarkMode ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                    >
                    {plan.buttonText}
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

export default PricingSection;