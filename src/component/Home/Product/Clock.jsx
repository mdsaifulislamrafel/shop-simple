/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import useAllProduct from '../../../hooks/useAllProduct';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';



const Clock = () => {
    const [products, loading] = useAllProduct();


    const clocks = products.filter(item => item.category === 'clock')
    const wallpapers = products.filter(item => item.category === 'wallpaper')
    const wallpaperThreeD = products.filter(item => item.category === '3d-wallpaper')
    const mates = products.filter(item => item.category === 'wall-mate')
    const pvc = products.filter(item => item.category === 'pvc')




    // State to keep track of how many items to show
    const [visibleCount, setVisibleCount] = useState(4);

    // Function to show more items
    const showMoreClocks = () => {
        setVisibleCount(prevCount => prevCount + 4); // Increase by 4 each time
    };
    if (loading) return <Loading />

    return (
        <div className="">
            {/* clock section */}
            <section className="text-gray-600 bg-white body-font">
                <div className="container px-5 pt-24 mx-auto">
                    <h2 className="bg-yellow-300 font-semibold text-2xl text-center p-4 rounded-md mb-10">
                        চায়নার 3D ঘড়ি এখন হাতের নাগালে!
                        Saudia Wallpaper Narshingdi নিয়ে এসেছে এই নতুন 3D ঘড়ি, যা শুধু সময়ই নয়, প্রতিটি মুহূর্তকে করবে অসাধারণ।
                        আধুনিক ডিজাইন ও ফিচারে প্রতিদিনের অভিজ্ঞতা হবে আরও রোমাঞ্চকর।
                        আজই সংগ্রহ করুন এবং উপভোগ করুন সময়ের এই নতুন জাদু
                    </h2>
                    <div className="grid gap-6 items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {products.filter(item => item.category === 'clock').slice(0, visibleCount).map((clock) => (
                            <div key={clock._id} className="p-4 w-full bg-indigo-400 text-black transform hover:scale-105 transition-transform duration-300">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={clock.image}
                                    />
                                </a>
                                <div className="mt-4 text-white">
                                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="title-font text-lg font-medium">{clock.name}</h2>
                                    <p className="mt-1">Price : {clock.price}</p>
                                    <Link to={`/order/${clock._id}`}>
                                        <button className="relative mt-4 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order now</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Show the button only if there are more items to display */}
                    {visibleCount < clocks.length && (
                        <div className='text-center'>
                            <button
                                className="relative inline-block px-4 py-2 font-medium group mt-6"
                                onClick={showMoreClocks}
                            >
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">See more</span>
                            </button>
                        </div>
                    )}
                </div>
            </section>
            {/* wallpapers section */}
            <section className="text-gray-600 bg-white body-font">
                <div className="container px-5 pt-24 mx-auto">
                    <h2 className="bg-yellow-300 font-semibold text-2xl text-center p-4 rounded-md mb-10">
                        Saudia Wallpaper Narshingdi নিয়ে আসছে আপনার ঘরের জন্য অভিজাত ডিজাইনের ওয়ালপেপার।খুব সহজে লাগানো যায়, টেকসই এবং মনোমুগ্ধকর  লুক পেতে এখনই অর্ডার করুন !
                    </h2>
                    <div className="grid gap-6 items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {wallpapers.slice(0, visibleCount).map((wallpaper) => (
                            <div key={wallpaper._id} className="p-4 w-full bg-indigo-400 text-black transform hover:scale-105 transition-transform duration-300">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={wallpaper.image}
                                    />
                                </a>
                                <div className="mt-4 text-white">
                                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="title-font text-lg font-medium">{wallpaper.name}</h2>
                                    <p className="mt-1">Price : {wallpaper.price}</p>
                                    <Link to={`/order/${wallpaper._id}`}>
                                        <button className="relative mt-4 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order now</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Show the button only if there are more items to display */}
                    {visibleCount < clocks.length && (
                        <div className='text-center'>
                            <button
                                className="relative inline-block px-4 py-2 font-medium group mt-6"
                                onClick={showMoreClocks}
                            >
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">See more</span>
                            </button>
                        </div>
                    )}
                </div>
            </section>
            {/* 3d wallpapers section */}
            <section className="text-gray-600 bg-white body-font">
                <div className="container px-5 pt-24 mx-auto">
                    <h2 className="bg-yellow-300 font-semibold text-2xl text-center p-4 rounded-md mb-10">
                        3D Wallpaper - দেয়ালে নিয়ে আসুন জীবন্ত ডিজাইনের ম্যাজিক! অসাধারণ গভীরতা ও প্রিমিয়াম ফিনিশ পেতে আজই অর্ডার করুন, ঘরের লুক বদলে দিন এক নিমিষে।
                    </h2>
                    <div className="grid gap-6 items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {wallpaperThreeD.slice(0, visibleCount).map((threeD) => (
                            <div key={threeD._id} className="p-4 w-full bg-indigo-400 text-black transform hover:scale-105 transition-transform duration-300">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={threeD.image}
                                    />
                                </a>
                                <div className="mt-4 text-white">
                                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="title-font text-lg font-medium">{threeD.name}</h2>
                                    <p className="mt-1">Price : {threeD.price}</p>
                                    <Link to={`/order/${threeD._id}`}>
                                        <button className="relative mt-4 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order now</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Show the button only if there are more items to display */}
                    {visibleCount < clocks.length && (
                        <div className='text-center'>
                            <button
                                className="relative inline-block px-4 py-2 font-medium group mt-6"
                                onClick={showMoreClocks}
                            >
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">See more</span>
                            </button>
                        </div>
                    )}
                </div>
            </section>
            {/* mates section */}
            <section className="text-gray-600 bg-white body-font">
                <div className="container px-5 pt-24 mx-auto">
                    <h2 className="bg-yellow-300 font-semibold text-2xl text-center p-4 rounded-md mb-10">
                        Wall Met - একদম ভিন্ন ধাঁচের দেয়াল সজ্জায় নিয়ে আসুন লাক্সারির ছোঁয়া। এক নজরে মুগ্ধ হওয়ার মতো এই মেট প্যানেল দেবে আপনার ঘরে অবিশ্বাস্য লুক!
                        এখনই অর্ডার করুন আর ম্যাজিক দেখুন !
                    </h2>
                    <div className="grid gap-6 items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {mates.slice(0, visibleCount).map((mate) => (
                            <div key={mate._id} className="p-4 w-full bg-indigo-400 text-black transform hover:scale-105 transition-transform duration-300">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={mate.image}
                                    />
                                </a>
                                <div className="mt-4 text-white">
                                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="title-font text-lg font-medium">{mate.name}</h2>
                                    <p className="mt-1">Price : {mate.price}</p>
                                    <Link to={`/order/${mate._id}`}>
                                        <button className="relative mt-4 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order now</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Show the button only if there are more items to display */}
                    {visibleCount < clocks.length && (
                        <div className='text-center'>
                            <button
                                className="relative inline-block px-4 py-2 font-medium group mt-6"
                                onClick={showMoreClocks}
                            >
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">See more</span>
                            </button>
                        </div>
                    )}
                </div>
            </section>
            {/* pcv section */}
            <section className="text-gray-600 bg-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className="bg-yellow-300 font-semibold text-2xl text-center p-4 rounded-md mb-10">
                        PVC Wall Canvas - আপনার দেয়ালে শিল্পের ছোঁয়া আনুন, যেখানে বাস্তবতা মিশে যায় কল্পনায়! অভিজাত ও দৃষ্টিনন্দন লুকের জন্য এটি সেই পারফেক্ট চয়েস যা আপনার ঘরকে করে তুলবে অবিস্মরণীয়।
                        আজই অর্ডার করুন এবং বৈচিত্র্যের জগতে প্রবেশ করুন !
                    </h2>
                    <div className="grid gap-6 items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {pvc.slice(0, visibleCount).map((pcv) => (
                            <div key={pvc._id} className="p-4 w-full bg-indigo-400 text-black transform hover:scale-105 transition-transform duration-300">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={pcv.image}
                                    />
                                </a>
                                <div className="mt-4 text-white">
                                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="title-font text-lg font-medium">{pcv.name}</h2>
                                    <p className="mt-1">Price : {pcv.price}</p>
                                    <Link to={`/order/${pcv._id}`}>
                                        <button className="relative mt-4 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Order now</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Show the button only if there are more items to display */}
                    {visibleCount < clocks.length && (
                        <div className='text-center'>
                            <button
                                className="relative inline-block px-4 py-2 font-medium group mt-6"
                                onClick={showMoreClocks}
                            >
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">See more</span>
                            </button>
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
};

export default Clock;
