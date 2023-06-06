import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold"> </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="•	Won the singing Competition In College "
          />
          <ResumeCard
            title="•	Won the Trophy of “Utkrusth Sanscrutic    Swayamsevak” in     NSS (National Service Scheme) Camp."
          />
          <ResumeCard
            title="•	Worked as NSS Volunteer & Attended NSS Special- Program / Camp from 2016 to 2018."
          />
          <ResumeCard
            title="•	Won First Price in National Integrity Competition in Our Collage Vision."
          />
          
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
