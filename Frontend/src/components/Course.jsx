import React from 'react';
import Cards from './Cards';
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  const filterData = list.filter((data) => data.category === "Paid");
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:max-w-screen-xl md:px-10 px-4 py-8 rounded-lg shadow-md">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">Glad To See You <span className="text-pink-500">Advance In Course 🔥</span> </h1>
        <p className="mt-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut expedita voluptatum nulla rem reiciendis magni voluptatibus, laboriosam iste cum labore omnis ea impedit voluptates suscipit blanditiis vero eius similique! Sit!
        </p>
        
      <Link to="/">
        <button className="mt-6 bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">
          Back To Free Course
        </button>
      </Link>
        
      
      
      </div>

      {/* Maping data */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {/* {
            
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          } */}

        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </div>

    </div>
    </>
  )
}

export default Course;