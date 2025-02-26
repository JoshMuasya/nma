import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section className="bg-[#1A1D4A] text-[#E3F2FD] py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
                    <Image
                        src="/law1.jpg"
                        alt="Law Firm Office"
                        width={200}
                        height={200}
                        className="w-full md:w-1/2 h-88 object-cover rounded-lg shadow-lg"
                    />
                    <Image
                        src="/law2.jpg"
                        alt="Law Firm Team"
                        width={200}
                        height={200}
                        className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-left">
                    <p className="text-xs text-[#00aeef] font-bold underline tracking-widest mb-2">
                        OUR FIRM
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">
                        Dedicated to Justice, Committed to You
                    </h2>
                    <p className="text-sm leading-relaxed">
                        At NMA, we provide expert legal solutions with a focus on <b>justice, integrity, and excellence</b>.
                        Our experienced team of attorneys is committed to ensuring your rights are protected and that you receive the legal
                        representation you deserve. We specialize in <b>family law, business law, civil rights, and more</b>, offering
                        personalized legal support tailored to your needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
