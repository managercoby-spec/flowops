import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f9] flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: October 21, 2025</p>
            
            <div className="bg-[#28a745] bg-opacity-10 border-l-4 border-[#28a745] p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900">
                🔒 Your Message Content is NEVER Stored
              </p>
              <p className="text-gray-700 mt-2">
                FlowOps processes all messages in real-time, in memory only. We do not store, log, or retain any message content on our servers.
              </p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Message Content Commitment</h2>
                <p className="mb-4">
                  <strong>FlowOps DOES NOT STORE</strong> the content of compressed messages. Our AI compression engine:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processes messages in real-time within secure memory</li>
                  <li>Returns the compressed version immediately via API</li>
                  <li>Automatically purges all message content from memory after processing</li>
                  <li>Never logs, archives, or backs up message content</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Retain (Metadata Only)</h2>
                <p className="mb-4">
                  For billing accuracy and service improvement, we retain only the following metadata:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Message length before compression (character count)</li>
                  <li>Message length after compression (character count)</li>
                  <li>Timestamp of processing request</li>
                  <li>Language detected (Arabic or English)</li>
                  <li>API key used for the request</li>
                </ul>
                <p className="mt-4">
                  This metadata contains <strong>zero message content</strong> and is used solely for aggregate performance analysis and billing calculations.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing Policy</h2>
                <p className="mb-4">
                  <strong>NO SHARING</strong> of message content or metadata with any third party, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI model training providers</li>
                  <li>Advertising networks or data brokers</li>
                  <li>Analytics platforms beyond our internal systems</li>
                  <li>Any entity not explicitly listed in this policy</li>
                </ul>
                <p className="mt-4">
                  We may share anonymized, aggregated statistics (e.g., "average compression rate across all users") for marketing purposes, but these contain no identifiable information.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Security Measures</h2>
                <p className="mb-4">
                  FlowOps implements enterprise-grade security protocols:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>TLS 1.3 encryption for all data in transit</li>
                  <li>API authentication via secure token-based system</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>ISO 27001 compliant data handling procedures</li>
                  <li>Geographically distributed servers with redundancy</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request deletion of your account and associated metadata</li>
                  <li>Export your billing and usage data at any time</li>
                  <li>Opt out of anonymized aggregate statistics</li>
                  <li>Receive notification of any data breach within 72 hours</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                <p>
                  For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer at privacy@flowops.io
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
