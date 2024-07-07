"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
// import { getBlogs } from "../../../lib/api";
import {getBlogs} from "@/lib/api"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Blogs = () => {

    const [blogList, setBlogList] = useState([]);
    const [checked, setChecked] = useState(true);

    const getBlogList = async () => {
        setTimeout(async () => {
            try{
                let blogLists = await getBlogs();
                setBlogList(JSON.parse(blogLists));
                setChecked(false);
            }catch(error){
                console.log(error);
                console.log("Unable to reach to the file.");
            }
        }, 800)
    }

    useEffect(() => {
        getBlogList();
    }, []);



    return (
        <>
            {checked && <SkeletonTheme baseColor="grey" highlightColor="grey">
                <section className="text-gray-400 body-font">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <Link href={`/Blogs`} className="p-2 lg:w-1/4">
                                <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-10 pb-10 rounded-lg overflow-hidden text-center relative border border-transparent">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"><Skeleton count={1} /></h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3"><Skeleton count={1} /></h1>
                                    <p className="leading-relaxed mb-3"><Skeleton count={2} /></p>
                                </div>
                            </Link>
                            <Link href={`/Blogs`} className="p-2 lg:w-1/4">
                                <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-10 pb-10 rounded-lg overflow-hidden text-center relative border border-transparent">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"><Skeleton count={1} /></h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3"><Skeleton count={1} /></h1>
                                    <p className="leading-relaxed mb-3"><Skeleton count={2} /></p>
                                </div>
                            </Link>
                            <Link href={`/Blogs`} className="p-2 lg:w-1/4">
                                <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-10 pb-10 rounded-lg overflow-hidden text-center relative border border-transparent">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"><Skeleton count={1} /></h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3"><Skeleton count={1} /></h1>
                                    <p className="leading-relaxed mb-3"><Skeleton count={2} /></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </SkeletonTheme>}

            {/* {!checked && <h1 className="sm:text-3xl text-center mt-2 mb-1 text-blue-400">SAP UI5</h1>} */}
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap-m-4">
                        {
                            blogList && blogList.map((eachBlog) => {
                                return <Link key={eachBlog.id} href={`/Blogs/UI5/${eachBlog.title}`} className="p-1 lg:w-1/4">
                                    <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-10 pb-10 rounded-lg overflow-hidden text-center relative border border-transparent hover:border hover:border-indigo-600 cursor-pointer">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">SAP UI5</h2>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">{eachBlog.title}</h1>
                                        <p className="leading-relaxed mb-3">{eachBlog.description}</p>
                                        <p className="text-yellow-400 inline-flex items-center">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </p>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}


export default Blogs;
