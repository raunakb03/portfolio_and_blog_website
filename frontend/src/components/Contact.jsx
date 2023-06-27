const Contact = () => {
  return (
    <div className="hero-background p-[3rem] md:p-[8rem]">
      <div className="flex flex-col justify-center align-middle items-center">
        <div className="flex flex-col w-full align-middle justify-center items-center md:w-[90%]">
          <h1 className="font-bold text-[3rem] uppercase">Contact</h1>
          <div className="w-[3rem] h-1 bg-yellow-400 rounded-[5px] my-10"></div>
          <p className="text-center text-[1.2rem]">
            Feel free to Contact me by sumitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div className="w-full md:w-[80%] m-8 md:m-20 p-8 lg:p-16 bg-white rounded-[10px] flex flex-col justify-center align-middle items-center">
          <form className="w-full md:w-[80%]">
            <div className="flex flex-col mb-4">
              <h1 className="text-[#666] text-[14px] font-bold mb-3 text-left">
                Name
              </h1>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="text-[#333] p-4 w-full text-[16px] bg-[#f0f0f0] rounded-[5px]"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <h1 className="text-[#666] text-[14px] font-bold mb-3 text-left">
                Email
              </h1>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="text-[#333] p-4 w-full text-[16px] bg-[#f0f0f0] rounded-[5px]"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <h1 className="text-[#666] text-[14px] font-bold mb-3 text-left">
                Message
              </h1>
              <textarea cols="30" rows="10"
                type="text"
                placeholder="Enter Your Message"
                className="text-[#333] p-3 w-full text-[16px] bg-[#f0f0f0] rounded-[5px]"
              />
            </div>
          </form>
          <button
            className="mt-[1.5rem] bg-[#facf0f] text-[#333] text-[1.3rem] uppercase tracking-[2px] inline-block font-[800] rounded-[5px] button-shadow transition-transform duration-[0.3s] py-[1rem px-[3rem] p-2 md:px-[6rem] hover:-translate-y-[5px] hover:scale-[1.1] "
            to="/"
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
