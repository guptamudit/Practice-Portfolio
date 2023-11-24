import picofme from "../assets/picofme.png";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <div className="mt-8 bg-bgShade" id="home">
      <div
        id="main"
        className="  lg:h-[100vh] md:h-[100vh] h-auto lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between lg:ml-[68.5px] md:ml-[45px] lg:py-24 pt-20 mb-12 lg:mb-0 gap-5"
      >
        <div className="md:w-1/2 w-full flex justify-around  ">
          <img src={picofme} alt="" className="md:w-[354px] w-[200px]" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full flex flex-col  md:block items-center mt-5">
          <h1 className="md:text-5xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            Hey, I am <span className="text-primary">Mudit Gupta</span>
          </h1>
          <p className="text-2xl text-center md:text-left text-body leading-9 mb-8">
            I am currently pursuing B.Tech in
            <br />
            Computer Science Engineering from
            <br />
            Maharaja Agrasen Intitute of Technology.
          </p>
          <a
            href={resume}
            download
            className="btn-primary rounded-2xl mb-5 lg:mb-0 px-8 py-4 "
          >
            My Resume
          </a>
        </div>
        {/* rigth side */}
      </div>
    </div>
  );
};

export default Home;
