'use client';

import { useState } from 'react';
import { Upload, ChevronDown, X } from 'lucide-react';

const trainingCerts = [
  { cert: 'Can write 30 letters in Box' },
  { cert: 'Can write 30 letters in Box' },
  { cert: 'Can write 30 letters in Box' },
];

export default function TravelThreePage({
  isOpen,
  onClose,
  onContinue,
}: {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [certificates, setCertificates] = useState(trainingCerts);

  const [formData, setFormData] = useState({
    educationQualification: 'Select',
    educationArea: '',
    ownedVehicle: '',
    hiredVehicle: '',
    serviceCharge: '',
  });

  const handleTrainingCertChange = (index: number, value: string) => {
    setCertificates((prev) => {
      const updated = [...prev];
      updated[index].cert = value;
      return updated;
    });
  };

  const handleFormChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted', {
      ...formData,
      certificates,
    });
    onContinue();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
      <div className="flex items-center justify-center w-full h-screen mt-30">
        <div className="bg-[#F3F3F3] w-full max-w-3xl rounded-2xl shadow-lg p-4 md:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-end hover:cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center mb-1">
            Create Your <span className="text-[#D8465C]">Traveler Account</span>
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Create your account to discover trusted local guides and explore the
            world your way.
          </p>

          {/* PROGRESS STEPPER */}
          <div className="flex justify-center gap-10 mb-5">
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

          <p className="text-sm font-semibold mb-3">
            Education and Certification
          </p>

          <div className="border-none rounded-xl p-2 shadow-sm bg-white">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full text-left"
            >
              {/* Education Qualification */}
              <div>
                <label className="text-sm font-semibold">
                  Education Qualification
                </label>
                <div className="relative mt-1">
                  <select
                    value={formData.educationQualification}
                    onChange={(e) =>
                      handleFormChange('educationQualification', e.target.value)
                    }
                    required
                    className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 appearance-none outline-none"
                  >
                    <option>Select</option>
                    <option>Upto Grade 10 (Under High School)</option>
                    <option>Upto Grade (10+2- High School)</option>
                    <option>Bachelor (under graduate Degree)</option>
                    <option>Master (Graduate Degree )</option>
                    <option>Doctoral Degree (PhD)</option>
                    <option>Post Doctoral Degree</option>
                    <option>Other Specify</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              {/* Education Area */}
              <div>
                <label className="text-sm font-semibold">Education Area</label>
                <input
                  value={formData.educationArea}
                  onChange={(e) =>
                    handleFormChange('educationArea', e.target.value)
                  }
                  required
                  type="text"
                  placeholder="e.g. Medical, Tourism, Engineering..."
                  className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 mt-1 outline-none"
                />
              </div>

              {/* Training Certificates */}
              <div>
                <label className="text-sm font-semibold">
                  Specific Training Certificate
                </label>

                {certificates.map((cert, index) => (
                  <input
                    required
                    key={index}
                    type="text"
                    value={cert.cert}
                    onChange={(e) =>
                      handleTrainingCertChange(index, e.target.value)
                    }
                    placeholder="can write 30 letters in box"
                    className="w-full border border-[#CED4DA] rounded-lg text-[#6C757D] px-4 py-2 mt-3 outline-none"
                  />
                ))}
              </div>

              {/* Guide & Service Experience */}
              <div>
                <label className="text-sm font-semibold">
                  Guide and Service Experience
                </label>
                <div className="flex flex-col mt-1 border border-[#CED4DA] rounded-lg p-3">
                  <input required type="file" className="text-sm" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Upload up to 5 PDF files
                </p>
              </div>

              {/* Resume */}
              <div>
                <label className="text-sm font-semibold">
                  Short Bio Data / Resume
                </label>
                <div className="flex flex-col mt-1 border border-[#CED4DA] rounded-lg p-3">
                  <input type="file" className="text-sm" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Upload Resume</p>
              </div>

              {/* Own Vehicle */}
              <div>
                <label className="text-sm font-semibold">
                  Do you have owned vehicle?
                </label>
                <div className="flex items-center gap-6 mt-1 text-sm">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="ownedVehicle"
                      value="yes"
                      onChange={(e) =>
                        handleFormChange('ownedVehicle', e.target.value)
                      }
                    />{' '}
                    Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="ownedVehicle"
                      value="no"
                      onChange={(e) =>
                        handleFormChange('ownedVehicle', e.target.value)
                      }
                    />{' '}
                    No
                  </label>
                </div>
              </div>

              {/* Hired Vehicle */}
              <div>
                <label className="text-sm font-semibold">
                  Do you provide a hired vehicle?
                </label>
                <div className="flex items-center gap-6 mt-1 text-sm">
                  <label className="flex items-center gap-1">
                    <input
                      required
                      type="radio"
                      name="hiredVehicle"
                      value="yes"
                      onChange={(e) =>
                        handleFormChange('hiredVehicle', e.target.value)
                      }
                    />{' '}
                    Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      required
                      type="radio"
                      name="hiredVehicle"
                      value="no"
                      onChange={(e) =>
                        handleFormChange('hiredVehicle', e.target.value)
                      }
                    />{' '}
                    No
                  </label>
                </div>
              </div>

              {/* Service Charge */}
              <div>
                <label className="text-sm font-semibold">Service Charge</label>
                <input
                  required
                  type="text"
                  value={formData.serviceCharge}
                  onChange={(e) =>
                    handleFormChange('serviceCharge', e.target.value)
                  }
                  placeholder="Per hour"
                  className="w-full border border-[#CED4DA] rounded-lg px-4 py-2 mt-1 outline-none"
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
      </div>
    </div>
  );
}
