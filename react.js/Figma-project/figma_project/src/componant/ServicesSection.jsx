import React from 'react';
import { FaPaintBrush, FaRegLightbulb, FaObjectGroup, FaRegGem } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Awesome Services</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 text-center shadow rounded">
          <FaPaintBrush className="text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Creating user-friendly interfaces for your applications.</p>
        </div>
        <div className="bg-white p-8 text-center shadow rounded">
          <FaObjectGroup className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
          <p className="text-gray-600">Designing stunning graphics for your brand.</p>
        </div>
        <div className="bg-white p-8 text-center shadow rounded">
          <FaRegLightbulb className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Product Design</h3>
          <p className="text-gray-600">Innovative product design solutions.</p>
        </div>
        <div className="bg-white p-8 text-center shadow rounded">
          <FaRegGem className="text-4xl text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
          <p className="text-gray-600">Building a strong brand identity for your business.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
