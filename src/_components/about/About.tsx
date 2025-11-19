'use client';

import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <>
      <section className="py-12 relative bg-[#F3F3F3] px-6 md:px-20">
        {/* Background Image */}
        <div className="[mask:linear-gradient(180deg,#0000_47px,#000_0),radial-gradient(47px,#000_calc(100%-1px),#0000)_top/86.95px_94px] absolute inset-0">
          <Image
            src="/about-mission-bg.png"
            alt="Background"
            width={1080}
            height={720}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-3">
          <div className="bg-[#F3F3F3] rounded-2xl px-2 py-1.5">
            <h3 className="font-bold text-lg md:text-[40px] text-[#D8465C] mb-2">
              About Us
            </h3>
            <p className="text-lg md:text-[20px] text-[#929292]">
              Our platform connects service providers with verified local guides
              who know their region better than any map ever could. Whether
              you're seeking a hiking expert, cultural storyteller, or adventure
              companion — we help you find the right person to make your
              experience richer and more personal.
            </p>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl px-3 py-2">
            <h3 className="font-bold text-lg md:text-[40px] text-[#D8465C] mb-2">
              Our Mission
            </h3>
            <p className="text-lg md:text-[20px] text-[#929292]">
              To create a global community where service providers and guides
              connect seamlessly, fostering authentic experiences and
              responsible tourism.
            </p>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl px-3 py-2">
            <h3 className="font-bold text-lg md:text-[40px] text-[#D8465C] mb-2">
              Our Vision
            </h3>
            <p className="text-lg md:text-[20px] text-[#929292]">
              To become the world's most trusted platform for connecting
              explorers and local experts helping every service providers find
              their perfect guide.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
