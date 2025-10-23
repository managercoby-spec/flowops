import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f9] flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: October 21, 2025</p>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptable Use Policy</h2>
                <p className="mb-4">
                  By using FlowOps API services, you agree to use our message compression technology only for lawful purposes. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process messages containing illegal content or malicious intent</li>
                  <li>Use the service to spam, harass, or send unsolicited communications</li>
                  <li>Attempt to reverse engineer or replicate our proprietary AI compression algorithms</li>
                  <li>Exceed your allocated API rate limits without prior authorization</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Availability</h2>
                <p>
                  FlowOps strives to maintain 99.9% uptime for our API services. However, we reserve the right to perform scheduled maintenance with advance notice. We are not liable for any business interruptions caused by third-party WhatsApp API provider outages.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Billing and Payment</h2>
                <p className="mb-4">
                  FlowOps operates on a volume-based subscription model:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Billing is calculated based on the number of messages processed per month</li>
                  <li>Payment is due within 30 days of invoice date for enterprise accounts</li>
                  <li>Failure to pay may result in temporary service suspension</li>
                  <li>All fees are non-refundable except as required by law</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
                <p>
                  FlowOps provides message compression services "as is" without warranties of any kind. We are not responsible for the content of messages processed through our system. Our total liability shall not exceed the amount paid by you in the preceding 12 months.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p>
                  All intellectual property rights in the FlowOps compression algorithms, AI models, and software remain the exclusive property of FlowOps. You retain all rights to your message content.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
                <p>
                  Either party may terminate this agreement with 30 days written notice. Upon termination, you must cease all use of FlowOps services and API access will be revoked.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at legal@flowops.io
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

export default Terms;
