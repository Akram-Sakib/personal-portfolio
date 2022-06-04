import React, { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import Project from "./Project/Project";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    const res = await fetch("http://localhost:5000/portfolio");
    const data = await res.json();
    setProjects(data.result);
    setFiltered(data.result);
  };

  return (
    <>
      <section className="container mx-auto z-10">
        <h2 className="mt-12 mb-4 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
          Something that he has
          <span className="text-indigo-600 dark:text-indigo-500"> build</span>
        </h2>
        <p className="text-xl text-center dark:text-gray-400">
          with love, expertise and pinch of magical ingredients
        </p>
        <div className="text-center">
          <Filter
            projects={projects}
            setFiltered={setFiltered}
            active={active}
            setActive={setActive}
          />
        </div>
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence>
            {filtered.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

    </>
  );
};

export default Projects;
