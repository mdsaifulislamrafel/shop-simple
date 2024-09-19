/* eslint-disable react/no-unknown-property */
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Order = () => {
    const data = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        const orderData = {
            ...formData,
            image: data.image,
            name: data.name,
            price: data.price
        }
        const res = await axiosPublic.post('/order', orderData);
        if(res.data.insertedId) {
            toast.success('Order added successfully')
            reset();
            navigate('/');
        } else {
            toast.error('Failed to add order')
        }
    };

    return (
        <div className="p-6 md:p-16 pt-20 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 md:p-12">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Order for: {data.name}</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            {...register('name', { required: true })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            {...register('email', { required: true })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <input
                            type="number"
                            placeholder="Your Phone Number"
                            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            {...register('number', { required: true })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Your Address"
                            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            {...register('address', { required: true })}
                        />
                    </div>

                    <div className="flex justify-around">
                        <button type="submit" className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">Order Now</span>
                        </button>
                        <Link to={'/'}>
                            <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Back now</span>
                                <span className="relative invisible">Back now</span>
                            </button>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Order;
