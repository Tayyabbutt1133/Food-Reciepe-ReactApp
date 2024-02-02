import React, { useState } from "react";
// ICONS IMPORTS
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

// FUNCTION 
const TopNav = () => {



  // Logic building
  const [sideNav, SetSideNav] = useState(false);
  console.log(sideNav);


    //JSX CODE
  return (
    <>
      <div className=" full-nav max-w-[1320] mx-auto flex justify-between items-center p-4">
        {/* Section 1: Logo+Button */}
        <div className="Inside-Nav flex items-center">
          <div onClick={() => SetSideNav(!sideNav)} className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-medium">
            Cook
            <span className="text-orange-600 font-medium">Craft</span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-orange-700 text-white rounded-full px-4 py-2 font-bold cursor-pointer hover:bg-orange-600">
              Free
            </p>
            <p className="p-2 text-bold cursor-pointer">Delievery</p>
          </div>
        </div>

        {/* Section 2 : SEARCH */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className=" bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="search meals"
          ></input>
        </div>

        {/* Section 3: CART BUTTON*/}
        <button className=" bg-orange-700 hidden md:flex items-center py-2 rounded-full w-28 px-6 hover:bg-orange-600 text-white font-bold">
          <BsFillCartFill className=" mr-2" size={20} />
          Cart
        </button>
           {/* SIDENAV LOGIC */}
        {sideNav ? (
          <div
            className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
            onClick={() => SetSideNav(!sideNav)}
          ></div>
        ) : null}

        
        {/* Navbar Slide */}

        <div
          className={
            sideNav
              ? "nav fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "nav fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            className="cursor-pointer absolute right-4 top-4"
            onClick={() => SetSideNav(!sideNav)}
            size={25}
          />
          <h2 className=" text-2xl p-4 font-medium">
            Cook <span className="text-orange-500 font-medium">Craft</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-900">
              <li className="text-xl py-4 flex cursor-pointer items-center font-serif  hover:bg-gray-100">
                <BsPerson
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                My Account
              </li>

              <div className="border-b border-gray-300"></div>

              <li className=" text-xl py-4 flex cursor-pointer font-serif  hover:bg-gray-100">
                <TbTruckReturn
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                Delievery
              </li>
              <div className="border-b border-gray-300"></div>
              <li className=" text-xl py-4 flex cursor-pointer font-serif hover:bg-gray-100">
                <MdOutlineFavorite
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                My Favourite
              </li>
              <div className="border-b border-gray-300"></div>
              <li className=" text-xl py-4 flex cursor-pointer font-serif  hover:bg-gray-100">
                <FaGoogleWallet
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                My Wallet
              </li>
              <div className="border-b border-gray-300"></div>
              <li className=" text-xl py-4 flex cursor-pointer font-serif  hover:bg-gray-100">
                <MdHelp
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                Help
              </li>
              <div className="border-b border-gray-300"></div>
            </ul>
            <h2 className="ml-16 font-serif flex items-center">
              Made with Love <FaHeart className="ml-2" />
            </h2>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNav;
