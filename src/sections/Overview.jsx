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
          Sattva Hamlet – Pre-Launch Residential Township on Airport Road




          </span>
          <br />
          
            <span>
            <p>Spanning 53 acres with 80% open spaces, this thoughtfully planned development offers over 3,400 units across multiple configurations to suit diverse lifestyles.</p>
<br />
<p>The project features 13 high-rise towers, each showcasing modern architectural excellence, designed to deliver comfort, convenience, and community living at its finest.</p>

            
            
            
            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  setContactModal(!contactmodal)
                  ReactGA.event({
                      category: "Form Submission",
                      action: "Enquire now",
                      label: "overview",
                      value: 1,
                    });
                   }}
                    // Toggle contact modal on button click
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
