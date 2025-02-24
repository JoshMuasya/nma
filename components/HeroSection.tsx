"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OutlinedButton from "./OutlinedButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
    {
        bg: "/hero.jpg",
        title: "Your Trusted Legal Partner – Protecting Your Rights, Securing Your Future",
        description:
            "Expert legal solutions tailored to your needs. Whether it’s business law, family law, or litigation, we provide strategic guidance and dedicated representation.",
        cta: "Make an Appointment",
    },
    {
        bg: "/hero.jpg",
        title: "Business Law Excellence – Navigating Legal Complexities for Your Success",
        description:
            "From startups to corporations, our business law expertise ensures compliance, protection, and growth. Let’s safeguard your business.",
        cta: "Consult a Business Lawyer",
    },
    {
        bg: "/hero.jpg",
        title: "Family Law Advocacy – Resolving Disputes with Compassion and Expertise",
        description:
            "Divorce, custody, and family matters require a compassionate and experienced legal team. We’re here to support you.",
        cta: "Talk to a Family Lawyer",
    },
    {
        bg: "/women-bg.jpg",
        title: "Women's Legal Advocacy – Empowering & Protecting Women's Rights",
        description:
            "We stand for women's rights, offering legal support in family matters, workplace discrimination, and personal protection. Your voice matters, and we are here to defend it.",
        cta: "Get Legal Support",
    },    
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="hero w-full h-screen flex justify-center items-center text-center relative overflow-hidden">
            {/* Background Image */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[currentSlide].bg})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>


            {/* Glassy Overlay */}
            <div className="absolute inset-0 flex justify-center items-center px-4">
                <motion.div
                    key={`content-${currentSlide}`}
                    className="backdrop-blur-lg rounded-2xl p-8 md:p-12 max-w-4xl relative border-[2px] border-transparent bg-clip-padding"
                    style={{
                        borderImage: "linear-gradient(135deg, #1EB1E7, #6C8EBF) 1",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 1 }}
                >
                    {/* Title */}
                    <h1 className="text-[#E3F2FD] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        {slides[currentSlide].title}
                    </h1>

                    {/* Paragraph */}
                    <p className="text-[#E3F2FD] text-lg md:text-xl lg:text-2xl mt-4">
                        {slides[currentSlide].description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6">
                        <OutlinedButton text={slides[currentSlide].cta} />
                    </div>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-[#1eb1e7] p-2 rounded-full text-[#2a3b82] hover:bg-[#1eb1e7]/70 transition">
                <FaChevronLeft size={30} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-[#1eb1e7] p-2 rounded-full text-[#2a3b82] hover:bg-[#1eb1e7]/70 transition">
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default HeroSection;
