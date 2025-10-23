import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    volume: '',
    provider: '',
    role: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.volume) {
      newErrors.volume = 'Please select your message volume';
    }
    
    if (!formData.provider) {
      newErrors.provider = 'Please select your API provider';
    }
    
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store form data (in real app, would send to backend)
      console.log('Form submitted:', formData);
      navigate('/thanks');
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f9] flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Ready to Cut Costs? Start Your Free 14-Day Pilot.
            </h1>
            <p className="text-xl text-gray-700">
              Tell us about your message volume, and our team will prepare your custom savings report and pilot environment.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#007bff] focus:outline-none`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 ${errors.company ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#007bff] focus:outline-none`}
                    placeholder="Your Company Inc."
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Monthly WhatsApp Volume *
                  </label>
                  <select
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 ${errors.volume ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#007bff] focus:outline-none`}
                  >
                    <option value="">Select volume range</option>
                    <option value="0-10k">0 - 10,000 Messages</option>
                    <option value="10k-50k">10,000 - 50,000 Messages</option>
                    <option value="50k-100k">50,000 - 100,000 Messages</option>
                    <option value="100k+">100,000+ Messages</option>
                  </select>
                  {errors.volume && <p className="text-red-500 text-sm mt-1">{errors.volume}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current WhatsApp API Provider *
                  </label>
                  <select
                    name="provider"
                    value={formData.provider}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 ${errors.provider ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#007bff] focus:outline-none`}
                  >
                    <option value="">Select your provider</option>
                    <option value="wati">Wati</option>
                    <option value="twilio">Twilio</option>
                    <option value="meta">Direct Meta</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.provider && <p className="text-red-500 text-sm mt-1">{errors.provider}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Role *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 ${errors.role ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#007bff] focus:outline-none`}
                  >
                    <option value="">Select your role</option>
                    <option value="operations">Operations</option>
                    <option value="finance">Finance</option>
                    <option value="it">IT/Developer</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full mt-8 bg-[#007bff] text-white px-8 py-4 rounded-lg hover:bg-[#0056b3] transition font-semibold text-lg"
              >
                Submit Request & Start Saving
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;
