'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

type FormData = {
  hobbies: string;
  citySpots: string;
  villageSpots: string;
  otherOfferings: string;
  fromDate1: string;
  toDate1: string;
  fromDate2: string;
  toDate2: string;
  images: FileList | null;
};

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
  const [formData, setFormData] = useState<FormData>({
    hobbies: '',
    citySpots: '',
    villageSpots: '',
    otherOfferings: '',
    fromDate1: '',
    toDate1: '',
    fromDate2: '',
    toDate2: '',
    images: 'null' as unknown as FileList,
  });
  const formHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
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
                required
                value={formData.hobbies}
                onChange={(e) =>
                  setFormData({ ...formData, hobbies: e.target.value })
                }
                className="w-full border border-[#CED4DA] rounded-lg p-3 mb-4"
              >
                <option>Select</option>
                <option>Travelling and school volunteering</option>
                <option>Travelling and rural community support</option>
                <option>
                  Volunteer teaching and skill transfer olunteer teaching and
                  skill transfer
                </option>
                <option>Sport club and playing </option>
                <option>Hotel reservation and guide service</option>
                <option>Home stay and service charge</option>
                <option>Owned flat and service charge</option>
                <option>Rented house and service charge</option>
                <option>Business outlet and service charge</option>
              </select>

              {/* City Spots */}
              <label className="block text-sm font-semibold mb-1">
                Typical offering city spots
              </label>
              <select
                value={formData.citySpots}
                onChange={(e) =>
                  setFormData({ ...formData, citySpots: e.target.value })
                }
                required
                className="w-full border border-[#CED4DA] rounded-lg p-3 mb-4"
              >
                <option>Select</option>
              </select>

              {/* Images */}
              <label className="text-sm font-semibold">Upload Images</label>
              <input
                required
                type="file"
                multiple
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    images: e.target.files,
                  }))
                }
                className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 mt-1 outline-none"
              />
              <p className="text-xs text-gray-400 mt-1">
                Upload up to 5 photos
              </p>

              {/* Village Spots */}
              <label className="block text-sm font-semibold mb-1">
                Typical offering village spots
              </label>
              <select
                value={formData.villageSpots}
                onChange={(e) =>
                  setFormData({ ...formData, villageSpots: e.target.value })
                }
                required
                className="w-full border border-[#CED4DA] rounded-lg p-3 mb-4"
              >
                <option>Select</option>
              </select>

              {/* Other Offerings */}
              <label className="block text-sm font-semibold mb-1">
                Other Offerings (Landmarks / Places)
              </label>
              <input
                required
                value={formData.otherOfferings}
                onChange={(e) =>
                  setFormData({ ...formData, otherOfferings: e.target.value })
                }
                type="text"
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
                  required
                  value={formData.fromDate1}
                  onChange={(e) =>
                    setFormData({ ...formData, fromDate1: e.target.value })
                  }
                  type="date"
                  className="w-full border border-[#CED4DA] rounded-lg p-3"
                />
                <input
                  required
                  value={formData.toDate1}
                  onChange={(e) =>
                    setFormData({ ...formData, toDate1: e.target.value })
                  }
                  type="date"
                  className="w-full border border-[#CED4DA] rounded-lg p-3"
                />
              </div>

              {/* Time */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  required
                  value={formData.fromDate2}
                  onChange={(e) =>
                    setFormData({ ...formData, fromDate2: e.target.value })
                  }
                  type="time"
                  className="border border-[#CED4DA] rounded-lg p-3"
                />
                <input
                  required
                  value={formData.toDate2}
                  onChange={(e) =>
                    setFormData({ ...formData, toDate2: e.target.value })
                  }
                  type="time"
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
