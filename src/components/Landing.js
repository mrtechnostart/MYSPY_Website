import React from "react";
import Navbar from "./Navbar";
import "./CSS/Landing.css";

const Landing = () => {
  return (
    <div className="bg-light landingBody">
      <Navbar />
      <div className="container">
        <div className="py-4 text-center primaryContainter">
          <h3 className="landing-title">Hello! It's Madhusudhan Pathak</h3>
          <p className="landing-description px-5">
            This Website is not completely active now. Just after a while, I left YouTube to focus on other aspects. But still, I use this as one of my major platforms to exhibit my new creations, from articles to poetry or anything else that I create. Everything by me is linked up here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
