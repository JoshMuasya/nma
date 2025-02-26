"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FilledButton from './FilledButton';
import { FaFacebookF, FaHamburger, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const MobileNavbar = ({
    logoSrc = '/logo.png',
    menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ],
    primaryColor = '#1eb1e7',
    buttonText = "Let's Talk",
    buttonLink = '/contact',
    socialLinks = {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
    }
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="md:hidden relative z-[70]">
            {!isOpen && (
                <button
                    style={{ color: primaryColor }}
                    className="text-3xl hover:opacity-80 transition-opacity duration-300"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <FaHamburger />
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 h-screen w-2/3 text-white shadow-lg z-[70] p-6 flex flex-col justify-between bg-gradient-to-b from-[#2a3b82]/95 to-[#1eb1e7]/90 backdrop-blur-lg"
                        ref={menuRef}
                    >
                        <div className="flex justify-between items-center">
                            <Image
                                src={logoSrc}
                                alt="Company Logo"
                                width={80}
                                height={40}
                                priority
                                className="object-contain"
                            />

                            <button
                                className="text-3xl text-white hover:text-[#1eb1e7] transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                            >
                                <CgClose />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-6 mt-12">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl text-white hover:text-[#1eb1e7] transition-colors duration-300"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <div>
                                <FilledButton text={buttonText} link={buttonLink} />
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex justify-center space-x-4 pb-6">
                            {Object.entries(socialLinks).map(([key, url]) => {
                                const Icon = key === 'facebook' ? FaFacebookF
                                    : key === 'instagram' ? FaInstagram
                                        : FaLinkedinIn;

                                return (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-2xl hover:text-[#1eb1e7] transition-colors duration-300"
                                        aria-label={`Visit our ${key} page`}
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNavbar;