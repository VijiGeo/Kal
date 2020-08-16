import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet";

const LinkItem = (link, text) => {
  return (
    <a href={link} target="_blank">
      <b
        style={{
          color: "#276efa",
          fontWeight: "500"
        }}>
        {text}
      </b>
    </a>
  );
};

class HomeScene extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Vijay George | About</title>
        </Helmet>
        <Header />
        <div className="bannerOne">
          <div className="bannerOneTextContainer">
            <h1>
              <a
                href="https://github.com/VijiGeo"
                target="_blank"
                style={{ color: "#276efa" }}>
                Vijay George
              </a>
              : "I'm a digital product designer with a love for machine learning
              and front-end development."
            </h1>
            <div className="textBanner">
              <h2>
                Most recently I built{" "}
                {LinkItem("https://metalmoney.io", "Metal Money")}, an iOS app
                to help millennials better utilize their money by analyzing risk
                patterns and suggesting better ways to save and invest. While in
                college I started a company called{" "}
                {LinkItem("https://www.anbium.com", "Anbium")}, building
                end-to-end custom solutions for various startups and research
                organizations. In 2017, I graduated from the{" "}
                {LinkItem("http://virginia.edu/", "University of Virginia")} in
                Electrical Engineering and have continued working with
                fast-paced companies ever since.
              </h2>
              <h2>
                I believe that building impactful products requires a deep
                commitment to {LinkItem("https://www.apple.com/", "design")}, at
                every level in an organization. Great design in my experience
                has a wonderful way of distilling even the most complex and
                abstract concepts into its simplest form. This state is usually
                achieved by continually asking{" "}
                {LinkItem(
                  "https://www.youtube.com/watch?v=qp0HIF3SfI4",
                  `"why?"`
                )}
                .
              </h2>
              <h2>
                In my free time, I enjoy cooking new recipes, trail biking,{" "}
                {LinkItem("http://course.fast.ai/ml", "learning ML")}, and
                watching re-runs of {LinkItem("https://goo.gl/kDSS1B", "Chuck")}
                . Recently, I've been incredibly fascinated by the ways in which{" "}
                {LinkItem(
                  "https://www.wired.com/story/187-things-the-blockchain-is-supposed-to-fix/",
                  "crypto & blockchain"
                )}{" "}
                will change the world.
              </h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomeScene;
