import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="p-40 w-[100vw]" id="about">
      <div className="w-full">
        <div className="flex flex-col gap-7 ">
          <h3 className="text-[2.5rem] block text-center font-[#111] tracking-[3px] font-[700]">
            ABOUT ME
          </h3>
          <hr className="w-12 h-[5px] mx-auto bg-[#facf0f] rounded-[5px]" />
          <p className="block text-center text-[#555] text-[1.2rem] font-[500] leading-[1.6] mx-auto max-w-[60rem]">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div>
          {/* get to know me section */}
          <div>
            <h3>Get to know me!</h3>
            <p>
              {`I'm`} a <strong>Frontend Web Developer</strong> building the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product. Check out some of my work in the{" "}
              <strong>Projects</strong>
              section. I also like sharing content related to the stuff that I
              have learned over the years in <span>Web Development</span> so it
              can help other people of the Dev Community. Feel free to Connect
              or Follow me on my Linkedin where I post useful content related to
              Web Development and Programming {`I'm`} open to{" "}
              <strong>Job</strong> opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then {`don't`} hesitate to{" "}
              <strong>contact </strong>
              me.
            </p>
            <div>
              <Link to="/">Contact</Link>
            </div>
          </div>
          <div>
            <h3>My Skills</h3>
            <p>my skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
