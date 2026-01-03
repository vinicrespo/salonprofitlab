import React from 'react';

const SocialProof: React.FC = () => {
    return (
        <section className="bg-white py-16 border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-3">Real owners. Real results.</h2>
                <p className="text-center text-[#2D2D2D]/60 mb-10 text-sm sm:text-base">From salon owners who've been exactly where you are</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 - The skeptic */}
                    <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gray-100 relative flex flex-col">
                        <div className="absolute -top-3 left-6 bg-[#C9A227] text-white p-1.5 rounded-full">
                            <span className="material-symbols-outlined text-sm">format_quote</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-grow">
                            "I've bought every business course out there. Most collected dust. But S.C.A.L.E. was different — it showed me I was losing <span className="font-semibold">$1,800/month</span> just on no-shows and late cancellations. Fixed that in week one. The rest was gravy."
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                            <div
                                className="h-11 w-11 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-[#C9A227]/20"
                                style={{ backgroundImage: `url("/rachel.png")` }}
                            ></div>
                            <div>
                                <p className="font-bold text-[#2D2D2D] text-sm">Rachel M.</p>
                                <p className="text-xs text-gray-500">Owner, Blush & Blow — Austin TX</p>
                            </div>
                        </div>
                        <p className="text-xs text-[#B8860B] font-medium mt-3">Revenue: $280k → $340k in 8 months</p>
                    </div>

                    {/* Testimonial 2 - The workhorse */}
                    <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gray-100 relative flex flex-col">
                        <div className="absolute -top-3 left-6 bg-[#C9A227] text-white p-1.5 rounded-full">
                            <span className="material-symbols-outlined text-sm">format_quote</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-grow">
                            "I went from <span className="font-semibold">65 hours a week to 40</span>. My team actually handles things now. Last month I took my first real vacation in 4 years. Didn't check my phone once."
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                            <div
                                className="h-11 w-11 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-[#C9A227]/20"
                                style={{ backgroundImage: `url("/maria.png")` }}
                            ></div>
                            <div>
                                <p className="font-bold text-[#2D2D2D] text-sm">Maria S.</p>
                                <p className="text-xs text-gray-500">Owner, The Hair Atelier — Toronto</p>
                            </div>
                        </div>
                        <p className="text-xs text-[#B8860B] font-medium mt-3">Now works 4 days/week</p>
                    </div>

                    {/* Testimonial 3 - The price-raiser */}
                    <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gray-100 relative flex flex-col">
                        <div className="absolute -top-3 left-6 bg-[#C9A227] text-white p-1.5 rounded-full">
                            <span className="material-symbols-outlined text-sm">format_quote</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-grow">
                            "I was terrified to raise my prices. The Profit-First Pricing Guide gave me the exact script. Not a single client complained. My average ticket went up <span className="font-semibold">23%</span>."
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                            <div
                                className="h-11 w-11 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-[#C9A227]/20"
                                style={{ backgroundImage: `url("/jennifer.png")` }}
                            ></div>
                            <div>
                                <p className="font-bold text-[#2D2D2D] text-sm">Jennifer L.</p>
                                <p className="text-xs text-gray-500">Owner, Luxe Salon — London</p>
                            </div>
                        </div>
                        <p className="text-xs text-[#B8860B] font-medium mt-3">Average ticket: $85 → $105</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
