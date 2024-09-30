import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";



const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);


    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                if (result?.user) {
                    toast.success('Successfully login!')
                    reset();
                    navigate(location.state?.pathname || "/");
                }
            })
            .catch(error => {
                if (error) {
                    reset();
                    toast.error("Pleach checkout your email or password");
                }
            })
    };

    const handleShowPassword = () => {
        setShow(!show);
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-28">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Your Email
                    </label>
                    <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Your Email Address" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block ">
                        Password
                    </label>
                    <div className="relative">
                        <input {...register("password", { required: true })} type={show ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <span className="absolute right-4 top-3" onClick={handleShowPassword}>{show ? <IoMdEyeOff className="text-xl" /> : <FaEye className="text-xl" />}</span>
                    </div>
                </div>
                <button type="submit" className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                    Log In
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s go
                    </span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
                {/* <div className="flex items-center pt-4 space-x-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div> */}
                {/* <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                    Don&apos;t have an account?
                    <Link to={"/register"} className="underline hover:text-indigo-600">
                        Sign up
                    </Link>
                </p> */}
            </div>
        </form>
    );
};

export default Login;