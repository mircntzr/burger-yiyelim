import React from "react";
import BannerPhoto from "../../assets/banneryeni.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${BannerPhoto})` }}
      >
        <div className="about-top-overlay">
          <h1 style={{ fontSize: "36px", color: "white" }}>Hakkımızda</h1>
        </div>
      </div>
      <div className="about-bottom">
        <div className="about-card">
          <h2 style={{ fontSize: "28px", color: "#333" }}>-Burger Yiyelim- </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus
            quo ut iusto eveniet nemo perferendis itaque, porro tempore illo
            dicta ea veniam accusantium, laboriosam dolorum rerum nam hic
            assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat ducimus repellat nisi eaque ratione? Quis quo cupiditate
            quisquam voluptas, officiis ea tempore dolores voluptatem sed,
            asperiores, dignissimos explicabo. Fugit, debitis. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam
            incidunt, ducimus obcaecati molestiae accusamus quas eveniet illum
            id. Sunt deserunt quasi quo praesentium earum quisquam reprehenderit
            maiores aliquid reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
