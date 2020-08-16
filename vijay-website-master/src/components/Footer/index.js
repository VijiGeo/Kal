import React from "react";
import "./style.css";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerColumn">
        <h1>Contact</h1>
        <h2>
          <a href="mailto:vijaygeorge@hey.com" title="Email">
            vijaygeorge@hey.com
          </a>
        </h2>
        <h2>
          <a target="_blank" href="https://www.linkedin.com/in/vijaypgeorge/">
            LinkedIn
          </a>
        </h2>
      </div>
      <div className="footerColumn">
        <h1>Follow</h1>
        <h2>
          <a target="_blank" href="https://github.com/VijiGeo">
            Github
          </a>
        </h2>
        <h2>
          <a target="_blank" href="https://twitter.com/VijayPGeorge">
            Twitter
          </a>
        </h2>
      </div>
    </div>
  );
};
