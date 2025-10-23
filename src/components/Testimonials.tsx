import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "FlowOps cut our WhatsApp API costs by 52% in the first month. The ROI was immediate and the integration was seamless.",
      author: "Sarah Ahmed",
      role: "Head of Operations",
      company: "RetailPro MENA",
      savings: "52% Cost Reduction"
    },
    {
      quote: "We process 200K+ messages monthly. FlowOps saved us $78,000 annually while maintaining perfect message quality.",
      author: "Michael Chen",
      role: "CTO",
      company: "LogisticsHub",
      savings: "$78K Annual Savings"
    },
    {
      quote: "The Arabic compression is exceptional. Our customer satisfaction scores actually improved with the clearer, concise messages.",
      author: "Fatima Al-Rashid",
      role: "Customer Success Director",
      company: "FinanceFirst",
      savings: "48% Cost Reduction"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f4f7f9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Trusted by Growing Businesses
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          See how companies are cutting costs with FlowOps
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#007bff] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-600 mb-3">{testimonial.company}</p>
                <p className="text-[#28a745] font-bold text-lg">{testimonial.savings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
