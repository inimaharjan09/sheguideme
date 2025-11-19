'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
      <div className="flex items-center justify-center w-full h-screen mt-30">
        <div className="bg-[#F3F3F3] w-full max-w-3xl rounded-2xl shadow-lg p-4 md:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <div className="border-none bg-white rounded-2xl px-10 py-5">
            <h2 className="text-[40px] font-semibold text-gray-800">Login</h2>
            <p className="text-sm text-gray-500 mb-6">
              Enter your details below to login
            </p>

            <form onSubmit={handleSubmit}>
              {' '}
              <label className="text-sm text-gray-700">
                Email or Phone Number
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="text"
                placeholder="Email or Phone Number"
                className="w-full mt-1 mb-4 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-rose-400"
                value={email}
              />
              <label className="text-sm text-gray-700">Password</label>
              <input
                required
                type="password"
                placeholder="************"
                className="w-full mt-1 mb-4 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-rose-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="w-full bg-[#D8465C] text-white py-2 rounded-lg font-medium hover:bg-rose-600 transition">
                Login
              </button>
              <a
                href="https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID.apps.googleusercontent.com&redirect_uri=http://localhost:3000/auth/google/callback&response_type=code&scope=email%20profile&state=random_string_for_security"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full mt-3 border py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                  Login with Google
                </button>
              </a>
              <div className="mt-5 text-sm">
                <p>
                  Don't have an account?{' '}
                  <span className="font-medium cursor-pointer">Sign up</span>
                </p>
                <p className="mt-2 cursor-pointer">Forgot your password?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
