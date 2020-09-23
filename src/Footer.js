import React from "react";
import "./Footer.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer_main">
      <div className="footer">
        <div className="video_icon">
          <PlayCircleFilledIcon />
        </div>
        <div className="footer_text">
          <p> Watch our Introduction.</p>
        </div>
      </div>
      <div className="footer_link">
        <a href="https://www.google.com">
          <img src={require("./google.webp")} width="30" height="25" />
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com">
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
