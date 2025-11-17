'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const cards = [
  {
    icon: '/human.svg',
    title: 'Verified Local Guides',
    paragraph:
      'All guides are carefully screened and verified to ensure safe and authentic travel experiences.',
  },
  {
    icon: '/medal.svg',
    title: 'Quality Assurance',
    paragraph:
      'Profiles include genuine reviews, experience details, and on-ground validation by our team.',
  },
  {
    icon: '/security.svg',
    title: 'Your Privacy, Our Priority',
    paragraph:
      'We protect your personal information and only share details once you confirm your match.',
  },
];
const card1 = [
  {
    title: 'Voice Chat  Virtual Meet & Greet',
    parag:
      'Join online sessions to interact with local guides, ask questions, and plan your trip before you arrive.',
  },
  {
    title: 'Chatting & All Types of Service Access',
    parag:
      'Enjoy safe and seamless conversations with guides through our built-in calling feature , no need to share personal contact details.',
  },
  {
    title: 'Objective Oriented communication',
    parag:
      'See the real person behind the guide profile! Watch short videos where guides introduce themselves and share what makes their tours special.',
  },
];

const Hero = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register Form:', form);
  };

  return (
    <>
      <main className="relative bg-[#F3F3F3] ">
        <section className="relative w-full h-[150vh]">
          {/* Background image */}
          <Image
            src="/picture.png"
            alt="Background"
            fill
            className="object-cover"
          />

          {/*  */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 mx-auto h-full">
            {/* Heading */}
            <div className="md:w-1/2 text-left text-white">
              <h1 className="text-4xl md:text-[56px] font-bold mb-4 leading-tight">
                Find Your Perfect Travel Guide
              </h1>
              <p className="text-lg md:text-[28px]">
                Join our community and connect with trusted local guides
                worldwide.
              </p>
            </div>

            {/* Register Form */}
            <div className="opacity-90 bg-[#1A1A1AB2] rounded-2xl shadow-xl p-6 mt-8 md:mt-0 md:w-[400px] w-full">
              <h3 className="hidden md:block text-[20px] font-semibold text-white mb-6">
                Create profile for
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <select className="hidden md:block border border-gray-300 rounded-lg bg-white px-4 py-2 focus:outline-none">
                  <option value="">Select</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                </select>

                <label className="hidden md:block text-white">Full Name</label>
                <input
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  type="text"
                  placeholder="e.g. Sanjana Sharma"
                  required
                  className="hidden md:block border border-gray-300 rounded-lg bg-white px-4 py-2 focus:outline-none"
                />

                <label className="hidden md:block text-white">Email</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  placeholder="Email or Phone Number"
                  required
                  className="hidden md:block border border-gray-300 rounded-lg bg-white px-4 py-2 focus:outline-none"
                />

                <label className="hidden md:block text-white">
                  Create Password
                </label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  value={form.password}
                  type="password"
                  required
                  placeholder="************"
                  className="hidden md:block border border-gray-300 rounded-lg bg-white px-4 py-2 focus:outline-none"
                />

                <button
                  type="submit"
                  className="bg-[#D8465C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#d62828]"
                >
                  Register for Free
                </button>
              </form>

              <p className="hidden md:block text-sm text-gray-200 mt-4">
                By clicking 'Register for Free', you accept the{' '}
                <span className="text-[#D8465C]">Terms of Use</span> and{' '}
                <span className="text-[#D8465C]">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </section>

        {/* div for innter container */}
        <div className="flex items-center justify-center">
          <div className="min-h-screen relative -top-36 max-w-6xl shadow-lg bg-white rounded-lg ">
            <div className="relative  ">
              {/* Trusted Section */}
              <section className="py-16 px-6 md:px-20">
                <p className="text-[#929292] text-lg md:text-[28px] text-center font-semibold font-roboto">
                  Trusted by Travelers Worldwide
                </p>
                <h2 className="text-lg md:text-[40px] text-center font-semibold mb-8 mt-2">
                  Simplifying{' '}
                  <strong className="text-[#D8465C]">Every Journey.</strong>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {cards.map((card, index) => (
                    <div key={index} className="p-6">
                      {card.icon && (
                        <div className="mb-5">
                          <Image
                            src={card.icon}
                            alt={card.title}
                            width={60}
                            height={60}
                          />
                        </div>
                      )}

                      {/*  */}
                      <div className="border-[#D8465C] border-[2.5px] w-1/4 " />
                      <h3 className="text-[28px] font-semibold">
                        {card.title}
                      </h3>
                      <p className="text-[16px] text-[#929292]">
                        {card.paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Connect Section */}
              <section className="px-10 py-3">
                <div className="grid grid-cols-3">
                  <div>
                    <p className="text-lg md:text-[28px] font-semibold text-[#929292]">
                      PLAN FROM HOME
                    </p>
                    <span className="text-lg md:text-[40px] font-semibold font-roboto">
                      Connect with{' '}
                      <strong className="text-[#D8465C] ">
                        Service Provider & Travel Guide
                      </strong>{' '}
                      Before Move
                    </span>
                  </div>
                </div>

                {/*  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    {card1.map((item, index) => (
                      <div key={index} className="p-6">
                        <h4 className="text-lg md:text-[28px] font-semibold mb-2">
                          {item.title}
                        </h4>
                        <hr className="border-[#D8465C] border-3xl w-[80]" />
                        <p className="text-lg md:text-[16px] text-[#929292]">
                          {item.parag}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center overflow-hidden">
                    <Image
                      src="/pic1.png"
                      alt="Travel scene"
                      width={400}
                      height={400}
                      className="object-cover rounded-2xl w-full"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
