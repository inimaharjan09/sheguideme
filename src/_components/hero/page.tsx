import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/picture.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-20">
        <div>
          <h3 className="text-[56px] font-bold text-white">
            Find Your Perfect Travel Guide
          </h3>
          <p className="text-[28px] font-semibold text-white mt-4">
            Match with the ideal local expert for a seamless travel experience.
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-80 bg-[#1A1A1AB2] rounded-2xl">
          <form>
            <label className="text-white text-[16px] flex flex-col gap-2">
              Create profile for
              <select className="p-3 rounded border-none rounded text-black bg-white">
                <option value="">Select</option>
                <option value="guest">Guest</option>
              </select>
            </label>

            <label className="text-white text-[16px] flex flex-col gap-2">
              Full Name
              <input
                type="text"
                placeholder="e.g. Sanjana Sharma"
                className="p-3 rounded border border-gray-300 text-black"
              />
            </label>

            <label className="text-white text-[16px] flex flex-col gap-2">
              Email
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="p-3 rounded border bg-[#ffffff] text-black"
              />
            </label>

            <label className="text-white text-[16px] flex flex-col gap-2">
              Create password
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded border bg-[#ffffff] text-black"
              />
            </label>

            <button
              type="submit"
              className="col-span-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </section>
  );
};

export default Hero;
