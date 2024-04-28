import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [reloadPage, setReloadPage] = useState(false); // State to trigger page reload

    const onSubmit = async (data) => {
        const UserInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post("http://localhost:4001/user/login", UserInfo);
            console.log("Login API response:", response.data);

            if (response.data) {
                toast.success('Logged in Successfully');
                // Set state to trigger page reload
                setTimeout(()=>{
                    setReloadPage(true); 
                    localStorage.setItem("Users", JSON.stringify(response.data));
                },2000);
            }

            
        } catch (error) {
            console.error("Login API error:", error);
            if (error.response) {
                toast.error("Error: " + error.response.data.message);
                setTimeout(()=>{},2000);
            }
        }
    };

    // Handle page reload after successful login
    if (reloadPage) {
        window.location.reload();
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}> ✕ </Link>
                        <h3 className="text-lg font-bold">Login</h3>

                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="px-3 py-1 border rounded-md outline-none w-80"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                className="px-3 py-1 border rounded-md outline-none w-80"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Button */}
                        <div className="flex justify-between mt-6">
                            <button type="submit" className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">Login</button>
                            <p>Not Registered?{" "}
                                <Link to="/signup" className="text-blue-500 underline cursor-pointer ">Sign Up</Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
