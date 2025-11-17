'use client';

import { Calendar, X } from 'lucide-react';
import { useState } from 'react';

export default function TravelFourPage() {
  const [formData, setFormData] = useState({
    hobbies: '',
    citySpots: '',
    villageSpots: '',
    otherOfferings: '',
    fromDate1: '',
    toDate1: '',
    fromDate2: '',
    toDate2: '',
    images: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  return (
    <div className="absolute inset-0 w-full flex items-center justify-center bg-black/50 z-50">
      <div className="flex items-center justify-center w-full h-screen mt-48">
        <div className='className="bg-[#F3F3F3] w-full max-w-3xl inset-0 rounded-2xl mt-78 shadow-lg p-4 md:p-8 relative animate-fadeIn"'>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-end hover:cursor-pointer"
          >
            <X size={20} />
          </button>
          <h1 className="text-3xl font-bold text-center">
            Create Your <span className="text-[#D8465C]">Traveler Account</span>
          </h1>

          <p className="text-center text-gray-500 text-sm mb-6">
            Create your account to discover trusted local guides and explore the
            world your way.
          </p>

          {/* Steps */}
          <div className="flex justify-center gap-10 mb-10">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 flex items-center justify-center rounded-full border 
            ${
              num === 4
                ? 'bg-[#D8465C] text-white border-[#D8465C]'
                : 'border-gray-300 text-gray-500'
            }`}
              >
                {num}
              </div>
            ))}
          </div>

          <h2 className="mb-2 font-semibold">Hobbies and Interests</h2>

          <div className="border-none rounded-xl p-2 shadow-sm bg-white">
            {/* Hobbies */}
            <label className="block text-sm font-semibold mb-1">
              Hobbies / Interests / Services
            </label>
            <select
              name="hobbies"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mb-4"
            >
              <option>Select</option>
            </select>

            {/* City Spots */}
            <label className="block text-sm font-semibold mb-1">
              Typical offering city spots
            </label>
            <select
              name="citySpots"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mb-4"
            >
              <option>Select</option>
            </select>

            {/* Upload Images */}
            <label className="block text-sm font-semibold mb-1">
              Upload Images
            </label>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              multiple
              className="w-full border rounded-lg p-2 mb-1"
            />
            <p className="text-xs text-gray-500 mb-4">Upload up to 5 photos</p>

            {/* Village Spots */}
            <label className="block text-sm font-semibold mb-1">
              Typical offering village spots
            </label>
            <select
              name="villageSpots"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mb-4"
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
              placeholder="e.g., Pokhara Lakes, Mustang Trek, Bhaktapur Heritage, etc."
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-6"
            />

            {/* Available Time */}
            <label className="block text-sm font-semibold mb-2">
              Service or Guide available time for traveller
            </label>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* From date */}
              <div className="relative">
                <input
                  type="date"
                  name="fromDate1"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
                <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>

              {/* To date */}
              <div className="relative">
                <input
                  type="date"
                  name="toDate1"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
                <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* From time */}
              <div className="relative">
                <input
                  type="date"
                  name="fromDate2"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
                <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>

              {/* To AM/PM */}
              <select
                name="toDate2"
                onChange={handleChange}
                className="border rounded-lg p-3"
              >
                <option>To During AM / PM</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Full Day</option>
              </select>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#D8465C] text-white p-3 rounded-lg font-semibold">
              Submit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
