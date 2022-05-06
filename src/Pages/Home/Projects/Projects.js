import React, { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import Project from "./Project/Project";


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [active, setActive] = useState("all");

      useEffect(()=>{
         fetchProject();
      },[]);

      const fetchProject = async()=>{
        const res = await fetch("./projects.json");
        const data = await res.json();
        setProjects(data.data);
        setFiltered(data.data);
      }



  return (
    <section className="container mx-auto">
      <h2 className="mt-12 mb-4 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
        Something that he has
        <span className="text-indigo-600 dark:text-indigo-500"> build</span>
      </h2>
      <p className="text-xl text-center">
        with love, expertise and pinch of magical ingredients
      </p>
      <div className="text-center">
        <Filter projects={projects} setFiltered={setFiltered} active={active} setActive={setActive}/>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filtered.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
