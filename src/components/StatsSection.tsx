import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: '100+', label: 'Active Businesses', color: 'text-[#007bff]' },
    { value: '50M+', label: 'Messages Compressed', color: 'text-[#007bff]' },
    { value: '$2.5M+', label: 'Total Savings Generated', color: 'text-[#28a745]' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-[#007bff]' }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
