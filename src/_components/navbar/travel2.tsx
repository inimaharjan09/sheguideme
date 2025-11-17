'use client';

import { useState } from 'react';
import { Upload, ChevronDown, X } from 'lucide-react';

export default function TravelTwoPage({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted!');
  };

  return (
    <div className="absolute inset-0 w-full flex items-center justify-center bg-black/50 z-50">
      <div className="flex items-center justify-center w-full h-screen mt-48">
        <div className="bg-[#F3F3F3] w-full max-w-3xl inset-0 rounded-2xl mt-78 shadow-lg p-4 md:p-8 relative animate-fadeIn">
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-end hover:cursor-pointer"
          >
            <X size={20} />
          </button>
          <h1 className="text-2xl font-bold text-center mb-2">
            Create Your <span className="text-[#D8465C]">Traveler Account</span>
          </h1>
          <p className="text-center text-[#929292] mb-8 text-sm">
            Create your account to discover trusted local guides and explore the
            world your way.
          </p>

          <p className="mb-8 text-sm font-semibold">Detail Information</p>

          {/* form */}
          <div className="border-none rounded-xl p-2 shadow-sm bg-white">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full text-left"
            >
              {/* Profile Picture */}
              <div>
                <label className="text-sm font-semibold">Profile Picture</label>
                <div className="mt-1 border rounded-lg p-3 flex items-center justify-between">
                  <input
                    type="file"
                    className="border-none outline-none text-sm"
                  />
                  <Upload size={18} className="text-gray-500" />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Upload up to 5 photos (at least 2 full photos)
                </p>
              </div>

              {/* Country */}
              <div>
                <label className="text-sm font-semibold">Country</label>
                <div className="relative mt-1">
                  <select className="w-full border rounded-lg px-4 py-2 appearance-none outline-none">
                    <option>Nepal</option>
                    <option>India</option>
                    <option>Bhutan</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-semibold">City</label>
                <input
                  type="text"
                  placeholder="e.g. Kathmandu"
                  className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
                />
              </div>

              {/* Date birth */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">
                    Date of Birth / Age
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 02/03/1995"
                    className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Body Color</label>
                  <div className="relative mt-1">
                    <select className="w-full border rounded-lg px-4 py-2 appearance-none outline-none">
                      <option>Select</option>
                      <option>Fair</option>
                      <option>Medium</option>
                      <option>Dark</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Height */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">
                    Height (in feet)
                  </label>
                  <input
                    type="text"
                    placeholder="5.8"
                    className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Weight (in kg)
                  </label>
                  <input
                    type="text"
                    placeholder="70"
                    className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="text-sm font-semibold">Gender</label>
                <div className="relative mt-1">
                  <select className="w-full border rounded-lg px-4 py-2 appearance-none outline-none">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              {/* Religion */}
              <div>
                <label className="text-sm font-semibold">
                  Religion (Optional)
                </label>
                <div className="relative mt-1">
                  <select className="w-full border rounded-lg px-4 py-2 appearance-none outline-none">
                    <option>Religion (Optional)</option>
                    <option>Hindu</option>
                    <option>Buddhist</option>
                    <option>Christian</option>
                    <option>Muslim</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D8465C] text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition"
              >
                Submit Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
