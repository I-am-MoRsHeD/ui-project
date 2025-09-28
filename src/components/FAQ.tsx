import { faqs } from "../static/faq";


const FAQ = () => {
    return (
        <section className="my-14 px-4">
            <h2 className="text-2xl md:text-[32px] lg:text-5xl font-bold text-center mb-10">Frequently Asked Questions</h2>

            <div className="w-full md:w-[95%] lg:w-[60%] mx-auto">
                {faqs.map((faq, idx) => (
                    <details
                        key={idx}
                        className={`group p-4 open:bg-white transition ${idx === (faqs.length - 1) ? '' : 'border-b border-gray-300'}`}
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-2 text-gray-300">
                            <h3 className="text-base md:text-xl lg:text-[28px] font-semibold py-1 lg:py-3 text-black">{faq.question}</h3>

                            <svg
                                className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="mt-3 text-sm lg:text-lg font-normal text-gray-700 leading-relaxed">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
