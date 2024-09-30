import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, upDateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);

    const onSubmit = async (data) => {
        const { usernameOrEmail, password, fullName, photoURL } = data;

        try {
            const result = await createUser(usernameOrEmail, password);

            if (result?.user) {
                await upDateProfile(fullName, photoURL);

                toast.success("User created successfully.");
                reset();
                navigate(location.state?.pathname || "/");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error creating user. Please try again later.");
        }
    };

    const handleShowPassword = () => {
        setShow(!show);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Create an account</h1>
                <div className="space-y-2 text-sm">
                    <label htmlFor="fullName" className="block">
                        Your Name
                    </label>
                    <input {...register("fullName", { required: true })} type="text" name="fullName" id="fullName" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                    {errors.fullName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="usernameOrEmail" className="block">
                        Your Email address
                    </label>
                    <input {...register("usernameOrEmail", { required: true })} type="email" name="usernameOrEmail" id="usernameOrEmail" placeholder="Email address" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                    {errors.usernameOrEmail && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            })}
                            type={show ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                        />
                        <span className="absolute right-4 top-3" onClick={handleShowPassword}>{show ? <IoMdEyeOff className="text-xl" /> : <FaEye className="text-xl" />}</span>
                    </div>
                    {errors.password && errors.password.type === "required" && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    {errors.password && errors.password.type === "pattern" && (
                        <span className="text-red-500">
                            Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long
                        </span>
                    )}
                </div>
                <button type="submit" className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                    Create an account
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s go
                    </span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
                <p className="text-sm text-center gap-2 flex justify-center sm:px-6">
                    Already have an account?
                    <Link to={"/login"} className="underline hover:text-indigo-600">
                        Login
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default Register;