import React from "react";

const Delievery = () => {
  return (
    <>
    <div className="w-full bg-white py-16 px-4">
  <h3 className="text-orange-500 font-serif text-4xl text-center mt-6">
    Quick Delivery App
  </h3>
  <div className="w-full mx-auto grid md:grid-cols-2">
    <img
      className="w-full h-auto md:w-550px mx-auto my-4" src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
      alt=""
    />
    <div className="flex flex-col justify-center">
      <p className="text-[#00df9a] font-bold font-serif text-2xl">Get The App</p>
      <h1 className="mr-7 md:text-4xl sm:text-3xl text-2xl font-bold py-2">
        Limitless convenience on-Demand
      </h1>
      <p className="w-full md:w-500px">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestias
        sit deleniti magni iusto temporibus ut maiores? Distinctio deleniti soluta
        fuga consequatur eos, ab suscipit dolorum iusto minima quod ullam, cumque
        voluptatem consectetur? Laboriosam possimus ad nostrum consectetur, quidem
        in.
      </p>
      <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 transition duration-300 ease-in-out hover:bg-[#00543f]">
        GET STARTED
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Delievery;
