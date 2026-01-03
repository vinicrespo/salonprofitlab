import React from 'react';

const Agitation: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-[#FAF8F5]">
            <div className="max-w-3xl mx-auto">
                <h3 className="text-[#B8860B] font-semibold uppercase tracking-wider text-sm mb-6 text-center">Sound familiar?</h3>

                <div className="space-y-6 text-[#2D2D2D] text-base sm:text-lg leading-relaxed">
                    <p className="font-medium text-xl sm:text-2xl text-center text-[#2D2D2D]/90">
                        Let me guess how your week goes:
                    </p>

                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100 space-y-5">
                        <p>
                            <span className="font-semibold">Monday</span> starts with a no-show text from your best stylist. You scramble to cover her clients while fielding WhatsApp messages from suppliers.
                        </p>

                        <p>
                            By <span className="font-semibold">Wednesday</span>, you've worked through lunch three times. Your coffee is always cold because something always comes up.
                        </p>

                        <p>
                            <span className="font-semibold">Friday night</span>, you finally look at the numbers. The salon was packed all week. But somehow... the bank account doesn't reflect it.
                        </p>

                        <p>
                            <span className="font-semibold">Saturday morning</span>, you're back at it. Because who else is going to do it?
                        </p>
                    </div>

                    <p className="text-center text-xl font-semibold text-[#2D2D2D] pt-4">
                        Here's the uncomfortable truth: <span className="text-[#B8860B]">You didn't build a business. You built a job you can't quit.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Agitation;
