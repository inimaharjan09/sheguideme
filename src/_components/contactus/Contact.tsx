'use client';

import Image from 'next/image';
import React from 'react';
const point = [
  { icon: '/call.svg', content: '+977 9860 104 977' },
  { icon: '/whatsapp.svg', content: '+977 9860 104 977' },
  { icon: '/fb.svg', content: 'Facebook' },
  { icon: '/linklin.svg', content: 'Linkedin' },
  { icon: '/location.svg', content: 'Anamnagar, Kathmandu' },
  { icon: '/mail.svg', content: 'sheguidesme@gmail,com' },
  { icon: '/insta.svg', content: 'Instagram' },
  { icon: '/yt.svg', content: 'YouTube' },
];

const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left - Form */}
        <div>
          <h2 className="text-[40px] font-roboto font-semibold">
            Register Quarries
          </h2>
          <p className="text-[#929292] mt-2 text-[28px] font-semibold">
            Would you like to speak to one of our adviser over the phone?
          </p>

          <form className="mt-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+977 98********"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g., rameshguide@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Any Queries? <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="Type your message here"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#D8465C] text-white font-medium px-6 py-3 rounded-md hover:bg-rose-600 transition"
            >
              Let's Talk
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="bg-rose-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-[#D8465C]">Contact us</h3>
          <p className="text-gray-600 text-[16px] mt-2 mb-6">
            We are 24x7 available to help you out.
          </p>

          <ul className="space-y-3 text-gray-700 text-[16px]">
            {point.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image
                  src={item.icon}
                  alt={item.content}
                  width={20}
                  height={20}
                  className="text-[#D8465C]"
                />
                <span className="text-[16px]">{item.content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
