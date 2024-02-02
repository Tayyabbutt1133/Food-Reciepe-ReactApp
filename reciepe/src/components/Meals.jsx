import React, { useState } from "react";
import { mealData } from "../data/data";
import { AiOutlineArrowRight } from "react-icons/ai";

const Meals = () => {

    // Logic building 
  const [foods, setFoods] = useState(mealData)
  
  // Function to filter things based on what category click
  const filterCat = (category) => {
    setFoods(
      mealData.filter((item) => { 
        // this will take fetch the categories from item in mealdata file and place it to category 
        return item.category === category;
      })
      )    
    }
  return (
    <>
      {/* Main  */}
      <div className="Main max-w-[1520px] m-auto px-4 py-12">
         {/* Heading  */}
        <h1 className="text-orange-500 font-bold text-3xl text-center py-2 mb-4">
          Our Meals
        </h1>
        {/* Menu Mid option */}
        <div className="flex flex-col lg:flex-row justify-center">
  <div className="flex justify-center md:justify-center">
            <button onClick={()=>setFoods(mealData)} className="m-1 border-orange-700 bg-orange-700 text-white font-serif rounded-full px-4 py-2 transform hover:bg-white hover:text-orange-700 scale-105 transition-all duration-300">All</button> 
    <button onClick={()=>filterCat("pizza")}     className="m-1 border-orange-700 bg-orange-700 text-white font-serif rounded-full px-4 py-2 transform hover:bg-white hover:text-orange-700 scale-105 transition-all duration-300">Pizza</button>
    <button onClick={()=>filterCat("chicken")} className="m-1 border-orange-700 bg-orange-700 text-white font-serif rounded-full px-4 py-2 transform hover:bg-white hover:text-orange-700 scale-105 transition-all duration-300">Chicken</button>
    <button onClick={()=>filterCat("salad")}   className="m-1 border-orange-700 bg-orange-700 text-white font-serif rounded-full px-4 py-2 transform hover:bg-white hover:text-orange-700 scale-105 transition-all duration-300">Salad</button>
  </div>
</div>

         {/* Meals data fetching from data js file */}
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-12">
          {foods.map((item) => (
            <div key={item.id} className="border-none hover:scale-105 duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className=" flex justify-center py-2 px-4">
                <p className=" mr-20 font-bold">{item.name}</p>
                <p className=" bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-3 cursor-pointer border-8 font-serif">
                  {item.price}
                </p>
              </div>

              <div className=" pl-2 py-4 -mt-7">
                <p className="flex items-center text-indigo-600 cursor-pointer ml-4">View More 
                 <AiOutlineArrowRight className="w-5 ml-2 "/>
               </p>
              </div>
            </div>
          ))}
        </div>
        {/* end  */}
        




        {/* parent div  */}
      </div>
   
    </>
  );
};

export default Meals;
