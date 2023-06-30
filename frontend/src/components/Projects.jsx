/* eslint-disable no-unused-vars */
import MacbookMockup from "./Macbook";
import { Link } from "react-router-dom";

const projects = [
  {
    img: "src/assets/portfolio-preview.png",
    title: "DevFolio",
    description: `DevFolio is my personal portfolio website. It is a simple mobile responsive website build using Reactjs and Tailwind CSS that I build to showcase my work.`,
    stack: ["HTML", "JavaScript", "TailwindCSS", "React"],
    deployed: "https://raunak-devconnect.netlify.app",
    github: "",
  },
  {
    img: "src/assets/devconnect-preview.png",
    title: "DevConnector",
    description: `DevConnector is a web
    application which allows developers to created posts and like or
    dislike other${`'`}s post and write a comment on their post.`,
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node Js",
      "Redux",
      "MongoDb",
    ],
    deployed: "https://raunak-devconnect.netlify.app",
    github: "",
  },
];

const Projects = () => {
  return (
    <div className="leading-[1.3] py-40 w-[100vw]" id="about">
      <div className="w-full mx-auto max-w-[1250px]">
        <div className="w-full px-[5rem] md:px-40 flex flex-col gap-7 mb-[6rem]">
          <h3 className="text-[2.5rem] block text-center font-[#111] tracking-[3px] font-[700]">
            PROJECTS
          </h3>
          <hr className="w-12 h-[5px] mx-auto bg-[#facf0f] rounded-[5px]" />
          <p className="block text-start md:text-center text-[#555] text-[1.2rem] font-[500] leading-[1.6] mx-auto max-w-[60rem]">
            Here you will find some of the personal projects I created with each
            project containing the deployed link and github repository link
          </p>
        </div>
        {projects.map((project, ind) => (
          <>
            <div
              className={`flex gap-8 justify-center align-middle items-center mb-[5rem] px-[2rem] lg:px-3 flex-col md:flex-row ${
                ind & 1 ? "md:flex-row-reverse" : ""
              }`}
              key={ind}
            >
              <div className="flex-1 justify-center align-middle items-center">
                <MacbookMockup image={project.img} className="macbook-mockup" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h1 className="font-bold text-2xl mb-4">{project.title}</h1>
                <p className="leading-7">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.stack.map((stack, ind) => (
                    <div
                      key={ind}
                      className="py-3 px-3 mb-[0.5rem] mr-[1.5rem] text-[1.1rem] bg-[#99999933] rounded-[5px] font-[600] text-[#666] hover:scale-110 hover:-translate-y-2 transition-transform duration-500 ease-out"
                    >
                      {stack}
                    </div>
                  ))}
                </div>
                <div className="flex gap-6">
                  <Link target="_blank" to={project.deployed}>
                    <button
                      className="mt-[1.2rem] bg-[#facf0f] text-[#333] text-[1rem] uppercase tracking-[2px] inline-block font-[800] rounded-[5px] button-shadow transition-transform duration-[0.3s] py-[1rem] px-[3rem] hover:-translate-y-[1px] hover:scale-[1.1]"
                      to="/"
                    >
                      Live Demo
                    </button>
                  </Link>
                  <Link to={project.github} target="_blank">
                    <button
                      className="mt-[1.2rem] bg-[#facf0f] text-[#333] text-[1rem] uppercase tracking-[2px] inline-block font-[800] rounded-[5px] button-shadow transition-transform duration-[0.3s] py-[1rem] px-[3rem] hover:-translate-y-[5px] hover:scale-[1.1] "
                      to="/"
                    >
                      Github Repo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {ind !== projects.length - 1 && <hr className="mb-12 h-2" />}
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
