import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";

function Freecourses() {
    const [searchValue, setSearchValue] = useState("");
    const [courses, setCourses] = useState([]);
    const [isCoursesAvailable, setIsCoursesAvailable] = useState(true);
    const [isMDViewport, setIsMDViewport] = useState(false); // State to track whether the viewport width is MD or smaller

    useEffect(() => {
        const filterCourses = () => {
            const filteredData = list.filter((data) => {
                return data.category === "Free" && data.name.toLowerCase().includes(searchValue.toLowerCase());
            });
            setCourses(filteredData);
            setIsCoursesAvailable(filteredData.length > 0);
        };

        filterCourses();

        // Update isMDViewport state based on window width on initial mount and window resize
        const handleResize = () => {
            setIsMDViewport(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
        };
        handleResize(); // Call on initial mount
        window.addEventListener('resize', handleResize); // Listen for window resize
        return () => window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    }, [searchValue]);

    // Calculate font size based on viewport width
    const getPlaceholderFontSize = () => {
        return isMDViewport ? "sm" : "base"; // Use Tailwind's text size classes (sm for smaller screens, base for others)
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
            <div>
                <h1 className='pb-2 text-2xl font-semibold text-orange-500'> FREE ONLINE COURSES</h1>
                <p>
                Discover the pinnacle of free online learning! Unleash your potential with our curated selection of top-notch courses. Dive into subjects ranging from programming to psychology, all meticulously crafted to elevate your knowledge. With engaging content, expert instructors, and flexible learning options, embark on a journey of self-discovery and skill enhancement like never before.
                </p>
            </div>
                
                <br/><br/><br/>
                <div className="flex items-center w-auto gap-2 px-3 py-2 ml-5 border rounded-md input input-bordered md:w-80">
                    {/* Replace the following SVG code with your custom search icon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15 10.5C15 6.91 12.09 4 8.5 4S2 6.91 2 10.5 4.91 17 8.5 17s6.5-2.91 6.5-6.5z" />
                    </svg>
                    <input
                        type="text"
                        className={`text-white outline-none grow dark:bg-slate-900 ${getPlaceholderFontSize()}`} // Dynamic class for placeholder font size
                        placeholder={!isMDViewport ? "Search for free courses" : ""}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>

                {isCoursesAvailable ? (
                    <Slider {...settings}>
                        {courses.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                ) : (
                    <p>No free courses available.</p>
                )}
            </div>
        </>
    );
}

export default Freecourses;
    

// import React, { useEffect, useState } from 'react';
// import Cards from './Cards';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// // import list from "../../public/list.json";
// import axios from "axios";

// function Freecourses() {
//     const [course, setCourse] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     const [course,setCourse]=useState([]);
//     useEffect(() => {
//       const getCourse = async () => {
//         try {
//           const response = await axios.get("http://localhost:4001/book");
//           setCourse(response.data.filter((data) => data.category === "Free"));
//           setLoading(false);
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       };
  
//       getCourse();
//     }, []);

//     const [searchValue, setSearchValue] = useState("");
//     const [courses, setCourses] = useState([]);
//     const [isCoursesAvailable, setIsCoursesAvailable] = useState(true);
//     const [isMDViewport, setIsMDViewport] = useState(false); // State to track whether the viewport width is MD or smaller

//     useEffect(() => {
//         const filterCourses = () => {
//             const filteredData = list.filter((data) => {
//                 return data.category === "Free" && data.title.toLowerCase().includes(searchValue.toLowerCase());
//             });
//             setCourses(filteredData);
//             setIsCoursesAvailable(filteredData.length > 0);
//         };

//         filterCourses();

//         // Update isMDViewport state based on window width on initial mount and window resize
//         const handleResize = () => {
//             setIsMDViewport(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
//         };
//         handleResize(); // Call on initial mount
//         window.addEventListener('resize', handleResize); // Listen for window resize
//         return () => window.removeEventListener('resize', handleResize); // Cleanup on component unmount
//     }, [searchValue]);

//     // Calculate font size based on viewport width
//     const getPlaceholderFontSize = () => {
//         return isMDViewport ? "sm" : "base"; // Use Tailwind's text size classes (sm for smaller screens, base for others)
//     };

//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <>
//             <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
//                 <div>
//                     <h1 className='pb-2 text-xl font-semibold'> FREE ONLINE COURSES</h1>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere possimus eligendi saepe iure quae ipsum nobis, accusamus blanditiis quidem est voluptates voluptas officiis sapiente dolorum facilis dolorem neque impedit.
//                     </p>
//                 </div>
                
//                 <br/><br/><br/>
//                 <div className="flex items-center w-auto gap-2 px-3 py-2 ml-5 border rounded-md input input-bordered md:w-80">
//                     {/* Replace the following SVG code with your custom search icon SVG */}
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-gray-400">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15 10.5C15 6.91 12.09 4 8.5 4S2 6.91 2 10.5 4.91 17 8.5 17s6.5-2.91 6.5-6.5z" />
//                     </svg>
//                     <input
//                         type="text"
//                         className={`text-white outline-none grow dark:bg-slate-900 ${getPlaceholderFontSize()}`} // Dynamic class for placeholder font size
//                         placeholder={!isMDViewport ? "Search for free courses" : "Search"}
//                         value={searchValue}
//                         onChange={(e) => setSearchValue(e.target.value)}
//                     />
//                 </div>

//                 {isCoursesAvailable ? (
//                     <Slider {...settings}>
//                         {course.map((item) => (
//                             <Cards item={item} key={item.id} />
//                         ))}
//                     </Slider>
//                 ) : (
//                     <p>No free courses available.</p>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Freecourses;



// MAIN 




// import React from 'react';
// import Cards from './Cards';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import list from "../../public/list.json";
// function Freecourses() {
//     const filterData = list.filter((data) => data.category === "Free");
//     console.log(filterData);
//     // Slider
//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };

//   return (
//     <>
//         <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
//             <div>
//                 <h1 className='pb-2 text-xl font-semibold'> FREE ONLINE COURSES</h1>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere possimus eligendi saepe iure quae ipsum nobis, accusamus blanditiis quidem est voluptates voluptas officiis sapiente dolorum facilis dolorem neque impedit.
//                 </p>
//             </div>
        
//             <div>
//                 {/* SLIDER */}
//                 <Slider {...settings}>

//                     {filterData.map((item)=>(
//                         <Cards item={item} key={item.id}/>
//                     ))}
                  
//                 </Slider>
//             </div>
//         </div>
//     </>
    
//   )
// }

// export default Freecourses;

