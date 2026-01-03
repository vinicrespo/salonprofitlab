import React from 'react';

const ScaleDiagnostic: React.FC = () => {
    return (
        <section className="bg-[#FAF8F5] py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-3">
                        The <span className="text-[#C9A227]">S.C.A.L.E.</span> Diagnostic™
                    </h2>
                    <p className="text-[#2D2D2D]/70 text-base sm:text-lg max-w-xl mx-auto">
                        A 5-part framework to find (and fix) what's holding your salon back
                    </p>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            letter: 'S',
                            title: 'Systems',
                            desc: "Can your salon run for a week without you? If not, you don't have a business — you have a dependency."
                        },
                        {
                            letter: 'C',
                            title: 'Clients',
                            desc: "Are your clients coming back? Referring friends? Or are you constantly chasing new ones to replace the ones who disappear?"
                        },
                        {
                            letter: 'A',
                            title: 'Average Ticket',
                            desc: "When's the last time you raised your prices? Most salon owners leave thousands on the table because they're afraid of one uncomfortable conversation."
                        },
                        {
                            letter: 'L',
                            title: 'Leverage',
                            desc: "Are you the only one who can do what you do? That's a ceiling, not a badge of honor."
                        },
                        {
                            letter: 'E',
                            title: 'Efficiency',
                            desc: "How much of your week is spent on things that don't make money? That's where your profit is hiding."
                        }
                    ].map((item, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-soft transition-all hover:shadow-card">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C9A227]"></div>
                            <div className="p-5 sm:p-6 flex gap-4 items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10 text-[#C9A227] font-black text-2xl">
                                    {item.letter}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl text-[#2D2D2D]">{item.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScaleDiagnostic;
