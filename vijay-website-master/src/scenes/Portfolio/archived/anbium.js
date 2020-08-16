import React from "react";
import "./style.css";
import AnbiumPage1 from "../../assets/anbium/AnbiumPage1.png";
import AnbiumPage2 from "../../assets/anbium/AnbiumPage2.png";
import AnbiumPage3 from "../../assets/anbium/AnbiumPage3.png";
import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <a
          href="https://www.anbium.com/"
          target="_blank"
          className="projectLink">
          <Icon.ExternalLink
            color="#276EFA"
            size={20}
            style={{ marginRight: 10 }}
          />
          anbium.com
        </a>
        <h1>Anbium Technologies LLC</h1>
        <h2>
          Started a software development company with a mission to create
          products to create a more sustainable world and developing products
          in-house to solve problems in key spaces. Delivered end-to-end
          solutions for startups, nonprofits, science foundations, and
          government organizations through research, design, and software
          development.
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> React, React Native, Github,
            Netlify, Sketch, InVision, Wake, Principle, Framer, Javascript,
            Python, Django
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Product Designer, Software
            Developer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={AnbiumPage1} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={AnbiumPage2} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={AnbiumPage3} />
        </div>
      </div>
    </div>
  );
};
