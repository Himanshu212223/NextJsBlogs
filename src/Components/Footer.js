import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font fixed bottom-0 w-full">
            {/* <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Skill block</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Perfect page to find documentation.</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href={"/"} className="text-gray-400 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link href={"/About"} className="text-gray-400 hover:text-white">About</Link>
                            </li>
                            <li>
                                <Link href={"/Blogs"} className="text-gray-400 hover:text-white">Blogs</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div> */}
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container mx-auto py-3 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 - Code Stock
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        {/* <a className="ml-3 text-gray-400 cursor-pointer hover:text-blue-600">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a> */}
                        <a href="https://www.instagram.com/_him.anshu?igsm=MXNpc3hiNWduNGhjZQ==" target="_blank" className="ml-3 text-gray-400 cursor-pointer hover:text-pink-600">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/himanshu-9556261b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="ml-3 text-gray-400 cursor-pointer hover:text-blue-400">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;