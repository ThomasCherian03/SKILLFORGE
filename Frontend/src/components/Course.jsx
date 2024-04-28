import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from './Cards';

function Course() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getCourse();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter course items where category is "Paid"
  const paidItems = course.filter(item => item.category === "Paid");

  return (
    <div className="container px-4 py-8 mx-auto rounded-lg shadow-md max-w-screen-2xl md:max-w-screen-xl md:px-10">
      <div className="items-center justify-center text-center mt-28">
        <h1 className="text-2xl font-semibold md:text-4xl">Glad To See You <span className="text-pink-500">Advance In Course 🔥</span> </h1>
        <p className="mt-12">
        Discover the pinnacle of online learning! Unleash your potential with our curated selection of top-notch courses. Dive into subjects ranging from programming to psychology, all meticulously crafted to elevate your knowledge. With engaging content, expert instructors, and flexible learning options, embark on a journey of self-discovery and skill enhancement like never before.
        </p>
        <Link to="/">
          <button className="px-4 py-2 mt-6 text-white duration-300 bg-pink-700 rounded-md hover:bg-pink-800">
            Back To Free Course
          </button>
        </Link>
      </div>

      {/* Mapping paid items */}
      <div className="grid grid-cols-1 mt-12 md:grid-cols-4">
        {paidItems.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;


// MINE




// import React, { useEffect, useState } from 'react';
// import Cards from './Cards';
// // import list from "../../public/list.json"
// import axios from "axios"
// import {Link} from "react-router-dom"


// function Course() {
//   const[course,setCourse]=useState([])
//   useEffect(()=>{
//     const getCourse=async()=>{
//       try {
//         const res = awaitaxios.get("http://localhost:4001/book");
//         console.log(res.data)
//         setCourse(res.data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getCourse();
//   },[])

//   const filterData = list.filter((data) => data.category === "Paid");
//   return (
//     <>
//     <div className="container px-4 py-8 mx-auto rounded-lg shadow-md max-w-screen-2xl md:max-w-screen-xl md:px-10">
//       <div className="items-center justify-center text-center mt-28">
//         <h1 className="text-2xl font-semibold md:text-4xl">Glad To See You <span className="text-pink-500">Advance In Course 🔥</span> </h1>
//         <p className="mt-12">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut expedita voluptatum nulla rem reiciendis magni voluptatibus, laboriosam iste cum labore omnis ea impedit voluptates suscipit blanditiis vero eius similique! Sit!
//         </p>
        
//       <Link to="/">
//         <button className="px-4 py-2 mt-6 text-white duration-300 bg-pink-700 rounded-md hover:bg-pink-800">
//           Back To Free Course
//         </button>
//       </Link>
        
      
      
//       </div>

//       {/* Maping data */}
//       <div className="grid grid-cols-1 mt-12 md:grid-cols-4">
//           {/* {
            
//             list.map((item)=>(
//               <Cards key={item.id} item={item}/>
//             ))
//           } */}

//         {course.map((item)=>(
//           <Cards item={item} key={item.id}/>
//         ))}
//       </div>

//     </div>
//     </>
//   )
// }

// export default Course;