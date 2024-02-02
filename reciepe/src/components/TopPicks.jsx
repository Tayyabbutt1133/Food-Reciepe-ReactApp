import React, { useState } from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Heading */}
      <h1 className="text-orange-500 font-bold text-3xl text-center py-2 mb-4">
        Top Picks
      </h1>

      {/* Slider */}
      <div className="lg:hidden"> {/* Show on small screens */}
        <Splide options={{ perPage: 1, gap: "0.5rem", grag: "free", arrows: false }}>
          {topPicks.map((item, index) => {
            return (
              <SplideSlide key={item.id}>
                <div className="relative overflow-hidden">
                  <img
                    className="w-full object-cover rounded-3xl cursor-pointer transform transition-transform ease-out duration-300 hover:scale-105"
                    src={item.img}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-3xl text-white">
                    <p className="font-bold text-2xl">{item.title}</p>
                    <p>{item.price}</p>
                    <button className="border-dotted border-2 border-white text-white px-4 py-2 mt-2 hover:bg-white hover:text-black transition-all duration-300">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>

      {/* Show on larger screens */}
      <div className="hidden lg:flex max-w-[1520px] m-auto py-2 px-2">
        <Splide options={{ perPage: 4, gap: "0.5rem", grag: "free", arrows: false }}>
          {topPicks.map((item, index) => {
            return (
              <SplideSlide key={item.id}>
                <div className="relative overflow-hidden group">
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer transform transition-transform ease-out duration-300 group-hover:scale-105"
                    src={item.img}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-3xl text-white">
                    <p className="font-bold text-2xl">{item.title}</p>
                    <p>{item.price}</p>
                    <button className="border-dotted border-2 border-white text-white px-4 py-2 mt-2 hover:bg-white hover:text-black transition-all duration-300">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default TopPicks;
