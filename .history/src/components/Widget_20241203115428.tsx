// src/App.tsx
import React from "react";
import {
  FaEnvelope,
  FaUser,
  FaSearch,
  FaCreditCard,
  FaHome,
  FaMoneyCheck,
} from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 shadow-md flex items-center justify-between">
        <div className="text-xl font-bold">Good morning Advait</div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaEnvelope className="text-gray-700 text-2xl" />
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              5
            </div>
          </div>
          <FaUser className="text-gray-700 text-2xl" />
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white flex justify-around py-2 shadow-md">
        <button className="px-4 py-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-200">
          Summary
        </button>
        <button className="px-4 py-2 text-white font-semibold rounded-lg bg-black">
          Everyday
        </button>
        <button className="px-4 py-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-200">
          Save & Invest
        </button>
      </div>

      {/* Current Accounts */}
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">
          Current accounts
        </h2>
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-gray-900">Club Lloyds</h3>
              <p className="text-gray-600 text-sm">77-19-14 / 48968960</p>
            </div>
            <div>...</div>
          </div>
          <p className="text-3xl font-bold mt-4">£3,462.32</p>
          <div className="flex justify-between mt-4">
            <button className="w-1/2 text-center py-2 bg-gray-100 font-semibold rounded-lg mr-2">
              Pay & transfer
            </button>
            <button className="w-1/2 text-center py-2 bg-gray-100 font-semibold rounded-lg ml-2">
              Regular payments
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white shadow-md rounded-lg p-4 mt-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center">
              <FaMoneyCheck className="text-white text-xl" />
            </div>
            <div>
              <h4 className="text-gray-900 font-bold">
                Your money - past, present and future
              </h4>
              <p className="text-gray-600 text-sm">
                Plan ahead for upcoming bills and spot spending trends to keep
                your balance on track.
              </p>
            </div>
          </div>
          <button className="mt-4 text-blue-600 font-semibold flex items-center">
            View your upcoming payments
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="bg-white shadow-md fixed bottom-0 w-full flex justify-between px-4 py-2">
        <button className="flex flex-col items-center">
          <FaHome className="text-gray-700 text-xl" />
          <span className="text-gray-700 text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <FaSearch className="text-gray-700 text-xl" />
          <span className="text-gray-700 text-sm">Search</span>
        </button>
        <button className="flex flex-col items-center">
          <FaCreditCard className="text-gray-700 text-xl" />
          <span className="text-gray-700 text-sm">Cards</span>
        </button>
      </footer>
    </div>
  );
};

export default Widget;
