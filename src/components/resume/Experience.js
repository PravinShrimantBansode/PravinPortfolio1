import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Trainee (Intern) | Duration:- 04/2022 - 07/2022"
            subTitle="COMPUTER HOME PRIVATE LTD (CHPL)
            Karvenager Pune - 411052"
            result="Completed"
            des="Completed 3 months internship on Oracle Database and Jasper Reporting Tool 
            I Joined in company (CHPL) as a Trainee (Intern) • The CHPL is a core developer of the above Catalyst HRMS System and is also responsible for Upgrading and Maintenance of the same system for last 16 years. • the bank has introduced Two new earning heads & Two new deduction heads, so I have studied the impact the Said changes in the HRMS System & done the impact analysis, • after doing The Impact Analysis 
            I have done the system design & its implementation. • Unit testing of the said changes, installing the unit tested changes on test server of the bank. • On approval of the Customer/Bank, deploying the approved changes on the production server of the bank."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
