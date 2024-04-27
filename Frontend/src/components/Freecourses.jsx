import React from 'react';
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";
function Freecourses() {
    const filterData = list.filter((data) => data.category === "Free");
    console.log(filterData);
    // Slider
    var settings = {
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
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
                <h1 className='font-semibold text-xl pb-2'> FREE ONLINE COURSES</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere possimus eligendi saepe iure quae ipsum nobis, accusamus blanditiis quidem est voluptates voluptas officiis sapiente dolorum facilis dolorem neque impedit.
                </p>
            </div>
        
            <div>
                {/* SLIDER */}
                <Slider {...settings}>

                    {filterData.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))}
                  
                </Slider>
            </div>
        </div>
    </>
    
  )
}

export default Freecourses;

