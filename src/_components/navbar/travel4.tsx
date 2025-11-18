'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

type TravelFourPageProps = {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
};

export default function TravelFourPage({
  isOpen,
  onClose,
  onContinue,
}: TravelFourPageProps) {
  const [formData, setFormData] = useState({
    hobbies: '',
    citySpots: '',
    villageSpots: '',
    otherOfferings: '',
    fromDate1: '',
    toDate1: '',
    fromDate2: '',
    toDate2: '',
    images: null as FileList | null,
  });
  const formHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onContinue();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
      <div className="flex items-center justify-center w-full h-screen mt-30">
        <div className="bg-[#F3F3F3] w-full max-w-3xl rounded-2xl shadow-lg p-4 md:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-end hover:cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center">
            Create Your <span className="text-[#D8465C]">Traveler Account</span>
          </h1>

          <p className="text-center text-gray-500 text-sm mb-6">
            Create your account to discover trusted local guides and explore the
            world your way.
          </p>

          {/* Steps */}
          <div className="flex justify-center gap-10 mb-5">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                  num === 4
                    ? 'bg-[#D8465C] text-white border-[#D8465C]'
                    : 'border-gray-300 text-gray-500'
                }`}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Form Container */}
          <div className="border-none rounded-xl p-2 shadow-sm bg-white">
            {/* Hobbies */}
            <form onSubmit={formHandle} className="space-y-4 w-full text-left">
              <label className="block text-sm font-semibold mb-1">
                Hobbies / Interests / Services
              </label>
              <select
                name="hobbies"
                className="w-full border border-[#CED4DA] rounded-lg p-3 mb-4"
              >
                <option>Select</option>
              </select>

              {/* City Spots */}
              <label className="block text-sm font-semibold mb-1">
                Typical offering city spots
              </label>
              <select
                name="citySpots"
                className="w-full border border-[#CED4DA] rounded-lg p-3 mb-4"
              >
                <option>Select</option>
              </select>

              {/* Images */}
              <label className="block text-sm font-semibold mb-1">
                Upload Images
              </label>
              <input
                type="file"
                name="images"
                multiple
                className="w-full border border-[#CED4DA] rounded-lg p-2 mb-1"
              />
              <p className="text-xs text-gray-500 mb-4">
                Upload up to 5 photos
              </p>

              {/* Village Spots */}
              <label className="block text-sm font-semibold mb-1">
                Typical offering village spots
              </label>
              <select
                name="villageSpots"
                className="w-full border border-[#CED4DA] rounded-lg p-3 mb-4"
              >
                <option>Select</option>
              </select>

              {/* Other Offerings */}
              <label className="block text-sm font-semibold mb-1">
                Other Offerings (Landmarks / Places)
              </label>
              <input
                type="text"
                name="otherOfferings"
                placeholder="e.g., Pokhara Lakes, Mustang Trek..."
                className="w-full p-3 border border-[#CED4DA] rounded-lg mb-6"
              />

              {/* Availability */}
              <label className="block text-sm font-semibold mb-2">
                Service or Guide available time for traveller
              </label>

              {/* Date */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="date"
                  name="fromDate1"
                  className="w-full border border-[#CED4DA] rounded-lg p-3"
                />
                <input
                  type="date"
                  name="toDate1"
                  className="w-full border border-[#CED4DA] rounded-lg p-3"
                />
              </div>

              {/* Time */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="time"
                  name="fromDate2"
                  className="border border-[#CED4DA] rounded-lg p-3"
                />
                <input
                  type="time"
                  name="toDate2"
                  className="border border-[#CED4DA] rounded-lg p-3"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#D8465C] text-white p-3 rounded-lg font-semibold"
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
