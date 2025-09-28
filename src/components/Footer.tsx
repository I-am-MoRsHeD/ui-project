

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 w-full">
                <div className="grid gap-20 grid-cols-1 lg:grid-cols-12 px-4 w-full">
                    <div className="md:col-span-9 lg:col-span-3">
                        <h1 className="text-[32px] font-bold">Business Logo</h1>

                        <div className="mt-8 flex gap-6">
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                />
                            </svg>

                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start lg:justify-center items-start md:items-center gap-16 md:col-span-9 lg:col-span-5">
                        <div className="">
                            <p className="font-semibold text-sm text-gray-900">Our Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Plumbing</a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Drainage </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Bathrooms </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Commercial </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-end gap-5">
                            <div>
                                <p className="font-semibold text-sm text-gray-900">Useful Links</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact Us </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Updated </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> About Us </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Rates </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Customer Services </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Updates </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Locations </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Sitemap </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="md:col-span-9 lg:col-span-4 text-sm">
                        <p className="font-semibold text-gray-900">Contact Info</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <p className="flex flex-row gap-5 items-center">
                                    <span>
                                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5455 7.54545C14.5455 12.6364 8.00004 17 8.00004 17C8.00004 17 1.45459 12.6364 1.45459 7.54545C1.45459 5.80949 2.1442 4.14463 3.37171 2.91712C4.59922 1.68961 6.26408 1 8.00004 1C9.73601 1 11.4009 1.68961 12.6284 2.91712C13.8559 4.14463 14.5455 5.80949 14.5455 7.54545Z" stroke="black" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.00006 9.72728C9.20504 9.72728 10.1819 8.75045 10.1819 7.54547C10.1819 6.34048 9.20504 5.36365 8.00006 5.36365C6.79507 5.36365 5.81824 6.34048 5.81824 7.54547C5.81824 8.75045 6.79507 9.72728 8.00006 9.72728Z" stroke="black" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </span>
                                    1 Sail Street, London, SE11 6NQ</p>
                            </li>
                            <li>
                                <p className="flex flex-row gap-5 items-center">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="1 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                                            />
                                        </svg>
                                    </span>
                                    enquiries@PlumbingPros.com</p>
                            </li>
                            <li>
                                <p className="flex flex-row gap-5 items-center">
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9104 4.06394C11.6586 4.20991 12.3462 4.57582 12.8852 5.11483C13.4242 5.65383 13.7901 6.34142 13.9361 7.08959M10.9104 1C12.4648 1.17268 13.9143 1.86876 15.0209 2.97395C16.1275 4.07914 16.8254 5.52775 17 7.08193M16.234 13.1945V15.4924C16.2349 15.7058 16.1912 15.9169 16.1057 16.1124C16.0203 16.3079 15.8949 16.4833 15.7377 16.6275C15.5805 16.7718 15.3949 16.8816 15.1928 16.9499C14.9908 17.0182 14.7766 17.0436 14.5642 17.0244C12.2071 16.7683 9.94297 15.9629 7.95371 14.6728C6.10295 13.4968 4.53384 11.9277 3.35779 10.0769C2.06326 8.07863 1.25765 5.80349 1.00622 3.43583C0.987076 3.22401 1.01225 3.01053 1.08014 2.80897C1.14802 2.60741 1.25713 2.4222 1.40052 2.26512C1.54391 2.10804 1.71843 1.98254 1.91298 1.8966C2.10753 1.81067 2.31785 1.76619 2.53053 1.76599H4.82849C5.20022 1.76233 5.56061 1.89397 5.84247 2.13636C6.12433 2.37876 6.30843 2.71538 6.36046 3.08348C6.45745 3.81888 6.63732 4.54094 6.89665 5.2359C6.99971 5.51007 7.02201 5.80803 6.96092 6.09448C6.89983 6.38093 6.7579 6.64387 6.55195 6.85213L5.57915 7.82493C6.66958 9.74261 8.25739 11.3304 10.1751 12.4208L11.1479 11.448C11.3561 11.2421 11.6191 11.1002 11.9055 11.0391C12.192 10.978 12.4899 11.0003 12.7641 11.1034C13.4591 11.3627 14.1811 11.5425 14.9165 11.6395C15.2886 11.692 15.6284 11.8795 15.8713 12.1662C16.1143 12.4529 16.2433 12.8188 16.234 13.1945Z" stroke="black" stroke-width="1.14898" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </span>
                                    020 4527 6474</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
                    <p className="text-xs text-gray-500">&copy; Plumbing Pros. All rights reserved.</p>
                    <p className="text-xs text-gray-500">Website by IH Adventure And Creative</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;