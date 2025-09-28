

const Hero = () => {
    return (
        <div className="w-[97%] md:w-[90%] mx-auto lg:w-full my-14 px-4 h-[400px] bg-[#0058FF] rounded-3xl">
            <div className="p-1 md:p-8 flex flex-col justify-center items-center h-full max-w-5xl mx-auto space-y-8 text-white">
                <h1 className="text-2xl md:text-[32px] lg:text-5xl font-bold">Get In Touch</h1>
                <p className="text-center md:text-sm lg:text-lg">Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.</p>
                <div className="flex flex-row items-center gap-3 bg-white p-3 rounded-lg">
                    <button className="text-[#0058FF] font-bold">
                        Book a Professional Plumber
                    </button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="blue"
                        strokeWidth="3"
                        className="w-6 h-6"
                    >
                        <path
                            d="M5 12h14M13 6l6 6-6 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Hero;