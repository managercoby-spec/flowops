import React from 'react';

interface FeatureCardProps {
  icon: string;
  headline: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, headline, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="w-20 h-20 mb-6 mx-auto">
        <img src={icon} alt={headline} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{headline}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
