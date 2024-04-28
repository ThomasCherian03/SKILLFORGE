import React from 'react'
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
    <div className="container flex flex-col px-4 mx-auto my-10 max-w-screen-2xl md:px-20 md:flex-row">
        <div className="order-2 w-full mt-12 md:w-1/2 md:mt-32">
            <div className="space-y-12 ">
                <h1 className="text-4xl font-bold">
                Empower Yourself Through Knowledge! <span className='text-blue-500 '>Sign In To Access Exclusive Content</span> And Accelerate Your Learning
                </h1>
                <p className="text-xl">
                Explore our range of exceptional free courses covering a variety of subjects. From beginner-friendly tutorials to advanced skill-building sessions, there's something for everyone. Ready to take your learning journey to the next level?
                <span className='text-green-500 '> Sign up for our premium courses and unlock exclusive content, personalized guidance, and advanced tools to accelerate your progress.</span> <br/>Start learning today
                </p>

                {/* Email input */}
                {/* <label className="flex items-center gap-2 input input-bordered">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" className="grow" placeholder="Email" />
                </label> */}

            </div>

            {/* BUTTON */}
            {/* <button className="mt-6 btn btn-secondary">Secondary</button> */}


        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="mt-20" alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner;