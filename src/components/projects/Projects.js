import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Online Plant Store"
          des=" The “Online Plant Store” website is specially developed for online buy a plants, 
          Diﬀerent Kind of Plants are available e.g. (Flower plant, fruit plants, medicinal plants) with Online payment Option."
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects