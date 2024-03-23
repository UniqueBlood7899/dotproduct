// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Yes = () => {
  const [proofType, setProofType] = useState('');
  const [proofFiles, setProofFiles] = useState([]);

  const handleProofTypeChange = (e) => {
    setProofType(e.target.value);
  };

  const handleProofFileChange = (e) => {
    const files = Array.from(e.target.files);
    setProofFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const removeProofFile = (index) => {
    setProofFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-white mb-6">Upload Proof</h1>
        <div className="mb-4">
          <label htmlFor="proofType" className="block font-semibold text-white mb-2">
            Proof Type
          </label>
          <select
            id="proofType"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={proofType}
            onChange={handleProofTypeChange}
          >
            <option value="">Select Proof Type</option>
            <option value="video">Video</option>
            <option value="image">Image</option>
            <option value="audio">Audio</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="proofFiles" className="block font-semibold text-white mb-2">
            Proof Files
          </label>
          <input
            type="file"
            id="proofFiles"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            multiple
            onChange={handleProofFileChange}
          />
          {proofFiles.length > 0 && (
            <ul className="mt-4">
              {proofFiles.map((file, index) => (
                <li key={index} className="flex items-center justify-between mb-2 text-white">
                  <span>{file.name}</span>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeProofFile(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="button"
          className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-50 transition-colors duration-300"
        >
          Submit Proof
        </button>
      </div>
    </div>
  );
};

export default Yes;