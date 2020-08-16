import React from "react";
import "./style.css";
import Brokerage from "../../assets/brokerage/brokerage.png";
import Brokerage2 from "../../assets/brokerage/brokerage2.png";
import Brokerage3 from "../../assets/brokerage/brokerage3.png";

import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <a
          href="https://www.expotrading.com/"
          target="_blank"
          className="projectLink">
          <Icon.ExternalLink
            color="#276EFA"
            size={20}
            style={{ marginRight: 10 }}
          />
          Expo Trading
        </a>
        <h1>dYdX Expo Trading</h1>
        <h2>
          Developed prototype mocks for an early-stage San Francisco
          cryptocurrency startup, building a brokerage product on top of their
          decentralized derivatives and margin trading blockchain protocols.
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> Sketch, Wake, Storyboarding,
            Edge-Case Testing, User Research, Paper Prototyping
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Product Designer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={Brokerage} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Brokerage2} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Brokerage3} />
        </div>
      </div>
    </div>
  );
};
