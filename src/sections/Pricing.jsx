import React, { useState, useEffect } from "react";
import Button from "../components/button/buttonMain";
import bhk1 from '../assets/gallery/5.webp';
import bhk2 from '../assets/gallery/6.webp';
import bhk3 from '../assets/gallery/16.webp';
import bhk5 from '../assets/gallery/31.jpg';
import bhk4 from '../assets/home/HOME.webp';

const Pricing = ({ setContactModal, contactmodal, formSubmitted }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);


  // Unlock pricing when form is submitted
  useEffect(() => {
    if (formSubmitted) {
      setIsUnlocked(true);
    }
  }, [formSubmitted]);

  // Handles switching between floor plans
  const handleFloorPlan = (index) => {
    setActiveTab(index);
  };

  const propertyTypes = [
    { type: "Studio", price: "₹ 58 Lacs ++",  image: bhk3 },
    { type: "1 BHK", price: "₹ 2.50 Cr ++",  image: bhk3 },
    { type: "2 BHK", price: "₹ 2.50 Cr ++",  image: bhk3 },
    { type: "2.5 BHK", price: "₹ 2.50 Cr ++",  image: bhk3 },
    { type: "3 BHK", price: "₹ 2.50 Cr ++",  image: bhk3 },
    { type: "3.5 BHK", price: "₹ 2.50 Cr ++",  image: bhk3 },
    { type: "4 BHK", price: "₹ 3.25 Cr ++",  image: bhk5 },
    
    // { type: "4 BHK Grande", price: "₹ 3.55 Cr ++", size: "2203 Sq.ft.", image: bhk2 },
  ];

  return (
    <section id="Pricing" className="bg-PrestigeGrey py-10 md:pt-20">
      <div className="max-w-9xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-black w-full text-center font-subheading font-normal text-3xl md:text-5xl uppercase">
          Available Units
        </h2>

        <div className="flex flex-wrap justify-center gap-10 items-center py-10 px-10 lg:py-12">
          {propertyTypes.map((property, index) => (
            <div
              key={index}
              className="relative p-4 w-fit bg-white cursor-pointer border-[1px] border-PrestigeDarkGrey"
              onClick={() => handleFloorPlan(index)}
            >
              <img src={property.image} alt={property.type} className="w-[400px] h-[250px] mb-8" />

              <div className="font-semibold font-subheading text-xl md:text-2xl w-64 text-black">
                {property.type}
              </div>

              <div className="max-w-md relative text-black">
                <div className="text-xl pt-4 flex items-center font-normal">
                  <span className="text-lg md:text-xl">&bull;</span>{" "}
                  <span className={`text-lg md:text-xl ${!isUnlocked ? "blur-md" : ""}`}>
                    Starting at: {property.price}
                  </span>
                </div>
                <div className="text-xl pt-4 flex items-center font-normal">
                  <span className="text-lg md:text-xl">&bull;</span>
                  <span className={`text-lg md:text-xl ${!isUnlocked ? "blur-md" : ""}`}>
                    Size: {property.size}
                  </span>
                </div>

                <Button
                  text="Get Pricing"
                  onClick={() => {
                  setContactModal(!contactmodal)
                  ReactGA.event({
                      category: "Form Submission",
                      action: "get pricing",
                      label: "pricing",
                      value: 1,
                    });
                   }}
                  className="absolute w-max top-1/2 right-0 transform -translate-y-1/2 px-6 py-3 text-center font-body font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out"
                  showArrow={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
