import React from "react";
import "./Rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar_navigation">
        <h3>
          <a href="#about">About</a>
        </h3>
        <h3>
          <a href="#services">Services</a>
        </h3>
        <h3>
          <a href="#work">Work</a>
        </h3>
        <h3>
          <a href="#team">Team</a>
        </h3>
        <h3>
          <a href="#contacts">Contacts</a>
        </h3>
      </div>
      <div className="rightbar_image">
        <img className="rimage" src={require("./TDV_M33_05.svg")} />
      </div>
    </div>
  );
}

export default Rightbar;
