"use client"

import React from 'react'
import Image from 'next/image';

const PracticeAreas = () => {
    const areas = [
        {
            title: "Family Law",
            image: "/practice.jpg",
        },
        {
            title: "Business Law",
            image: "/practice.jpg",
        },
        {
            title: "Criminal Defense",
            image: "/practice.jpg",
        },
        {
            title: "Civil Rights",
            image: "/practice.jpg",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#2a3b82]/10 via-[#2a3b82]/15 to-[#1eb1e7]/20 backdrop-blur-lg text-[#1A1D4A] py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center align-middle'>
                    <div className='text-center md:text-left'>
                        <p className="text-xs text-[#00aeef] font-black underline tracking-widest mb-2">OUR EXPERTISE</p>
                        <h2 className="text-4xl font-extrabold mb-4">Practice Areas</h2>
                        <p className="text-sm max-w-2xl mx-auto mb-8 font-semibold">
                            We offer comprehensive legal solutions in various practice areas, providing expert guidance and representation to safeguard your rights.
                        </p>
                    </div>

                    <button className="bg-[#00aeef] text-[#1A1D4A] py-2 px-6 rounded-lg font-semibold hover:bg-[#2e3192] hover:text-white transition">
                        View More
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {areas.map((area, index) => (
                        <div key={index} className="bg-[#2e3192] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                            <Image
                                src={area.image}
                                alt={area.title}
                                height={200}
                                width={200}
                                className="w-full h-48 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-[#00aeef] mb-2">{area.title}</h3>
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-2 bg-[#00aeef] rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PracticeAreas
