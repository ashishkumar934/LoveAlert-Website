import React from "react";
import "./Leftbar.css";
function Leftbar() {
  const clickhandler = () => {
    alert("We are going to start");
  };
  return (
    <div className="leftbar">
      <div className="block_cover">
        <div className="block"></div>
        <div className="small_block"></div>
        <h2> Gellio</h2>
      </div>
      <div className="leftbar_title">
        <h1>Digital Product Manager</h1>
        <p>
          Create a unique illustration for a website, application or
          presentation.
        </p>
      </div>
      <button className="leftbar_button" onClick={clickhandler}>
        GET STARTED
      </button>
    </div>
  );
}

export default Leftbar;
