import React from "react";
import Navbar from "./Navbar";
import "./CSS/Landing.css";

const Landing = () => {
  return (
    <>
    <div className="bg-light">
      <Navbar />
      <div className="container">
        <div className="text-center primaryContainter d-flex align-items-center justify-content-center " style={{minHeight:"90vh"}}>
          <div className="container">
          <h3 className="landing-title">Hello! It's Madhusudhan Pathak</h3>
          <p className="landing-description px-5">
            This Website is not completely active now. Just after a while, I left YouTube to focus on other aspects. But still, I use this as one of my major platforms to exhibit my new creations, from articles to poetry or anything else that I create. Everything by me is linked up here.
          </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;
