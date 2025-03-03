import React from 'react'
import { ShieldCheck, UserCheck, Gavel } from "lucide-react";

const CTASection = () => {
    const ctaCards = [
        {
            icon: "shield-check",
            title: "Legal Protection",
            text: "Comprehensive legal protection tailored to your needs.",
            button: "Learn More",
        },
        {
            icon: "user-check",
            title: "Client Focused",
            text: "Our clients are at the heart of everything we do.",
            button: "Discover More",
        },
        {
            icon: "gavel",
            title: "Expert Counsel",
            text: "Expert legal counsel to navigate complex issues.",
            button: "Get Started",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-[#2e3192] via-[#1A1D4A] to-[#2e3192] py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold text-[#00aeef] mb-12">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {ctaCards.map((card, index) => (
                        <div key={index} className="bg-[#1A1D4A] text-[#00aeef] rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="text-[#00aeef] text-6xl mb-4">
                                <div className="text-[#00aeef] text-6xl mb-4">
                                    {card.icon === "shield-check" && <ShieldCheck />}
                                    {card.icon === "user-check" && <UserCheck />}
                                    {card.icon === "gavel" && <Gavel />}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                            <p className="text-sm mb-6">{card.text}</p>
                            <button className="bg-[#00aeef] text-[#1A1D4A] py-2 px-6 rounded-lg font-semibold hover:bg-[#2e3192] hover:text-white transition">
                                {card.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CTASection
