import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookMessenger,
  FaGithubSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-6 bg-[#24262b] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif text-orange-300 mb-4">
            CookCraft
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            fugiat explicabo accusamus architecto id! Sunt temporibus ducimus
            odio laborum iure earum voluptatibus quam in libero, maiores
            voluptates eum repellendus? Quisquam rem quibusdam error, vitae ad
            placeat nihil odio mollitia repudiandae?
          </p>
          <div className="flex mt-4">
            <FaDribbbleSquare size={30} className="mr-2 cursor-pointer" />
            <FaFacebookMessenger size={30} className="mr-2 cursor-pointer" />
            <FaGithubSquare size={30} className="mr-2 cursor-pointer" />
            <FaInstagram size={30} className="mr-2 cursor-pointer" />
            <FaTwitter size={30} className="cursor-pointer" />
          </div>
        </div>

        <div className="mb-4 sm:mb-0 sm:col-span-2 ml-96">
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between lg:w-96">
            <input
              type="email"
              placeholder="Email"
              className="p-3 flex w-full rounded-md text-black mb-2 sm:mb-0 sm:mr-2"
            />
            <button className="bg-green-500 text-white rounded-md px-4 py-2  h-12 sm: mr-14 w-48">
              Notify me
            </button>
          </div>

          <p className="mt-2 w-96 ml-4">
            We are concerned about the security of your data.
            <span className="text-[#00df9a] cursor-pointer">
            Read Privacy Policy
            </span>
          </p>
        </div>
      </div>

      <hr className="my-8 bg-gray-700 border-1" />
    </div>
  );
};

export default Footer;
