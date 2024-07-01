import React from "react";
import Img from '../assets/girl2.png'

const Section1 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white p-8">
        <div className="flex-1 flex justify-center">
          <img
            src={Img}
            alt="Expert"
            className="w-full max-w-sm object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold mb-4">
            We Are Experts In Our Field.
          </h2>
          <p className="mb-4">
            My digital company of professionals has been developing products for
            15 years.
          </p>
          <p className="mb-4">
            Ultrices sagittis feugiat pulvinar faucibus neque pretium mentum.
            Convallis egestas rhoncus iaculis laoreet feugiat orci amet turpis
            sagittis.
          </p>
          <p className="mb-4">
            Ultrices sagittis feugiat pulvinar faucibus neque pretium elementum.
            Convallis egestas rhoncus iaculis laoreet feugiat orci amet turpis
            sagittis.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
};

export default Section1;
