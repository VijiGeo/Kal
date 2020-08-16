import React from "react";
// import "./style.css";

export const LinkItem = (link, text) => {
  return (
    <a href={link} target="_blank">
      <b style={{ color: "#000", borderBottom: "1px solid #000" }}>{text}</b>
    </a>
  );
};
