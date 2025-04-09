import React from 'react';
import image from '../assets/gallery/micro.jpg';
import Button from '../components/button/buttonMain';

// Overview Component
export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-prestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
          Sattva Hamlet is a pre-launch Residential Township project on Airport Road.


          </span>
          <br />
          
            <span>
            <p>The Project spreads across 53 acres with 80% open spaces offering 3400+ units in various configurations. Sattva Hamlet Comprises of 13 high-rise buildings, each exemplifying modern architectural design.
            </p>  
            <br/>
            <p>Prime Location: Chikkajala, On Airport Road.</p>
            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => setContactModal(!contactmodal)} // Toggle contact modal on button click
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Sattva Hamlet"
              className=" w-[420px] h-auto max-h-[24rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
