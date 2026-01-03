import React from 'react';

interface PricingProps {
    onBuy: (plan: 'basic' | 'complete') => void;
}

const Pricing: React.FC<PricingProps> = ({ onBuy }) => {
    return (
        <section id="pricing" className="py-16 px-4 bg-gradient-to-b from-[#F5E6E0]/50 to-[#FAF8F5] relative">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-center text-3xl font-bold text-[#2D2D2D] mb-2">Choose Your Path</h2>
                <p className="text-center text-gray-600 mb-10 text-sm sm:text-base">One-time payment. Lifetime access. 30-day guarantee.</p>

                <div className="flex flex-col gap-6">
                    {/* Basic Plan */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-soft relative">
                        <h3 className="text-lg font-bold text-gray-600 uppercase tracking-wide">The S.C.A.L.E. Blueprint</h3>
                        <div className="mt-4 mb-6">
                            <span className="text-4xl font-bold text-[#2D2D2D]">$9.90</span>
                            <span className="text-gray-500 text-sm ml-1">one-time</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            {[
                                'The complete S.C.A.L.E. Diagnostic™ Framework',
                                'Step-by-step implementation guide',
                                '30-day action roadmap'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                    <span className="material-symbols-outlined text-[#C9A227] text-lg mt-0.5">check</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => onBuy('basic')}
                            className="w-full py-3.5 border-2 border-[#C9A227] text-[#C9A227] font-bold rounded-lg hover:bg-[#C9A227] hover:text-white transition-colors"
                        >
                            Yes, Fix My Salon
                        </button>
                    </div>

                    {/* Complete Plan */}
                    <div className="bg-[#FAF8F5] rounded-xl p-6 border-2 border-[#C9A227] shadow-lg relative overflow-hidden transform scale-[1.02]">
                        <div className="absolute top-0 right-0 bg-[#C9A227] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">BEST VALUE</div>
                        <h3 className="text-lg font-bold text-[#B8860B] uppercase tracking-wide">Complete Bundle + 5 Bonuses</h3>
                        <div className="mt-4 mb-6">
                            <span className="text-4xl font-bold text-[#2D2D2D]">$37</span>
                            <span className="text-gray-500 text-sm ml-1">one-time</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-gray-700">
                                <span className="material-symbols-outlined text-[#C9A227] text-lg mt-0.5">verified</span>
                                <span><strong>Everything in the Blueprint</strong>, PLUS:</span>
                            </li>
                            {[
                                '$100K Salon Roadmap',
                                'Profit-First Pricing Guide',
                                'Client Retention Playbook',
                                'Salon Systems Library',
                                '90-Day Implementation Calendar'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                    <span className="material-symbols-outlined text-[#C9A227] text-lg mt-0.5">check</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => onBuy('complete')}
                            className="w-full py-3.5 bg-[#C9A227] text-white font-bold rounded-lg hover:bg-[#B8860B] shadow-md transition-all"
                        >
                            Yes, Fix My Salon
                        </button>
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                            <span className="material-symbols-outlined text-base">lock</span>
                            Secure SSL Payment
                        </div>
                    </div>
                </div>

                {/* Guarantee */}
                <div className="mt-12 bg-white p-8 rounded-2xl border-2 border-green-500/20 shadow-sm relative overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-[#2D2D2D] mb-2">🛡️ 30-Day "Actually Useful" Guarantee</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you go through the S.C.A.L.E. Blueprint and don't find at least ONE profit leak you can fix immediately, just email us and we'll refund every penny. No questions. No hassle. No hard feelings.
                            </p>
                            <p className="font-medium text-[#2D2D2D] text-sm italic">
                                You're not risking $37. You're risking staying stuck.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
