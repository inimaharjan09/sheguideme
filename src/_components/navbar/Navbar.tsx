'use client';

import { Globe, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [language, setLanguage] = useState('Language');
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const accountTypes = [
    {
      id: 'traveler',
      title: 'Traveler & Customer',
      desc: 'Local travel guide & service provider',
      icon: '/carrybag.svg',
    },
    {
      id: 'service',
      title: 'All type of Service Provider',
      desc: 'Grow booking the different types of services',
      icon: '/mappin.svg',
    },
    {
      id: 'guide',
      title: 'Female & Male Travel Guide',
      desc: 'Become a trusted local female guide and host travellers.',
      icon: '/hiking.svg',
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
        {/* Logo */}
        <div className="text-[32px] font-semibold font-kalnia text-[#D8465C]">
          sheguideme
        </div>

        {/* Search */}
        <div className="flex items-center border-[#F3F3F3] rounded-full bg-white">
          <Search size={24} className="ml-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-[20px] outline-none rounded-l-full"
          />
          <button className="bg-[#D8465C] rounded-3xl text-white px-4 py-2 text-[14px] hover:bg-rose-600">
            Search
          </button>
        </div>

        {/* Language + Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-rose-500">
            <Globe size={20} />
            {language}
          </button>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#D8465C] text-white px-4 py-1.5 rounded text-[20px] hover:bg-rose-600 transition"
          >
            Create New Account
          </button>

          <button className="border border-[#D8465C] text-[#D8465C] px-4 py-1.5 rounded text-[20px] hover:bg-rose-50 transition">
            Login
          </button>
        </div>
      </nav>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#F3F3F3] w-[90%] max-w-3xl rounded-2xl shadow-lg p-8 text-center animate-fadeIn">
            <h2 className="text-[#929292] text-sm mb-1">Who are you?</h2>
            <h1 className="text-2xl font-bold mb-8">Create New Account</h1>

            <div className="flex flex-col md:flex-row justify-center gap-5 mb-8">
              {accountTypes.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`w-full md:w-1/3 border rounded-xl p-6 cursor-pointer transition hover:shadow-md ${
                    selected === opt.id
                      ? 'border-pink-500 text-[#D8465C]'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src={opt.icon}
                      alt={opt.title}
                      width={50}
                      height={50}
                    ></Image>
                  </div>
                  <h3 className="font-semibold">{opt.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{opt.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-5 py-2 rounded-lg border hover:bg-gray-100 hover:cursor-pointer"
              >
                Back
              </button>
              <button
                disabled={!selected}
                className={`px-5 py-2 rounded-lg text-white transition ${
                  selected
                    ? 'bg-[#D8465C] hover:bg-rose-600 hover:cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>

            <p className="text-sm text-[#929292] mt-5">
              Already have an account?{' '}
              <a href="#" className="text-[#D8465C] hover:cursor-pointer">
                Sign in
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
