import React from "react";
import "./style.css";
import Pioneer1 from "../../assets/pioneer/ThePioneer.png";
import Pioneer2 from "../../assets/pioneer/pioneer-detail.png";
import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <a
          href="https://hackcville.com/pioneer/"
          target="_blank"
          className="projectLink">
          <Icon.ExternalLink
            color="#276EFA"
            size={20}
            style={{ marginRight: 10 }}
          />
          thepioneer.co | Merged with HackCville
        </a>
        <h1>The Pioneer</h1>
        <h2>
          Developed website for The Pioneer from scratch to drive greater
          traffic to the online publication which serves as the community-driven
          entrepreneurship hub at the University of Virginia.
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> Wordpress, Custom-Theme,
            WPEngine, GoDaddy
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b>
            Website Development Team Lead, Developer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={Pioneer1} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Pioneer2} style={{ width: 700 }} />
        </div>
      </div>
    </div>
  );
};
