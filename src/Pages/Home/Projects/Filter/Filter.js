import React, { useEffect } from 'react';

const Filter = ({ projects, setFiltered, active, setActive }) => {
  useEffect(() => {
    if (active === "all") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.category.includes(active)
    );
    setFiltered(filtered);
  }, [active]);

  return (
    <div className="flex justify-center py-12">
      <button
        className="rounded mx-2 bg-indigo-700 hover:bg-indigo-800 py-2 px-4 text-white"
        onClick={() => setActive("all")}
      >
        All
      </button>
      <button
        className="rounded mx-2 bg-indigo-700 hover:bg-indigo-800 py-2 px-4 text-white"
        onClick={() => setActive("business")}
      >
        Business
      </button>
      <button
        className="rounded mx-2 bg-indigo-700 hover:bg-indigo-800 py-2 px-4 text-white"
        onClick={() => setActive("portfolio")}
      >
        Portfolio
      </button>
      <button
        className="rounded mx-2 bg-indigo-700 hover:bg-indigo-800 py-2 px-4 text-white"
        onClick={() => setActive("e-commerce")}
      >
        E-Commerce
      </button>
    </div>
  );
};

export default Filter;