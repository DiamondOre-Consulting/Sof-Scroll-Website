import React from 'react';
import makhana from '../assets/productAssets/makhana.png';
import { Link } from 'react-router-dom';

const MakhanaSection = () => {
 

  return (
    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${makhana})` }}>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via- to-transparent  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-md text-left">
            <h2 className="text-5xl font-bold text-white mb-4">Nutzz Magic</h2>
            <p className="text-lg text-gray-50 mb-6">
              Discover the magic of Makhana—nature's superfood. A crunchy, wholesome treat bursting with flavor, health, and versatility. Perfect for every snack moment!
            </p>
            <Link to={'/Nuts-Megic/SS114'}  className="px-6 py-3 bg-white text-gray-800 text-lg font-semibold rounded-md  transition">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakhanaSection;
