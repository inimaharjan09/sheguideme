'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type DashboardPageProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DashboardPage({ isOpen, onClose }: DashboardPageProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
      <div className="flex items-center justify-center w-full h-screen">
        <div className="bg-[#F3F3F3] w-full max-w-3xl rounded-2xl shadow-lg p-6 md:p-10 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Image src="/cele.svg" alt="cele" width={100} height={100} />

            <h1 className="text-xl font-bold">
              Your Profile Has Been Created 🎉
            </h1>

            <p className="text-gray-600">
              You're all set! Our team will verify your details. Once approved,
              travelers can discover and contact you directly.
            </p>

            <Link href="/profile">
              <button className="bg-[#D8465C] text-white py-2 px-6 rounded-xl hover:bg-[#c43b4f]">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
