import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello. </span>
        <span>
          I 'm<span className="introName"> Rishabh</span>
          <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I am a skilled Frontend Developer with expertise in creating
          <br /> multiple Frontend Web Applications{" "}
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
