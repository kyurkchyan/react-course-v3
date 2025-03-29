import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element py-16 grid md:grid-cols-2 items-center gap-15">
        <article>
          <h1 className="text-4xl md:text-7xl font-bold tracking-wider">
            Gagik Kyurkchyan
          </h1>
          <p className="mt-4 text-2xl md:text-3xl text-slate-700 capitalize tracking-wide">
            I'm a software engineer with a passion for building web applications
            with React and Tailwind CSS.
          </p>
          <p className="mt-8 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="hero-social-icon" />
            </a>
            <a href="#">
              <FaLinkedin className="hero-social-icon" />
            </a>
            <a href="#">
              <FaTwitterSquare className="hero-social-icon" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
