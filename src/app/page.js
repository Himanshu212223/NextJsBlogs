import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-700">Welcome to Code Stock !</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Where you can find the Documentations for differenct Framewords so that it would be ease for Developers and let them use this page as a reference.</p>
            {/* <Link href={"/Blogs"} className="flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg">Blogs &rarr;</Link> */}
            <Link href={"/Blogs"} className="flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-pink-800 rounded text-lg">Blogs</Link>
          </div>
        </div>
      </section>
    </>
  );
}


export default Home;