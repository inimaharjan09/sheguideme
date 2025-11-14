'use client';

import { Calendar, X } from 'lucide-react';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type TravelerPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function TravelerPopup({ isOpen, onClose }: TravelerPopupProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#F3F3F3] w-[95%] max-w-2xl rounded-2xl shadow-lg p-10 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-end hover:cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Create Your <span className="text-[#D8465C]">Traveler Account</span>
        </h1>

        <p className="text-center text-[#929292] mb-8 text-sm">
          Create your account to discover trusted local guides and explore the
          world your way.
        </p>

        <p className="mb-8 text-sm">Basic Information</p>

        {/* Form */}
        <div className="border-none rounded-xl p-2 shadow-sm bg-white">
          <form className="space-y-6 w-full text-left">
            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="e.g., Sanjana Sharma"
                className="w-full border rounded-lg px-4 py-2 mt-1 outline-none border-gray-300 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">User Name</label>
              <input
                type="text"
                placeholder="e.g., Sanjana"
                className="w-full border rounded-lg px-4 py-2 mt-1 outline-none border-gray-300 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Contact Number</label>
              <div className="flex">
                <span className="bg-gray-100 border border-r-0 border-gray-300 px-4 py-2 rounded-l-lg text-gray-600">
                  +977
                </span>
                <input
                  type="text"
                  placeholder="98********"
                  className="flex-1 border rounded-r-lg px-4 py-2 outline-none border-gray-300 focus:border-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="e.g., rameshguide@gmail.com"
                className="w-full border rounded-lg px-4 py-2 mt-1 outline-none border-gray-300 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Alternate Email (optional)
              </label>
              <input
                type="email"
                placeholder="e.g., rameshguide@gmail.com"
                className="w-full border rounded-lg px-4 py-2 mt-1 outline-none border-gray-300 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Available Days & Time
              </label>
              <div className="relative">
                <ReactDatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  placeholderText="Select a date"
                  dateFormat="dd/MM/yyyy"
                  className="w-full border rounded-lg px-4 py-2 mt-1 outline-none border-gray-300 focus:border-pink-500"
                />
                <Calendar
                  className="absolute right-3 top-[55%] -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Preferred Contact Time
              </label>
              <input
                type="text"
                placeholder="e.g., During AM / PM"
                className="w-full border rounded-lg px-4 py-2 mt-1 outline-none border-gray-300 focus:border-pink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D8465C] text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition"
            >
              Submit Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
