'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const accountTypes = [
  {
    id: 'traveler',
    title: 'Traveler & Customer',
    desc: 'Local travel guide & service provider',
    icon: '/carrybag.svg',
  },
  {
    id: 'service',
    title: 'All type of Service Provider',
    desc: 'Grow booking the different types of services',
    icon: '/mappin.svg',
  },
  {
    id: 'guide',
    title: 'Female & Male Travel Guide',
    desc: 'Become a trusted local guide and host travellers.',
    icon: '/hiking.svg',
  },
];

const AccountPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();
  const handleContinue = () => {
    if (!selected) return;
    setShowPopup(false);
    router.push('/account');
  };
  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#F3F3F3] w-[90%] max-w-3xl rounded-2xl shadow-lg p-8 text-center relative animate-fadeIn">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h2 className="text-[#929292] text-sm mb-1">Who are you?</h2>
            <h1 className="text-2xl font-bold mb-8">Create New Account</h1>

            <div className="flex flex-col md:flex-row justify-center gap-5 mb-8">
              {accountTypes.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`w-full md:w-1/3 border rounded-xl p-6 cursor-pointer transition hover:shadow-md ${
                    selected === opt.id
                      ? 'border-pink-500 text-[#D8465C]'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-center items-center mb-4">
                    <Image
                      src={opt.icon}
                      alt={opt.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="font-semibold">{opt.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{opt.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-5 py-2 rounded-lg border hover:bg-gray-100"
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                disabled={!selected}
                className={`px-5 py-2 rounded-lg text-white transition ${
                  selected
                    ? 'bg-[#D8465C] hover:bg-rose-600 cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>

            <p className="text-sm text-[#929292] mt-5">
              Already have an account?{' '}
              <a href="#" className="text-[#D8465C] hover:cursor-pointer">
                Sign in
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
