import React from "react";
import "./style.css";
import Discovery1 from "../../assets/discovery/discovery.png";
import Discovery2 from "../../assets/discovery/proto2.png";
import Discovery3 from "../../assets/discovery/proto1.png";
import Discovery4 from "../../assets/discovery/market.png";
import Discovery5 from "../../assets/discovery/technical.png";

import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <div className="projectLink">
          <Icon.Shield color="#276EFA" size={20} style={{ marginRight: 10 }} />
          Coulter Foundation Internal Use Only
        </div>
        <h1>Discovery Platform</h1>
        <h2>
          Developed a cost-effective prototype device for the Wallace H. Coulter
          Foundation that would measure microbial growth in real-time by
          analyzing optical densities of bacterial cultures in multi-well plates
          in &lt;1 second. Data from the device was relayed onto the Discovery
          Platform which I designed and developed alongside a team of 3
          researchers and software engineers.
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> Django/Python, Sketch, Xbee
            IEEE, Arduino, Raspberry Pi, SQLite3
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Lead Software Engineer,
            Designer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={Discovery1} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Discovery2} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Discovery3} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Discovery4} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Discovery5} />
        </div>
      </div>
    </div>
  );
};
