import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#f4f7f9] to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Make WhatsApp messages Shorter, Clearer, and Drastically{' '}
              <span className="text-[#28a745] text-6xl md:text-7xl">CHEAPER</span>.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              FlowOps uses proprietary AI to compress long API messages by <strong>~50%</strong> while perfectly preserving tone and intent. Stop paying double for every message.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button onClick={scrollToDemo} className="bg-[#007bff] text-white px-8 py-4 rounded-lg hover:bg-[#0056b3] transition font-semibold text-lg">
                Try Our Live Demo
              </button>
              <Link to="/signup" className="border-2 border-[#007bff] text-[#007bff] px-8 py-4 rounded-lg hover:bg-[#007bff] hover:text-white transition font-semibold text-lg text-center">
                Start Saving Now
              </Link>
            </div>
            
            <p className="text-sm text-gray-600">
              ✨ Join the 100+ businesses optimizing their conversational commerce.
            </p>
          </div>
          
          <div className="relative">
            <img src="https://d64gsuwffb70l.cloudfront.net/68f6d910e7ea85c236674864_1761007940548_2390f09f.webp" alt="FlowOps AI Compression" className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
