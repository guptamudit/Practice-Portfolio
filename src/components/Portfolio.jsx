/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="lg:mx-12 mx-4 my-32  h-auto" id="portfolio">
      <div className="mb-20  flex flex-col sm:flex-row md:items-center sm:justify-between items-center gap-5">
        <div>
          <h2 className="md:text-5xl text-4xl text-center  text-headingcolor font-bold">
            My Projects
          </h2>
        </div>

        <a href="https://github.com/guptamudit" className="cursor-pointer">
          <button className="py-3 px-4 flex flex-row items-center justify-center gap-5 text-white rounded-md bg-dribble  w-auto">
            <FaGithub size={30} /> Visit My GitHub
          </button>
        </a>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="shadow-xl rounded-lg">
            <img src={project.image} alt="" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
                {project.name}
              </h3>
              <p className="text-body mb-4">{project.description}</p>
              <a href={project.link} className="underline underline-offset-8">
                View In GitHub{" "}
                <img
                  src="/src/assets/arrow.png"
                  alt=""
                  className="w-3 inline-block ml-3"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
