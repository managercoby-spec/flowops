import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#007bff]">FlowOps</span>
            <span className="ml-2 text-sm text-gray-600">.io</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#007bff] transition">Home</Link>
            <a href="#pricing-section" onClick={scrollToPricing} className="text-gray-700 hover:text-[#007bff] transition">Pricing</a>
            <a href="#demo-section" onClick={scrollToDemo} className="text-gray-700 hover:text-[#007bff] transition">Try Demo</a>
            <Link to="/signup" className="bg-[#007bff] text-white px-6 py-2 rounded-lg hover:bg-[#0056b3] transition font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
