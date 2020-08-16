import React from "react";
import "./style.css";
import VijayIcon from "../../assets/VijayIcon.png";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <div className="leftMenu">
        <NavLink to="/" className="NameContainer">
          <div className="HeaderIcon">
            <img src={VijayIcon} />
          </div>
        </NavLink>
        <NavLink
          to="/portfolio"
          className="menuItem"
          activeClassName="activeMenuItem">
          Portfolio
        </NavLink>
        {/* <NavLink
          to="/about"
          className="menuItem"
          activeClassName="activeMenuItem">
          About
        </NavLink> */}
        <a
          className="menuItem"
          target="_blank"
          href="mailto:vijaygeorge@hey.com"
          title="Email">
          Let's Chat
        </a>
      </div>
    </div>
  );
};
