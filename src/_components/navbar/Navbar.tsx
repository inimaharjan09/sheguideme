'use client';

import { Globe, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [language, setLanguage] = useState('Language');

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-[32px] font-semibold font-kalnia text-[#D8465C]">
        sheguideme
      </div>

      {/* Search  */}
      <div className="flex items-center border-[#F3F3F3] rounded-full bg-white">
        <Search size={24} className="ml-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-2 text-[20px] outline-none rounded-l-full"
        />
        <button className="bg-[#D8465C] border-[#F3F3F3] rounded-3xl text-white px-4 py-2 text-[14px] hover:bg-rose-600">
          Search
        </button>
      </div>

      {/* Language */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-rose-500">
          <Globe size={24} className="text-[20px]" />
          {language}
        </button>

        <button className="bg-[#D8465C] text-white px-4 py-1.5 rounded text-[20px] hover:cursor-pointer">
          Create New Account
        </button>

        <button className="border border-[#D8465C] text-[#D8465C] px-4 py-1.5 rounded text-[20px] hover:bg-rose-50 hover:cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
}
