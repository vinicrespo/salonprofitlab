import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

                <div className="space-y-3">
                    {[
                        {
                            q: "How quickly will I see results?",
                            a: "Depends on you. Some owners implement the pricing changes in week one and see immediate impact. Others take longer because they have more systems to fix. This isn't magic — it's a framework. You get out what you put in."
                        },
                        {
                            q: "I barely have time to breathe. How will I find time for this?",
                            a: "That's exactly why you need it. The irony of being too busy to fix your systems is that your broken systems are WHY you're too busy. Start with 30 minutes. The Blueprint is designed to work in small chunks."
                        },
                        {
                            q: "Is this for solo stylists or booth renters?",
                            a: "No. This is specifically designed for salon owners who manage staff and operations. If you're solo, some concepts apply but most of the leverage strategies won't."
                        },
                        {
                            q: "I've tried other programs. Why is this different?",
                            a: "Most programs teach you what to do. S.C.A.L.E. shows you what's BROKEN first. You can't fix what you can't see. The diagnostic approach means you're not wasting time on areas that are already working."
                        },
                        {
                            q: "What if it doesn't work for my salon?",
                            a: "Then you get your money back. 30 days, no questions. But more importantly — every salon is different, but the principles of systems, clients, pricing, leverage, and efficiency apply to all of them."
                        }
                    ].map((faq, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-lg overflow-hidden bg-[#FAF8F5]"
                        >
                            <button
                                className="flex w-full cursor-pointer items-center justify-between gap-3 p-4 text-left hover:bg-gray-50 transition"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <h3 className="font-medium text-sm sm:text-base text-[#2D2D2D]">{faq.q}</h3>
                                <span className={`material-symbols-outlined text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                                    keyboard_arrow_down
                                </span>
                            </button>
                            {openFaq === i && (
                                <div className="p-4 pt-0 text-gray-700 text-sm leading-relaxed bg-white border-t border-gray-100">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
