import React from "react";
import "./project.css";
import { Projects } from "../../Utilis/Work";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Recent work</h2>
      <h3 className="workDesc">
        I take a pride in paying attention to the smallest details and making
        sure that my work is pixel perfect. I am exicted to bring my skills and
        experinece to help business acheive their goals and create a strong
        online presence, please check out my projects which i have made from
        scratch
      </h3>
      <div className="portfolio">
        {Projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolioItem">
              <div className="portfolioImg">
                <img src={image} alt={title} className="img" />
              </div>
              <h3 style={{color: 'black'}}>{title}</h3>
              <div className="portfolioItemCta">
                <Link to={github}>Github</Link>
                <Link to={demo}>Demo</Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
