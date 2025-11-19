'use client';

import Image from 'next/image';
import React from 'react';

const features = [
  'Verified Profiles',
  'Smart Filters',
  'Instant Chat',
  'Secure Booking',
  'Language & Interest Match',
  'Traveler Reviews',
  'Flexible Pricing',
  '24/7 Support',
];

const Feature = () => {
  return (
    <div>
      <section className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Packed with features to make <br />
          finding your guide effortless
        </h2>
        <p className="text-gray-500 mb-12">
          Thousands of travelers use our platform to discover trusted
          <br className="hidden md:block" />
          local guides and plan their perfect trip.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 transition"
            >
              <Image src="/trickcircle.svg" alt="tick" width={25} height={25} />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feature;
