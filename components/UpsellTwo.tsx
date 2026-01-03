import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants';

const UpsellTwo: React.FC = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/thank-you');
  };

  const handleNo = () => {
    navigate('/downsell-2');
  };

  return (
    <div className="bg-[#f8f7f6] dark:bg-[#221810] font-display text-[#2D2D2D] dark:text-gray-100 antialiased selection:bg-[#ec6d13]/20 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-white dark:bg-[#221810]">
        
        {/* Progress */}
        <div className="w-full bg-white dark:bg-[#2a1e16] px-6 py-4 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B8860B] dark:text-[#ec6d13]">Step 3 of 3</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D] dark:text-white">Final Step</span>
          </div>
          <div className="flex w-full flex-row items-center justify-center gap-1.5">
            <div className="h-1.5 flex-1 rounded-full bg-[#ec6d13]"></div>
            <div className="h-1.5 flex-1 rounded-full bg-[#ec6d13]"></div>
            <div className="h-1.5 flex-1 rounded-full bg-[#ec6d13]"></div>
          </div>
        </div>

        {/* Warning Header */}
        <div className="bg-[#C9A227]/10 border-b border-[#C9A227]/20 p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[#C9A227] dark:text-yellow-500">
            <span className="material-symbols-outlined text-[20px]">warning</span>
            <p className="text-sm font-bold uppercase tracking-wide">One More Thing Before You Go...</p>
          </div>
        </div>

        {/* Headline */}
        <div className="px-6 pt-8 pb-4 text-center">
          <h1 className="text-[#2D2D2D] dark:text-white text-3xl font-extrabold leading-tight tracking-tight mb-3">
            Want Every Template, Script & Checklist <span className="text-[#ec6d13] underline decoration-[#F5E6E0] decoration-4 underline-offset-2">Done For You?</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed">
            Stop wasting hours typing policies. I've done the hard work so you don't have to.
          </p>
        </div>

        {/* Hero Image */}
        <div className="px-4 pb-6">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
            <div 
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url('${IMAGES.upsell2.flatlay}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 to-transparent flex items-end justify-center pb-6">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-[#2D2D2D] shadow-sm uppercase tracking-wider">
                  Instant Access Digital Vault
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div className="px-6 pb-6">
          <p className="text-[#2D2D2D] dark:text-gray-200 text-base font-normal leading-relaxed mb-6">
            You didn't start a salon to spend your nights writing employee handbooks or inventory sheets. 
            <br/><br/>
            <strong>The Salon Systems Vault</strong> gives you my proven, plug-and-play operations manual. Just add your logo and you're ready to lead like a CEO.
          </p>
          <ul className="space-y-3 mb-2">
            {[
              "Copy-paste hiring scripts that attract top talent",
              "Iron-clad employee handbook template",
              "Automated inventory trackers to stop leaks"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ec6d13] shrink-0">check_circle</span>
                <span className="text-sm text-[#2D2D2D] dark:text-gray-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Stack */}
        <div className="px-4 pb-8">
          <div className="bg-[#F5E6E0]/40 dark:bg-white/5 rounded-xl border border-[#F5E6E0] dark:border-white/10 overflow-hidden">
            <div className="bg-[#F5E6E0] dark:bg-white/10 px-4 py-3 text-center border-b border-white/50 dark:border-white/10">
              <h3 className="text-[#2D2D2D] dark:text-white font-bold text-lg">What's Inside The Vault</h3>
            </div>
            <div className="p-5 grid grid-cols-1 gap-y-4">
              {[
                { name: "Hiring Scripts & Templates", price: "$97.00" },
                { name: "Employee Handbook", price: "$197.00" },
                { name: "Inventory Tracker System", price: "$47.00" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-[#2D2D2D]/5 pb-2 border-dashed">
                  <span className="text-[#2D2D2D] dark:text-gray-300 font-medium text-sm">{item.name}</span>
                  <span className="text-[#B8860B] dark:text-[#ec6d13] font-bold text-sm">{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between items-end mt-2 pt-2">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs uppercase tracking-wide">Total Value</span>
                  <span className="text-gray-400 line-through text-lg font-medium">$341.00</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[#ec6d13] font-bold text-sm uppercase tracking-wide">One-Time Offer</span>
                  <span className="text-[#2D2D2D] dark:text-white text-4xl font-extrabold tracking-tight">$67</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-4 pb-12 flex flex-col items-center gap-4">
          <button onClick={handleYes} className="w-full bg-[#ec6d13] hover:bg-[#d55e0d] text-white rounded-lg py-4 px-6 shadow-lg shadow-[#ec6d13]/20 transition-all active:scale-[0.98] flex flex-col items-center justify-center group">
            <span className="text-lg font-bold leading-none mb-1">Yes! Upgrade My Order</span>
            <span className="text-sm font-medium opacity-90 leading-none">Get the complete system for just $67</span>
          </button>
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span className="text-xs font-medium">Secure 256-bit SSL Encryption</span>
          </div>
          <button onClick={handleNo} className="text-gray-500 dark:text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white text-sm font-medium underline decoration-gray-300 underline-offset-4 transition-colors text-center px-8">
            No thanks, I'll create my own systems from scratch.
          </button>
        </div>
        <div className="h-10 bg-transparent"></div>
      </div>
    </div>
  );
};

export default UpsellTwo;