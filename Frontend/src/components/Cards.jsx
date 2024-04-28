import React from 'react';

function Cards({ item }) {
    // Check if the item object and its image property exist
      // if (!item || !item.image) {
      //   // Return null or any other fallback content if the item or image is missing
      //   return null;
      // }
      
      const handleBuyNow = () => {
        // Open the YouTube link in a new tab when the "Buy Now" button is clicked
        window.open(item.link, '_blank');
      };

  return (
    <>
    <div className="p-3 my-3 mt-4 hover:cursor-grab">
        <div className="duration-200 shadow-xl card w-92 bg-base-100 hover:scale-105">
        <figure><img src={item.image} alt="Course"/></figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="flex justify-between card-actions">
            <div className="inline-block px-2 py-1 text-white bg-gray-800 rounded-full">
            ₹ {item.price} 
            </div>

            {/* <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200  ">Buy Now</div> */}

            
            {/* FOR LINKING */}
            <div
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
                onClick={handleBuyNow}
              >
                Buy Now
              </div>



            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Cards;