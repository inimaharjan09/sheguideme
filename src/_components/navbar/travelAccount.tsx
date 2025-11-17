'use client';

import { Calendar, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type TravelerPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  fullName: string;
  userName: string;
  contactNumber: string;
  emailAddress: string;
  alternateEmail?: string;
  availableDaysTime: Date | null;
  preferredContactTime: string;
};

type ValidationErrors = Partial<Record<keyof FormData, string>>;

export default function TravelAccount({ isOpen, onClose }: TravelerPopupProps) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    userName: '',
    contactNumber: '',
    emailAddress: '',
    alternateEmail: '',
    availableDaysTime: null,
    preferredContactTime: '',
  });

  const handleChange = (field: keyof FormData, value: string | Date | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push('/travel2');

    // try {
    //   const res = await fetch('/api/profile', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     alert('Profile saved successfully!');
    //     onClose();
    //   } else {
    //     alert(data.error || 'Failed to save profile');
    //   }
    // } catch (err) {
    //   console.error(err);
    //   alert('Something went wrong, please try again.');
    // }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 w-full flex items-center justify-center bg-black/50 z-50">
      <div className="flex items-center justify-center w-full h-screen mt-48">
        <div className="bg-[#F3F3F3] w-full max-w-3xl inset-0 rounded-2xl mt-78 shadow-lg p-4 md:p-8 relative animate-fadeIn">
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

          <p className="mb-8 text-sm font-semibold">Basic Information</p>

          {/* Form */}
          <div className="border-none rounded-xl p-2 shadow-sm bg-white">
            <form onSubmit={formHandle} className="space-y-6 w-full text-left">
              <div>
                <label className="text-sm font-semibold">Full Name</label>
                <input
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  type="text"
                  value={formData.fullName}
                  placeholder="e.g., Sanjana Sharma"
                  className="w-full border rounded-lg px-4 py-2 mt-1 outline-none border-gray-300 focus:border-pink-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">User Name</label>
                <input
                  onChange={(e) => handleChange('userName', e.target.value)}
                  type="text"
                  value={formData.userName}
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
                    onChange={(e) =>
                      handleChange('contactNumber', e.target.value)
                    }
                    value={formData.contactNumber}
                    type="text"
                    placeholder="98********"
                    className="flex-1 border rounded-r-lg px-4 py-2 outline-none border-gray-300 focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">Email Address</label>
                <input
                  onChange={(e) => handleChange('emailAddress', e.target.value)}
                  value={formData.emailAddress}
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
                  onChange={(e) =>
                    handleChange('alternateEmail', e.target.value)
                  }
                  value={formData.alternateEmail}
                  type="email"
                  placeholder="e.g., rameshguide@gmail.com"
                  className="w-full border rounded-lg px-4 py-2 mt-1 outline-none border-gray-300 focus:border-pink-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Available Days & Time
                </label>
                <div className="relative w-full border border-gray-300 focus:border-pink-500 rounded-lg mt-1 outline-none px-4 py-2 ">
                  <ReactDatePicker
                    selected={formData.availableDaysTime}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    placeholderText="Select a date"
                    dateFormat="dd/MM/yyyy"
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
                  value={formData.preferredContactTime}
                  onChange={(e) =>
                    handleChange('preferredContactTime', e.target.value)
                  }
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
    </div>
  );
}
