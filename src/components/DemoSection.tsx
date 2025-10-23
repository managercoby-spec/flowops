import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DemoSection: React.FC = () => {
  const [inputText, setInputText] = useState(
    "Dear valued customer, we are pleased to inform you that your order #12345 has been successfully processed and is now being prepared for shipment. Our logistics team is working diligently to ensure your package arrives safely. You will receive a tracking number within the next 24-48 hours via email and SMS notification. Thank you for choosing our services."
  );
  
  const [outputText] = useState(
    "Order #12345 processed & ready for shipment. Tracking # sent via email/SMS in 24-48hrs. Thanks for choosing us!"
  );
  
  const calculateReduction = () => {
    const reduction = ((inputText.length - outputText.length) / inputText.length * 100).toFixed(0);
    return reduction;
  };

  return (
    <section id="demo-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          See the 50% Difference. Instantly.
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Watch how FlowOps compresses your messages while preserving meaning
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Original Message
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-[#007bff] focus:outline-none resize-none"
              placeholder="Paste your long WhatsApp message here..."
            />
            <p className="text-sm text-gray-600 mt-2">Characters: {inputText.length}</p>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              FlowOps Compressed (Message Sent)
            </label>
            <textarea
              value={outputText}
              readOnly
              className="w-full h-64 p-4 border-2 border-[#28a745] rounded-lg bg-green-50 resize-none"
            />
            <p className="text-sm text-gray-600 mt-2">Characters: {outputText.length}</p>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <div className="inline-block bg-[#28a745] text-white px-8 py-4 rounded-lg text-2xl font-bold">
            {calculateReduction()}% Reduction Achieved
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/signup" className="bg-[#007bff] text-white px-10 py-4 rounded-lg hover:bg-[#0056b3] transition font-semibold text-lg inline-block">
            I'm Convinced, Start My Free Pilot
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
