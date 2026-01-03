import React from 'react';
import { IMAGES } from '../constants';

const ThankYou: React.FC = () => {
  return (
    <div className="bg-[#f8f7f6] dark:bg-[#221810] font-display text-[#2D2D2D] dark:text-gray-100 antialiased overflow-x-hidden min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-md mx-auto bg-[#f8f7f6] dark:bg-[#221810] shadow-2xl">
        
        {/* Top Branding */}
        <div className="flex items-center bg-[#f8f7f6] dark:bg-[#221810] p-4 pb-2 justify-center">
          <h2 className="text-[#C9A227] text-xs font-bold leading-tight tracking-widest uppercase text-center">Salon Profit Lab</h2>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center pt-8 pb-4 px-4">
          <div className="mb-2 flex items-center justify-center h-20 w-20 rounded-full bg-[#ec6d13]/10 text-[#ec6d13] animate-bounce shadow-sm">
            <span className="material-symbols-outlined text-[48px]">check_circle</span>
          </div>
          <h1 className="text-[#2D2D2D] dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-2 pt-4">You're In!</h1>
          <h2 className="text-[#2D2D2D] dark:text-gray-200 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-2">Welcome to Salon Profit Lab</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal pb-3 pt-1 px-6 text-center">
            Your order was successful. We are excited to help you grow your salon.
          </p>
        </div>

        {/* Confirmation Card */}
        <div className="px-6 py-2 w-full">
          <div className="bg-[#F5E6E0] dark:bg-[#2c2420] rounded-lg p-4 border border-[#C9A227]/30 dark:border-[#C9A227]/10 flex flex-col items-center justify-center gap-1 shadow-sm">
            <div className="flex items-center gap-2 text-[#2D2D2D] dark:text-[#F5E6E0] font-bold text-lg">
              <span>Order Confirmed</span>
              <span className="material-symbols-outlined text-[#ec6d13] text-xl font-bold">check</span>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Order #8392-SPL • Total: $297.00
            </div>
          </div>
        </div>

        <div className="h-6 w-full"></div>

        {/* Next Steps */}
        <div className="px-6 flex-1">
          <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-white mb-6 pl-1">What Happens Next</h3>
          <div className="flex flex-col gap-6 relative pl-2">
            <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gray-200 dark:bg-gray-700"></div>
            {[
              { icon: "mail", title: "Check your inbox", desc: "We've sent your login details and receipt to your email address." },
              { icon: "download", title: "Download materials", desc: "Get immediate access to your welcome kit and guides." },
              { icon: "play_circle", title: "Start learning", desc: "Jump into Module 1 and start transforming your salon." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-start gap-5 z-10 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-[#33251a] rounded-full border-2 border-[#FAF8F5] dark:border-gray-600 flex items-center justify-center shadow-md text-[#ec6d13] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-[#2D2D2D] dark:text-gray-100 text-base">{step.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-10 w-full"></div>

        <div className="px-6">
          <button className="w-full bg-[#ec6d13] hover:bg-[#d65f0e] active:bg-[#c0530a] text-white font-bold text-[17px] py-4 px-6 rounded-lg shadow-lg shadow-[#ec6d13]/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
            Access Your Materials Now
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>

        <div className="h-8 w-full"></div>

        <div className="px-6 pb-6">
          <div className="bg-white dark:bg-[#2c2420] rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex gap-4 items-start">
              <div className="w-16 h-16 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 shadow-inner" style={{ backgroundImage: `url('${IMAGES.thankyou.community}')` }}></div>
              <div>
                <p className="text-[11px] font-bold text-[#C9A227] uppercase tracking-wide mb-1">Your First Action</p>
                <h4 className="font-bold text-[#2D2D2D] dark:text-white text-base leading-tight">Join the Private Community</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Connect with 5,000+ salon owners.</p>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full py-3 px-4 rounded-lg border border-[#2D2D2D] dark:border-gray-500 text-[#2D2D2D] dark:text-gray-200 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-lg">group</span>
                Join Facebook Group
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pb-10 text-center border-t border-gray-200/60 dark:border-gray-700 pt-8 mt-4 bg-[#f8f7f6] dark:bg-[#221810]">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Need help with your order?</p>
          <a className="text-[#ec6d13] font-medium text-sm hover:text-[#C9A227] transition-colors flex items-center justify-center gap-1" href="mailto:support@salonprofitlab.com">
            <span className="material-symbols-outlined text-base">mail</span>
            Contact support@salonprofitlab.com
          </a>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-8">
            © 2023 Salon Profit Lab. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;