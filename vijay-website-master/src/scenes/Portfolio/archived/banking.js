import React from "react";
import "./style.css";
import Banking1 from "../../assets/banking/Dashboard_Main_Mode.png";
import Banking2 from "../../assets/banking/Budget_View_Mode.png";
import Banking3 from "../../assets/banking/Budget_Edit_Mode.png";
import Banking4 from "../../assets/banking/Account_Select_Mode.png";
import Banking5 from "../../assets/banking/Login_Mode.png";

import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <a
          href="https://invis.io/78NPU8BQJ9H"
          target="_blank"
          className="projectLink">
          <Icon.ExternalLink
            color="#276EFA"
            size={20}
            style={{ marginRight: 10 }}
          />
          InVision Prototype
        </a>
        <h1>Metal Banking</h1>
        <h2>
          InVision prototype for a futuristic web-based banking experience,
          developed as a continuation of Metal Mobile.
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> Sketch, InVision,
            Storyboarding, Edge-Case Testing, User Research, React
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Product Designer, React
            Developer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={Banking1} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Banking2} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Banking3} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Banking4} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Banking5} />
        </div>
      </div>
    </div>
  );
};
