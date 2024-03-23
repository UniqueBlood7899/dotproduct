import React from 'react';
import { Link } from 'react-router-dom';

const ReportComplaint = () => {
  const [hasProof, setHasProof] = React.useState(null);
  const [complaintDetails, setComplaintDetails] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');

  const handleProofChange = (value) => {
    if (complaintDetails && location && date && time) {
      setHasProof(value);
    } else {
      alert('Please fill in all the fields before proceeding.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Report a Complaint</h1>
        <div>
          <div className="mb-4">
            <label htmlFor="complaint" className="block font-semibold text-gray-700 mb-2">
              Complaint Details
            </label>
            <textarea
              id="complaint"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Enter your complaint details..."
              value={complaintDetails}
              onChange={(e) => setComplaintDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block font-semibold text-gray-700 mb-2">
              Location of Incident
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <div className="mr-4">
              <label htmlFor="date" className="block font-semibold text-gray-700 mb-2">
                Date of Incident
              </label>
              <input
                type="date"
                id="date"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-semibold text-gray-700 mb-2">
                Time of Incident
              </label>
              <input
                type="time"
                id="time"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="hasProof" className="font-semibold text-gray-700 mr-4">
              Do you have proof regarding the crime?
            </label>
            {(complaintDetails && location && date && time) ? (
              <Link
                to="/yes"
                className="py-2 px-4 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
              >
                Yes
              </Link>
            ) : (
              <button
                type="button"
                className="py-2 px-4 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
                onClick={() => handleProofChange(true)}
                disabled
              >
                Yes
              </button>
            )}
            <button
              type="button"
              className={`ml-2 py-2 px-4 rounded-md ${
                hasProof === false
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors duration-300`}
              onClick={() => handleProofChange(false)}
              disabled={complaintDetails && location && date && time ? false : true}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportComplaint;