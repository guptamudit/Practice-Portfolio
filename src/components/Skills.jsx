const skills = [
  {
    id: 1,
    name: "Languages",
    description: "C / C++, HTML + CSS, JavaScript",
    image: "src/assets/skills-4.png",
  },
  {
    id: 2,
    name: "Technology and Frameworks",
    description:
      "ReactJs + Vite, NodeJs + ExpressJs, TailwindCSS, Git+GitHub, MS Office",
    image: "src/assets/tech.png",
  },
  {
    id: 3,
    name: "Databases",
    description: "SQL, MySQL, MongoDB",
    image: "src/assets/database.jpg",
  },
  {
    id: 4,
    name: "Soft Skills",
    description: "Active Listening, Adaptability, Teamwork",
    image: "/src/assets/soft-skills.png",
  },
];

const Skills = () => {
  return (
    <div className="lg:mx-12 mx-4 py-10 mb-20 h-auto" id="skills">
      <div className="mb-[28px]">
        <h2 className="md:text-5xl text-center md:text-left text-4xl text-headingcolor font-bold">
          My Skills
        </h2>
      </div>

      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8  ">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt=""
              className="w-14 h-14 p-3 bg-white  rounded-lg shadow-md mb-7"
            />
            <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
            <p>
              {skill.description.split(", ").map((language) => (
                <li>{language}</li>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
