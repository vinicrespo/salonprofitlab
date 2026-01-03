import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants';

const UpsellOne: React.FC = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    // Add to cart logic here
    navigate('/upsell-2');
  };

  const handleNo = () => {
    navigate('/downsell-1');
  };

  return (
    <div className="bg-white dark:bg-[#221810] font-display antialiased text-[#2D2D2D] dark:text-gray-100 min-h-screen">
      <div className="relative min-h-screen w-full max-w-md mx-auto flex flex-col bg-white dark:bg-[#221810] shadow-xl overflow-x-hidden">
        {/* Progress Indicator */}
        <div className="w-full bg-[#FAF8F5] dark:bg-gray-800 pt-6 pb-4 px-6 border-b border-gray-100 dark:border-gray-700 sticky top-0 z-20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B8860B] dark:text-[#C9A227]">Step 2 of 3</span>
            <span className="text-xs font-medium text-gray-500">Almost Done</span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-[#ec6d13] w-[75%] rounded-full"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col pb-32">
          {/* Urgency Headline */}
          <div className="bg-[#F5E6E0]/30 dark:bg-gray-800/50 py-3 px-4 border-b border-[#F5E6E0] dark:border-gray-700">
            <h2 className="text-[#D32F2F] dark:text-red-400 text-sm font-bold text-center flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">warning</span>
              Wait! Your order is not yet complete...
            </h2>
          </div>

          {/* Main Headline */}
          <div className="px-5 pt-8 pb-4 text-center">
            <h1 className="text-[#2D2D2D] dark:text-white text-3xl font-extrabold leading-tight tracking-tight mb-3">
              Want To Implement <span className="text-[#ec6d13]">S.C.A.L.E.</span> <br /> 3x Faster?
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-snug">
              Watch over my shoulder as I build a profitable salon system from scratch.
            </p>
          </div>

          {/* Video Player */}
          <div className="px-5 py-2">
            <div className="relative w-full aspect-video bg-[#2D2D2D] rounded-xl shadow-lg overflow-hidden group cursor-pointer border-4 border-white dark:border-gray-600 ring-1 ring-gray-100 dark:ring-black">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${IMAGES.upsell1.videoThumb}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button className="flex items-center justify-center w-16 h-16 bg-[#ec6d13]/90 text-white rounded-full shadow-2xl backdrop-blur-sm transition-transform transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                </button>
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">Exclusive Masterclass</p>
                <p className="text-sm font-bold">The "How-To" Implementation Guide</p>
              </div>
            </div>
          </div>

          {/* Sales Copy */}
          <div className="px-6 py-6 space-y-4 text-[#2D2D2D] dark:text-gray-200 text-base leading-relaxed">
            <p><span className="font-bold">Congrats on grabbing the ebook!</span> You now have the blueprint. But let's be honest—knowing <span className="italic">what</span> to do is different from knowing exactly <span className="italic">how</span> to do it.</p>
            <p>Most salon owners get stuck on the implementation. That's why I recorded this deep-dive video masterclass.</p>
            <p>I'll walk you through every single step of the S.C.A.L.E. method, showing you the real-world application so you can skip the trial and error and start seeing profit margins grow immediately.</p>
          </div>

          {/* Value Stack */}
          <div className="px-4 py-4">
            <div className="bg-[#FAF8F5] dark:bg-gray-800 rounded-2xl border border-[#F5E6E0] dark:border-gray-600 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-center text-[#2D2D2D] dark:text-white mb-6 border-b border-[#C9A227]/20 pb-4">What's Included In The Masterclass:</h3>
              <ul className="space-y-4 mb-8">
                {[
                    { title: "Module 1: Staffing Secrets", subtitle: "Hire rockstars that stay.", value: "$197 VALUE" },
                    { title: "Module 2: Client Retention", subtitle: "Turn walk-ins into lifers.", value: "$197 VALUE" },
                    { title: "Module 3: Profit Margins", subtitle: "Stop bleeding cash.", value: "$197 VALUE" }
                ].map((mod, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#C9A227] text-2xl shrink-0">check_circle</span>
                        <div>
                            <span className="font-bold text-[#2D2D2D] dark:text-gray-100">{mod.title}</span>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{mod.subtitle}</div>
                            <div className="text-xs text-[#B8860B] font-medium mt-1 uppercase">({mod.value})</div>
                        </div>
                    </li>
                ))}
              </ul>
              <div className="bg-white dark:bg-gray-700/50 rounded-xl p-4 text-center border border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Value: <span className="line-through decoration-red-500 decoration-2">$591</span></p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg font-medium text-[#2D2D2D] dark:text-gray-200">One-Time Offer:</span>
                  <span className="text-3xl font-extrabold text-[#ec6d13]">$47</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 px-4 pb-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-full mb-1">
              <span className="material-symbols-outlined text-sm">lock</span>
              Secure One-Click Add
            </div>
            <button onClick={handleYes} className="w-full bg-[#ec6d13] hover:bg-orange-600 active:scale-95 transition-all duration-200 text-white font-bold text-lg py-4 px-6 rounded-lg shadow-lg shadow-orange-500/20 flex flex-col items-center leading-tight">
              <span>Yes! Add Video Masterclass — $47</span>
              <span className="text-xs font-normal opacity-90 mt-1">Add to my order instantly</span>
            </button>
            <button onClick={handleNo} className="text-gray-400 hover:text-[#2D2D2D] dark:text-gray-500 dark:hover:text-gray-300 text-sm font-medium underline underline-offset-4 decoration-gray-300 transition-colors py-2">
              No thanks, I prefer to figure it out myself
            </button>
            
            <div className="flex items-center justify-center gap-4 mt-2 opacity-60 grayscale">
              <div className="h-6 w-auto flex items-center gap-1 text-[10px] uppercase font-bold text-[#2D2D2D] dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">verified_user</span> SSL Secure
              </div>
              <div className="h-6 w-auto flex items-center gap-1 text-[10px] uppercase font-bold text-[#2D2D2D] dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">workspace_premium</span> Money Back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellOne;