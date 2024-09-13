import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles and required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Review = () => {
    // Dummy reviews data
    const reviews = [
        { name: "Al-Amin", review: "Good products original", avatar: "/path-to-avatar" },
        { name: "Md. Monir", review: "অসাধারণ ভালো, একদম অরিজিনাল প্রডাক্ট।", avatar: "/path-to-avatar" },
        { name: "Ishrat Nahar", review: "Perfect quality... Pure Thanaka পেয়েছি", avatar: "/path-to-avatar" },
        { name: "Shammi A.", review: "Thanaka face pack just awesome, omg my face instantly Bright 😍 I love it", avatar: "/path-to-avatar" },
        { name: "Shammi A.", review: "Thanaka face pack just awesome, omg my face instantly Bright 😍 I love it", avatar: "/path-to-avatar" },
        { name: "Shammi A.", review: "Thanaka face pack just awesome, omg my face instantly Bright 😍 I love it", avatar: "/path-to-avatar" },
    ];

    return (
        <div className="bg-blue-200 py-10">
            {/* Title */}
            <h2 className="text-center text-4xl font-bold mb-8 text-black">সম্মানিত কাস্টমার রিভিউ</h2>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000, disableOnInteraction: false }}  
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Navigation, Pagination, Autoplay]}  
                className="w-full max-w-6xl mx-auto relative"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-white rounded-xl shadow-lg p-6 h-44">
                            {/* Review Header with Avatar */}
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
                                    src={review.avatar}
                                    alt={`${review.name}'s avatar`}
                                />
                                <div className="text-lg font-bold text-black">{review.name}</div>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 font-semibold">{review.review}</p>

                            {/* Pagination Bullets Positioned Inside the Card */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 swiper-pagination-bullets"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Order Button */}
            <div className="text-center mt-10">
                <button className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-all transform hover:scale-105">
                    অর্ডার করুন <span className="ml-2">🛒</span>
                </button>
            </div>
        </div>
    );
};

export default Review;
