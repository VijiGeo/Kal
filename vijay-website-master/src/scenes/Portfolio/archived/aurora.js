import React from "react";
import "./style.css";
import Aurora1 from "../../assets/aurora/aurora.png";
import Aurora2 from "../../assets/aurora/aurora-expanded.png";
import Aurora3 from "../../assets/aurora/AuroraLanding.png";
import Aurora4 from "../../assets/aurora/final-add.png";
import Aurora5 from "../../assets/aurora/proto1.png";
import Aurora6 from "../../assets/aurora/proto2.png";
import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <div className="projectLink">
          <Icon.Globe color="#276EFA" size={20} style={{ marginRight: 10 }} />
          myneo.io | Inactive
        </div>
        <h1>Aurora Link</h1>
        <h2>
          Social Dropbox - Never lose another link in your chats. Save links,
          files, images, and content from all across the web into curated
          streams and share them with your friends and coworkers.
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> Django, Heroku, PostgreSQL,
            Digital Ocean
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Software Developer (Django),
            Product Designer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={Aurora3} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Aurora1} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Aurora2} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Aurora4} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Aurora6} />
        </div>
        <div className="detailImageWrapper">
          <img className="detailImage" src={Aurora5} />
        </div>
      </div>
    </div>
  );
};
