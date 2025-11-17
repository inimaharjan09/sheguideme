'use client';
import { useState } from 'react';
import { Globe, Menu, Search } from 'lucide-react';
import NewAccount from './newAccount';
import TravelAccount from './travelAccount';
import LoginPage from './loginPage';
import TravelTwoPage from '../../app/travel2/travel2';

export default function Navbar() {
  const [language, setLanguage] = useState('Language');
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNewAccount, setShowNewAccount] = useState(false);
  const [showTravelAccount, setShowTravelAccount] = useState(false);
  const [showTravelTwoPage, setShowTravelTwoPage] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex sticky top-0 items-center justify-between px-5 md:px-10 py-4 bg-white shadow-sm z-50">
        <div className="text-[28px] md:text-[32px] font-kalnia font-semibold text-[#D8465C]">
          sheguideme
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center border-[#F3F3F3] rounded-full bg-white flex-1 mx-5">
          <Search size={24} className="ml-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-[16px] md:text-[20px] outline-none rounded-l-full"
          />
          <button className="bg-[#D8465C] rounded-3xl text-white px-4 py-2 text-[14px] hover:bg-rose-600">
            Search
          </button>

          {showPopup && (
            <div className="flex gap-3 items-center justify-center px-5">
              <span className="text-lg text-red-500">Browse Profile By </span>
              <span>Help</span>
              <button
                onClick={handleLogin}
                className="border px-3 py-1 rounded hover:bg-gray-50"
              >
                Login
              </button>
              <button className="flex items-center gap-1">
                <Globe size={20} />
                {language}
              </button>
            </div>
          )}
        </div>

        {/* Desktop right side */}
        {!showPopup && (
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-rose-500">
              <Globe size={20} /> {language}
            </button>

            <button
              onClick={() => setShowNewAccount(true)}
              className="bg-[#D8465C] text-white px-4 py-1.5 rounded text-[16px] md:text-[20px] hover:bg-rose-600 transition"
            >
              Create New Account
            </button>

            <button
              onClick={handleLogin}
              className="border border-[#D8465C] text-[#D8465C] px-4 py-1.5 rounded text-[16px] md:text-[20px] hover:bg-rose-50 transition"
            >
              Login
            </button>
          </div>
        )}

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-rose-500"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-5 py-4 flex flex-col gap-3 z-50">
          <button className="flex items-center gap-1 text-gray-700 hover:text-rose-500">
            <Globe size={20} /> {language}
          </button>

          <button
            onClick={() => {
              setShowNewAccount(true);
              setMenuOpen(false);
            }}
            className="bg-[#D8465C] text-white px-4 py-2 rounded hover:bg-rose-600"
          >
            Create New Account
          </button>

          <button
            onClick={() => {
              setShowLoginForm(true);
              setMenuOpen(false);
            }}
            className="border border-[#D8465C] text-[#D8465C] px-4 py-2 rounded hover:bg-rose-50"
          >
            Login
          </button>
        </div>
      )}

      {/* Modals */}
      {showNewAccount && (
        <NewAccount
          isOpen={showNewAccount}
          onClose={() => setShowNewAccount(false)}
          onContinue={() => {
            setShowNewAccount(false);
            setShowTravelAccount(true);
          }}
        />
      )}

      {showTravelAccount && (
        <TravelAccount
          isOpen={showTravelAccount}
          onClose={() => setShowTravelAccount(false)}
        />
      )}

      {showTravelTwoPage && (
        <TravelTwoPage
        // isOpen={showTravelTwoPage}
        // onClose={() => setShowTravelTwoPage(false)}
        />
      )}

      {showLoginForm && <LoginPage onClose={() => setShowLoginForm(false)} />}
    </>
  );
}
