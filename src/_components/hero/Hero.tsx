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
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          accountType: 'traveler',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registered successfully!');
        setForm({ fullName: '', email: '', password: '' });
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="relative bg-[#F3F3F3]">
      <section className="relative w-full h-[150vh]">
        <Image
          src="/picture.png"
          alt="Background"
          fill
          className="object-cover"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 mx-auto h-full">
          <div className="md:w-1/2 text-left text-white">
            <h1 className="text-4xl md:text-[56px] font-bold mb-4 leading-tight">
              Find Your Perfect Travel Guide
            </h1>
            <p className="text-lg md:text-[28px]">
              Join our community and connect with trusted local guides
              worldwide.
            </p>
          </div>

          <div className="opacity-90 bg-[#1A1A1AB2] rounded-2xl shadow-xl p-6 mt-8 md:mt-0 md:w-[400px] w-full">
            <h3 className="hidden md:block text-[20px] font-semibold text-white mb-6">
              Create profile for
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="hidden md:block text-white">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Sanjana Sharma"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="hidden md:block border border-gray-300 rounded-lg bg-white px-4 py-2 focus:outline-none"
              />

              <label className="hidden md:block text-white">Email</label>
              <input
                type="email"
                placeholder="Email or Phone Number"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="hidden md:block border border-gray-300 rounded-lg bg-white px-4 py-2 focus:outline-none"
              />

              <label className="hidden md:block text-white">
                Create Password
              </label>
              <input
                type="password"
                placeholder="************"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
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
    </main>
  );
};

export default Hero;
