import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ROICalculator: React.FC = () => {
  const [monthlyMessages, setMonthlyMessages] = useState('150000');
  const [costPerMessage, setCostPerMessage] = useState('0.05');
  const [annualSavings, setAnnualSavings] = useState(0);

  useEffect(() => {
    const messages = parseFloat(monthlyMessages) || 0;
    const cost = parseFloat(costPerMessage) || 0;
    const monthlyCost = messages * cost;
    const monthlySavings = monthlyCost * 0.5; // 50% reduction
    const yearlyTotal = monthlySavings * 12;
    setAnnualSavings(yearlyTotal);
  }, [monthlyMessages, costPerMessage]);

  return (
    <section id="pricing-section" className="py-20 bg-gradient-to-br from-[#f4f7f9] to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          The Math is Simple: FlowOps Pays for Itself.
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Calculate your potential savings in seconds
        </p>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Average Monthly Messages
              </label>
              <input
                type="number"
                value={monthlyMessages}
                onChange={(e) => setMonthlyMessages(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#007bff] focus:outline-none text-lg"
                placeholder="150000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Average Cost Per Message ($)
              </label>
              <input
                type="number"
                step="0.001"
                value={costPerMessage}
                onChange={(e) => setCostPerMessage(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#007bff] focus:outline-none text-lg"
                placeholder="0.05"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#28a745] to-[#20c997] rounded-xl p-8 text-center mb-8">
            <p className="text-white text-lg mb-2">Estimated Annual Savings</p>
            <p className="text-white text-5xl md:text-6xl font-bold">
              ${annualSavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </p>
          </div>
          
          <div className="text-center">
            <Link to="/signup" className="bg-[#007bff] text-white px-10 py-4 rounded-lg hover:bg-[#0056b3] transition font-semibold text-lg inline-block">
              Request Custom Savings Report & Pilot Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
