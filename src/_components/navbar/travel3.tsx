'use client';

import { useState } from 'react';
import { Upload, ChevronDown } from 'lucide-react';

export default function TravelThreePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-1">
        Create Your <span className="text-[#D8465C]">Traveler Account</span>
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Create your account to discover trusted local guides and explore the
        world your way.
      </p>
      <div className="flex justify-center gap-10 mb-10">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`w-8 h-8 flex items-center justify-center rounded-full border 
            ${
              num === 3
                ? 'bg-[#D8465C] text-white border-[#D8465C]'
                : 'border-gray-300 text-gray-500'
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      <p className="text-sm font-semibold mb-3">Education and Certification</p>

      <div className="border-none rounded-xl p-2 shadow-sm bg-white">
        <form onSubmit={handleSubmit} className="space-y-6 w-full text-left">
          {/* Education Qualification */}
          <div>
            <label className="text-sm font-semibold">
              Education Qualification
            </label>
            <div className="relative mt-1">
              <select className="w-full border rounded-lg px-4 py-2 appearance-none outline-none">
                <option>Select</option>
                <option>High School</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Education Area */}
          <div>
            <label className="text-sm font-semibold">Education Area</label>
            <input
              type="text"
              placeholder="e.g. Medical, Tourism, Engineering..."
              className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
            />
          </div>

          {/* Specific Training Certificates */}
          <div>
            <label className="text-sm font-semibold">
              Specific Training Certificate
            </label>

            {trainingCerts.map((cert, index) => (
              <input
                key={index}
                type="text"
                value={cert}
                onChange={(e) =>
                  handleTrainingCertChange(index, e.target.value)
                }
                placeholder="can write 30 letters in box"
                className="w-full border rounded-lg px-4 py-2 mt-3 outline-none"
              />
            ))}
          </div>

          {/* Guide & Service Experience */}
          <div>
            <label className="text-sm font-semibold">
              Guide and Service Experience
            </label>
            <div className="flex flex-col mt-1 border rounded-lg p-3">
              <input type="file" className="text-sm" />
              <p className="text-xs text-gray-500 mt-1">
                Upload up to 5 PDF files
              </p>
            </div>
          </div>

          {/* Short Bio / Resume */}
          <div>
            <label className="text-sm font-semibold">
              Short Bio Data / Resume
            </label>
            <div className="flex flex-col mt-1 border rounded-lg p-3">
              <input type="file" className="text-sm" />
              <p className="text-xs text-gray-500 mt-1">Upload Resume</p>
            </div>
          </div>

          {/* Own Vehicle */}
          <div>
            <label className="text-sm font-semibold">
              Do you have owned vehicle?
            </label>
            <div className="flex items-center gap-6 mt-1 text-sm">
              <label className="flex items-center gap-1">
                <input type="radio" name="ownedVehicle" /> Yes
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="ownedVehicle" /> No
              </label>
            </div>
          </div>

          {/* Provide Hired Vehicle */}
          <div>
            <label className="text-sm font-semibold">
              Do you provide a hired vehicle?
            </label>
            <div className="flex items-center gap-6 mt-1 text-sm">
              <label className="flex items-center gap-1">
                <input type="radio" name="hiredVehicle" /> Yes
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="hiredVehicle" /> No
              </label>
            </div>
          </div>

          {/* Service Charge */}
          <div>
            <label className="text-sm font-semibold">Service Charge</label>
            <input
              type="text"
              placeholder="Per hours"
              className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D8465C] text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition"
          >
            Submit Education and Certification
          </button>
        </form>
      </div>
    </div>
  );
}
