'use client';

import { X } from 'lucide-react';
import React, { useState } from 'react';

const LoginPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#F3F3F3] w-[90%] max-w-3xl rounded-2xl shadow-lg p-8 text-center relative animate-fadeIn">
            <button
              onClick={() => setShowPopup(false)}
              className="top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="border ">
              <h2 className="text-[40px] ">Login</h2>
              <span className="text-[#929292] text-[16px]">
                Enter your details below to login
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
