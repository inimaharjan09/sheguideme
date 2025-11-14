import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="py-10 text-sm">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-[#D8465C] text-xl mb-4 font-kalnia">
              sheguideme
            </h3>
            <div className="flex gap-3 mb-4">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
              />
              <Image src="/twitter.svg" alt="Twitter" width={16} height={16} />
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
              />
            </div>
            <p className="text-gray-500">
              All guides are carefully screened and verified to ensure safe and
              authentic travel experiences.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-semibold mb-2">Sitemap</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Home</li>
              <li>
                Advance Search{' '}
                <span className="ml-1 text-xs text-[#D8465C] font-semibold">
                  New
                </span>
              </li>
              <li>Success Stories</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-600">
              <li>About Us</li>
              <li>
                Careers{' '}
                <span className="ml-1 text-xs text-[#D8465C] font-semibold">
                  Hiring
                </span>
              </li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Blog</li>
              <li>Webinars</li>
              <li>Case Studies</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-4 text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6">
          <p>© 2025 MynaUI. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
