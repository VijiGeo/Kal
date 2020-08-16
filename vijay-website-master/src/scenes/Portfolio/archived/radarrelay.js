import React from "react";
import "./style.css";
import Radar1 from "../../assets/radar/1.png";
import Radar2 from "../../assets/radar/2.png";
import Radar3 from "../../assets/radar/3.png";
import Radar4 from "../../assets/radar/4.png";
import Radar5 from "../../assets/radar/5.png";
import Radar6 from "../../assets/radar/6.png";
import Radar7 from "../../assets/radar/7.png";
import Radar8 from "../../assets/radar/8.png";
import Radar9 from "../../assets/radar/9.png";
import Radar10 from "../../assets/radar/10.png";
import Radar11 from "../../assets/radar/11.png";

import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <a
          href="https://radarrelay.com/"
          target="_blank"
          className="projectLink">
          <Icon.ExternalLink
            color="#276EFA"
            size={20}
            style={{ marginRight: 10 }}
          />
          Radar Relay | Trustless Token Trading
        </a>
        <h1>Radar Relay (Echo Mobile Trading)</h1>
        <h2>
          Designed prototype mocks for a Colorado-based crypto relayer startup,
          Radar Relay. Project was to develop a mobile interface for a token
          swapping mechanism which would be branded as Radar Echo.
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> Sketch, InVision,
            Storyboarding, User Personas/Research
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Product Designer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar1} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar2} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar3} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar4} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar5} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar6} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar7} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar8} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar9} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar10} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Radar11} />
        </div>
      </div>
    </div>
  );
};
