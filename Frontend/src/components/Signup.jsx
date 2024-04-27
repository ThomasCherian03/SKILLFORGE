import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";


function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="w-[400px]">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}    method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
                
                <h1 className="text-lg font-bold">Signup</h1>

                {/* Name */}
                <div className="mt-4 space-y-2">
                    <span>Name</span>
                    <br/>
                    <input type="text" 
                    placeholder="Enter Your Full Name"
                    className="px-3 py-1 border rounded-md outline-none w-80"
                    {...register("name", { required: true })} />
                    <br/>
                    {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                
                {/* Email */}
                <div className="mt-4 space-y-2">
                    <span>Email</span>
                    <br/>
                    <input type="email" 
                    placeholder="Enter Your Email"
                    className="px-3 py-1 border rounded-md outline-none w-80" 
                    {...register("email", { required: true })}/>
                    <br/>
                    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                {/* password */}

                <div className="mt-4 space-y-2">
                    <span>Password</span>
                    <br/>
                    <input type="password" 
                    placeholder="Enter Your Password"
                    className="px-3 py-1 border rounded-md outline-none w-80" 
                    {...register("password", { required: true })} />
                    <br/>
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                {/* Button */}
                <div className="flex justify-between mt-6">
                    <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">
                        Signup
                    </button>
                    <p className="text-xl">Have Account?{" "} 
                        <button className="text-blue-500 underline cursor-pointer"
                        onClick={()=>document.getElementById("my_modal_3").showModal()}>
                            Login
                        </button>{" "}
                        <Login/>
                    </p>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;
