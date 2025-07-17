import React from "react";
import masterplan from "../assets/masterPlan/masterPlan.webp";
import Button from "../components/button/buttonMain";

// Reusable Button Component


export const MasterPlan = ({ setContactModal, contactmodal }) => {
  return (
    <div
      className="px-6 md:px-[7.5rem] lg:px-64 mx-auto flex flex-col items-center justify-center bg-prestigeGrey py-7 md:py-14  gap-10"
      id="MasterPlan"
    >
      {/* Title */}
      <h2 className="text-black font-subheading font-normal text-3xl md:text-5xl w-fit uppercase">
        Master Plan
      </h2>

      {/* Master Plan Image and Button */}
      <div className="relative mt-5">
        <img
          src={masterplan}
          alt="Master Plan"
          className="max-w-screen-lg w-[80vw] pb-4"
        />

        {/* Get Master Plan Button */}
        <Button
            text="Download Brochure"
           onClick={() => {
                  setContactModal(!contactmodal)
                  ReactGA.event({
                      category: "Form Submission",
                      action: "download brochure",
                      label: "master plan",
                      value: 2,
                    });
                   }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            showArrow={false} // Arrow will not be displayed
          />
      </div>
    </div>
  );
};
