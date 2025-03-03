import React from 'react'

const ReachSection = () => {
    return (
        <section className="hero w-full h-screen flex items-center justify-center">
            <div className='bg-gradient-to-b from-[#2a3b82]/5 via-[#2a3b82]/10 to-[#1eb1e7]/15 backdrop-blur-lg bg-opacity-50 py-20 px-6 w-full'>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            style={{ minHeight: '400px' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8536812287025!2d36.8009210737275!3d-1.259946935595304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173f254ef62f%3A0xeb15618740b6ee3f!2sWestlands%20commercial%20center!5e0!3m2!1sen!2ske!4v1740943805747!5m2!1sen!2ske"
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
                        <h3 className="text-2xl font-semibold text-[#00aeef] mb-6">Contact Us</h3>
                        <form className="flex flex-col">
                            <input className="w-full p-3 mb-4 bg-transparent border border-[#00aeef] rounded-lg text-white placeholder-[#E3F2FD]" placeholder="Name" />
                            <input className="w-full p-3 mb-4 bg-transparent border border-[#00aeef] rounded-lg text-white placeholder-[#E3F2FD]" placeholder="Email" />
                            <textarea className="w-full p-3 mb-4 bg-transparent border border-[#00aeef] rounded-lg text-white placeholder-[#E3F2FD]" placeholder="Message"></textarea>
                            <button className="bg-[#00aeef] text-[#1A1D4A] py-2 px-6 rounded-lg font-semibold hover:bg-[#2e3192] hover:text-white transition">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReachSection
