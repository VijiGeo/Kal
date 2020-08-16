import React from "react";
import "./style.css";
import Neoblock1 from "../../assets/neoblock/Neoblock.png";
import Neoblock2 from "../../assets/neoblock/login.png";
import Neoblock3 from "../../assets/neoblock/neoblock-old.png";
import Neoblock4 from "../../assets/neoblock/add-project.png";

import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <div className="projectLink">
          <Icon.Globe color="#276EFA" size={20} style={{ marginRight: 10 }} />
          neoblock.ai | Prototyped
        </div>
        <h1>Neoblock</h1>
        <h2>
          Hassle free documentation service that links your Github account
          directly to your projects and automatically generates README files
          within your code.{" "}
          {LinkItem(
            "http://ilab.virginia.edu/ilab/b/news/posts/neoblock-s-vijay-george-on-diy-for-the-tech-generation",
            "Read a Neoblock news article here."
          )}
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> React, Firebase, Digital
            Ocean, Github
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Founder, Single Full-Time
            Developer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={Neoblock1} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Neoblock2} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Neoblock3} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Neoblock4} />
        </div>
      </div>
    </div>
  );
};
