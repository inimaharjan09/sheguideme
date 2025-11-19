'use client';

import { useState } from 'react';
import { Upload, ChevronDown, X } from 'lucide-react';

const calculateAge = (dobString: string): number | null => {
  if (!dobString) return null;

  const birthDate = new Date(dobString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export default function TravelTwoPage({
  isOpen,
  onClose,
  onContinue,
}: {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}) {
  const [formData, setFormData] = useState({
    profilePicture: '',
    country: 'Select',
    city: '',
    dateOfBirth: '',
    bodyColor: '',
    height: '',
    weight: '',
    gender: 'Select',
    religion: 'Select',
  });
  const calculatedAge = calculateAge(formData.dateOfBirth);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    onContinue();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
      <div className="flex items-center justify-center w-full h-screen mt-30">
        <div className="bg-[#F3F3F3] w-full max-w-3xl rounded-2xl shadow-lg p-4 md:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
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

          <div className="flex justify-center gap-10 mb-5">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 flex items-center justify-center rounded-full border 
            ${
              num === 2
                ? 'bg-[#D8465C] text-white border-[#D8465C]'
                : 'border-gray-300 text-gray-500'
            }`}
              >
                {num}
              </div>
            ))}
          </div>

          <p className="mb-3 text-sm font-semibold">Detail Information</p>

          {/* form */}
          <div className="border-none rounded-xl p-2 shadow-sm bg-white">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full text-left"
            >
              {/* Profile Picture */}
              <div>
                <label className="text-sm font-semibold">Profile Picture</label>
                <div className="flex">
                  <span className="bg-gray-100 border border-r-0 border-[#CED4DA] px-4 py-2 rounded-l-lg text-gray-600">
                    Choose File
                  </span>
                  <input
                    required
                    type="file"
                    placeholder="Upload"
                    className="flex-1 border rounded-r-lg px-4 py-2 outline-none border-[#CED4DA] focus:border-pink-500"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Upload up to 5 photos (at least 2 full photos)
                </p>
              </div>

              {/* Country */}
              <div>
                <label className="text-sm font-semibold">Country</label>
                <div className="relative mt-1">
                  <select
                    required
                    className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 appearance-none outline-none"
                  >
                    <option>Nepal</option>
                    <option>China</option>
                    <option>India</option>
                    <option>Mexico</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-semibold">City</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Kathmandu"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 mt-1 outline-none"
                />
              </div>

              {/* Date birth */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">
                    Date of Birth / Age
                    {/* Display the calculated age */}
                    {calculatedAge !== null && calculatedAge > 0 && (
                      <span className="ml-2 text-pink-600">
                        ({calculatedAge} years old)
                      </span>
                    )}
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData({ ...formData, dateOfBirth: e.target.value })
                    }
                    className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 mt-1 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Body Color</label>
                  <div className="relative mt-1">
                    <select
                      required
                      className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 appearance-none outline-none"
                    >
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
                    required
                    type="text"
                    placeholder="5'8"
                    value={formData.height}
                    onChange={(e) =>
                      setFormData({ ...formData, height: e.target.value })
                    }
                    className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 mt-1 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Weight (in kg)
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="70"
                    value={formData.weight}
                    onChange={(e) =>
                      setFormData({ ...formData, weight: e.target.value })
                    }
                    className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 mt-1 outline-none"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="text-sm font-semibold">Gender</label>
                <div className="relative mt-1">
                  <select
                    required
                    name="gender"
                    className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 appearance-none outline-none"
                  >
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
                  <select
                    required
                    className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 appearance-none outline-none"
                  >
                    <option>Religion (Optional)</option>
                    <option>All of respect and accommodated</option>
                    <option>Hindu</option>
                    <option>Christian</option>
                    <option>Buddhist</option>
                    <option>Judaism</option>
                    <option>Islam</option>
                    <option>Other Specify</option>
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
