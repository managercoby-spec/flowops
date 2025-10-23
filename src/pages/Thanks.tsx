import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Thanks: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f9] flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-[#28a745] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Request Received. Your Savings Analysis is Underway.
            </h1>
            
            <p className="text-xl text-gray-700 mb-12">
              Thank you for starting your cost-optimization journey with FlowOps. Our team is now preparing your customized cost-saving report.
            </p>
            
            <div className="bg-[#f4f7f9] rounded-xl p-8 mb-8 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Personalized Email (4 Business Hours)</h3>
                    <p className="text-gray-700">
                      Expect a personalized email from our Integration Team within <strong>4 business hours</strong> with your custom savings analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quick Integration Call (15 Minutes)</h3>
                    <p className="text-gray-700">
                      We will schedule a quick 15-minute call to ensure seamless API integration with your current provider.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Pilot Environment Access</h3>
                    <p className="text-gray-700">
                      Your Pilot Environment link will be sent shortly after the call, allowing you to start saving immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="bg-[#007bff] text-white px-8 py-3 rounded-lg hover:bg-[#0056b3] transition font-semibold">
                Return to Home
              </Link>
              <a href="mailto:support@flowops.io" className="border-2 border-[#007bff] text-[#007bff] px-8 py-3 rounded-lg hover:bg-[#007bff] hover:text-white transition font-semibold">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Thanks;
