'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const accountTypes = [
  {
    id: 'traveler',
    title: 'Traveler & Customer',
    desc: 'Local travel guide & service provider',
    icon: '/carrybag.svg',
  },
  {
    id: 'service',
    title: 'Service Provider',
    desc: 'Grow booking the different types of services',
    icon: '/mappin.svg',
  },
  {
    id: 'guide',
    title: 'Travel Guide',
    desc: 'Become a trusted local guide and host travellers.',
    icon: '/hiking.svg',
  },
];

export default function NewAccount({ isOpen, onClose, onContinue }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-[#F3F3F3] w-full max-w-3xl rounded-2xl shadow-lg p-6 md:p-8 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-[#929292] text-sm mb-1">Who are you?</h2>
        <h1 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
          Create New Account
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 mb-6 md:mb-8">
          {accountTypes.map((opt) => (
            <div
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`w-full md:w-1/3 border rounded-xl p-4 md:p-6 cursor-pointer transition hover:shadow-md ${
                selected === opt.id
                  ? 'border-pink-500 text-[#D8465C]'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex justify-center items-center mb-3 md:mb-4">
                <Image src={opt.icon} alt={opt.title} width={50} height={50} />
              </div>
              <h3 className="font-semibold">{opt.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{opt.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border hover:bg-gray-100"
          >
            Back
          </button>
          <button
            onClick={onContinue}
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
      </div>
    </div>
  );
}
