import React from 'react';

const Bridge: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-[#F5E6E0]">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-6">It's not your fault.</h2>

                <div className="space-y-5 text-[#2D2D2D]/80 text-base sm:text-lg leading-relaxed">
                    <p>
                        Nobody teaches salon owners how to run a profitable business. You learned to cut hair. To make people feel beautiful. To build relationships.
                    </p>

                    <p>
                        But pricing strategy? Cash flow management? Team systems? <span className="font-medium text-[#2D2D2D]">You figured it out as you went.</span>
                    </p>

                    <p>
                        The result? A business that depends entirely on <span className="font-medium text-[#2D2D2D]">YOU</span>.
                    </p>
                </div>

                <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100 text-left">
                    <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-4">
                        But here's what I've learned after working with 500+ salon owners:
                    </p>

                    <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed">
                        The difference between a salon owner who works 70 hours and barely breaks even... and one who takes Fridays off and still grows revenue...
                    </p>

                    <p className="text-xl sm:text-2xl font-bold text-[#2D2D2D] mt-4">
                        ...isn't talent. It isn't luck. It isn't location.
                    </p>

                    <p className="text-2xl sm:text-3xl font-bold text-[#C9A227] mt-2">
                        It's SYSTEMS.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Bridge;
