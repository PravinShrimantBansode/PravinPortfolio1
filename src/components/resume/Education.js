import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Details</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Application (MCA)"
            subTitle="Sinhgad Institute of Business Administration and Research (SIBAR) - MCA "
            result="2020 - 2022    /    79%"
            des="Completed post Graduation from Savitribai Phule Pune University."
          />
          <ResumeCard
            title="Bachelor of Business Administration in Computer Application B.B.A (C. A) "
            subTitle="Shri Shahu Mandir Mahavidyalaya Pune "
            result="2017 - 2019    /    59%"
            des="Completed Graduation from Savitribai Phule Pune University."
          />
          <ResumeCard
            title="12th (HSC)"
            subTitle="Shri Shahu Mandir Mahavidyalaya Pune"
            result="2016 - 2017    /    64%"
          />
          <ResumeCard
            title="10th (SSC)"
            subTitle="Shri Sant Namdev Madhyamik Vidyalaya maharshinagar Pune"
            result="2014 - 2015    /    57%"
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
}

export default Education