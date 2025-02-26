import React from 'react'
import { Briefcase, ShieldCheck, Scale, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
    const experiences = [
        {
            title: "Expertise",
            text: "With years of legal experience, we provide strategic guidance and strong advocacy, ensuring that every client receives the best possible legal support.",
            icon: <Briefcase className="w-6 h-6 text-[#00aeef]" />
        },
        {
            title: "Commitment",
            text: "We are dedicated to protecting your rights, offering unwavering support and personalized solutions for every legal challenge you face.",
            icon: <ShieldCheck className="w-6 h-6 text-[#00aeef]" />
        },
        {
            title: "Integrity",
            text: "We operate with honesty, transparency, and ethical excellence, ensuring that every case is handled with professionalism and respect.",
            icon: <Scale className="w-6 h-6 text-[#00aeef]" />
        },
        {
            title: "Results-Driven",
            text: "Our goal is to deliver impactful legal solutions, empowering our clients with the justice and resolution they deserve.",
            icon: <CheckCircle className="w-6 h-6 text-[#00aeef]" />
        }
    ];

    return (
        <section className="bg-gradient-to-b from-[#2a3b82]/10 via-[#2a3b82]/15 to-[#1eb1e7]/20 backdrop-blur-lg text-[#E3F2FD] py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#1A1D4A] mb-8">
                    Our Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experiences.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-[#2e3192] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="mb-3">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-[#00aeef] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
