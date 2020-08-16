import React from "react";
import "./style.css";
import TwinThread from "../../assets/twinthread/twinthread.png";
import TwinThread2 from "../../assets/twinthread/twinthread-old.png";
import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <a
          href="https://www.twinthread.com/"
          target="_blank"
          className="projectLink">
          <Icon.ExternalLink
            color="#276EFA"
            size={20}
            style={{ marginRight: 10 }}
          />
          twinthread.com | Private App
        </a>
        <h1>TwinThread</h1>
        <h2>
          Redesigned, refactored, and developed software for the world's first
          digital innovation platform designed to enable manufacturers to profit
          from the Industrial Internet of Things.
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> React, Github, Netlify,
            Atlassian Tools
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Product Designer/Front-End
            Software Developer (10+ Startup Team)
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={TwinThread} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={TwinThread2} />
        </div>
      </div>
    </div>
  );
};
