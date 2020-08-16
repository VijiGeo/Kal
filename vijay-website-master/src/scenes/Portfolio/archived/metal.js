import React from "react";
import "./style.css";
import MetalWebsiteFull from "../../assets/metal/MetalWebsiteFull.png";
import { LinkItem } from "../../../components/LinkItem";
import * as Icon from "react-feather";

export default () => {
  return (
    <div className="projectModal">
      <div className="projectModalHeader">
        <a
          href="https://www.metalmoney.io/"
          target="_blank"
          className="projectLink">
          <Icon.ExternalLink
            color="#276EFA"
            size={20}
            style={{ marginRight: 10 }}
          />
          metalmoney.io
        </a>
        <h1>Metal Money (iOS Mobile App)</h1>
        <h2>
          Free digital financial agent for millennials to grow better habits to
          spend, save, and reduce debt by analyzing risk patterns and suggesting
          better ways to invest their money. Private launch to 500+ users on
          TestFlight (iOS) and 10K+ beta launch user signups.
          {/* {" "}
          {LinkItem(
            "https://www.metalmoney.io/",
            "Launched on iOS TestFlight."
          )} */}
        </h2>
        <div className="projectAboutHeader">
          <h3>
            <b style={{ color: "#000" }}>Stack:</b> React, React Native,
            GraphQL, Apollo, Graphcool, Sketch, Framer
          </h3>
          <h3>
            <b style={{ color: "#000" }}>Role:</b> Co-Founder (Team of 2),
            Front-End Developer, Product Designer
          </h3>
        </div>

        <div className="detailImageWrapper">
          <img className="detailImage" src={MetalWebsiteFull} />
          {/* <h1>Testing to see if this works</h1> */}
        </div>
      </div>
      {/* <div className="projectModalContent">
        <h1>
            Problem
        </h1>
        <h2>
            Existing products in the
            market cater towards wealthier audiences with a focus on investing.
            Younger audiences however, are largely more interested in saving
            money, paying off student debt, and wondering whether they'll have
            enough money for next month. Metal aims to solve all these issues by
            offering a product focused on the needs of a younger audience.
          </h2>
      </div> */}
    </div>
  );
};

// About
// Problem
// Development
// Takeaway
