import { Link } from "react-router-dom";
import Fade from "react-reveal/fade";
import Slide from "react-reveal/Slide";

const About = () => {
  const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SCSS",
    "GIT",
    "Github",
    "Tailwind CSS",
    "Node. js",
    "Express",
    "Mongodb",
    "C++",
    "TypeScript",
  ];

  return (
    <Fade clear duration={2000}>
      <div className="leading-[1.3] bg-[#fafafa] py-40 w-[100vw]" id="about">
        <div className="w-full mx-auto max-w-[1250px]">
          <div className="w-full px-[3rem] md:px-40 flex flex-col gap-7 mb-[6rem]">
            <h3 className="text-[2.5rem] block text-center font-[#111] tracking-[3px] font-[700]">
              ABOUT ME
            </h3>
            <hr className="w-12 h-[5px] mx-auto bg-[#facf0f] rounded-[5px]" />
            <p className="block text-center text-[#555] text-[1rem] md:text-[1.2rem] font-[500] leading-[1.6] mx-auto max-w-[60rem] md:text-center text-start">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="flex flex-col md:flex-row px-10 xl:px-0 justify-center align-middle gap-[60px]">
            {/* get to know me section */}
            <Slide left>
              <div className="flex-1">
                <h3 className="text-[2rem] font-[700] tracking-[1px] mb-12">
                  Get to know me!
                </h3>
                <p className="text-[#666] text-[1.1rem] mb-12">
                  {`I'm`} a <strong>Frontend Web Developer</strong> building the
                  Front-end of Websites and Web Applications that leads to the
                  success of the overall product. Check out some of my work in
                  the <strong>Projects </strong>
                  section.
                  <span className="mb-4 block" />I also like sharing content
                  related to the stuff that I have learned over the years in{" "}
                  <span>Web Development</span> so it can help other people of
                  the Dev Community. Feel free to Connect or Follow me on my{" "}
                  <span className="text-[#facf0f] mx-[3px] font-bold underline">
                    Linkedin
                  </span>{" "}
                  {` `}
                  where I post useful content related to Web Development and
                  Programming.
                  <span className="mb-4 block" />
                  {`I'm`} open to <strong>Job</strong> opportunities where I can
                  contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then {`don't`} hesitate
                  to <strong>contact </strong>
                  me.
                </p>
                <div className="bg-[#facf0f] text-[#111] py-3 px-[3rem] inline-block text-[1.3rem] font-bold rounded-[5px] transition-transform duration-[0.3s] button-shadow hover:-translate-y-[5px] hover:scale-[1.1]">
                  <Link to="/">CONTACT</Link>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className="flex-1">
                <h3 className="text-[2rem] font-[700] tracking-[1px] mb-12">
                  My Skills
                </h3>
                <div className="flex flex-wrap">
                  {mySkills.map((skill, i) => (
                    <div
                      className="py-3 px-3 mb-[1.5rem] mr-[1.5rem] text-[1.1rem] bg-[#99999933] rounded-[5px] font-[600] text-[#666] hover:scale-110 hover:-translate-y-2 transition-transform duration-500 ease-out"
                      key={i}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
