"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {

    const pathName = usePathname();

    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
                    <Link href={"/"} className="flex title-font font-medium items-center text-white mb-1 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <span className="ml-3 text-m text-yellow-700">Code Stock</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className={`m-4 text-sm hover:text-pink-600 ${pathName == "/" ? "text-indigo-600" : ""}`}>Home</Link>
                        <Link href={"/About"} className={`m-4 text-sm hover:text-pink-600 ${pathName == "/About" ? "text-indigo-600" : ""}`}>About</Link>
                        <Link href={"/Blogs"} className={`m-4 text-sm hover:text-pink-600 ${pathName == "/Blogs" ? "text-indigo-600" : ""}`}>Blogs</Link>

                    </nav>
                    {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                </div>
            </header>
        </>
    );
}

export default NavBar;