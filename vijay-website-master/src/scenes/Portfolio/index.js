import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProjectModal } from "../../components/Modal/projectModal";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import MetalWeb1 from "../../assets/metal-web/Metal-Web.png";
import MetalWeb2 from "../../assets/metal-web/Metal-Web-2.png"
import MunnyLanding from "../../assets/metal/MunnyWebsite.png";
import MetalLandingBottom from "../../assets/metal/MetalLandingBottom.png";
import Kal1 from "../../assets/kal/KAL.png"
import Kal2 from "../../assets/kal/KAL-2.png"
import BrokerageSell from "../../assets/brokerage/sell-flow.png";
import BrokerageReturning from "../../assets/brokerage/returning-user.png";
import Radar1 from "../../assets/radar/mock_1.png";
import Radar2 from "../../assets/radar/mock_2.png";
import Radar3 from "../../assets/radar/mock_3.png";
import Radar4 from "../../assets/radar/mock_4.png";
import Twinthread from "../../assets/twinthread/twinthread-main.png";
import TwinthreadMap from "../../assets/twinthread/map.png";

class PortfolioScene extends React.Component {
  state = {
    showModal: false,
    modalContent: false
    // modalContent: <DiscoveryModal />
  };

  componentDidUpdate() {
    if (this.state.showModal === true) {
      return (document.body.style.overflow = "hidden");
    } else {
      return (document.body.style.overflow = "visible");
    }
  }

  handleToggleModal = modalContent => {
    this.setState({
      showModal: !this.state.showModal,
      modalContent: modalContent
    });
    console.log(modalContent);
  };

  render() {
    const ProjectItem = ({
      title,
      subtitle,
      img1,
      img2,
      img3,
      img4,
      role,
      showcaseLink,
      showcaseTitle,
      company,
      description
    }) => {
      return (
        <div className="projectContainer">
          <div className="projectRow">
            <h1>
              {title} &mdash; {subtitle}
            </h1>
            <div id="f1" className="itemImageContainer">
              <img className="itemImage" src={img1} />
            </div>
            <div id={img3 ? "f1" : "f2"} className="itemImageContainer">
              <img className="itemImage" src={img2} />
            </div>
            {img3 && (
              <div id={img3 ? "f1" : "f2"} className="itemImageContainer">
                <img className="itemImage" src={img3} />
              </div>
            )}
            {img4 && (
              <div id={img3 ? "f1" : "f2"} className="itemImageContainer">
                <img className="itemImage" src={img4} />
              </div>
            )}
          </div>
          <div className="itemDescriptionContainer">
            {role} <span style={{ color: "#000" }}>{showcaseLink && "/"}</span>{" "}
            <span style={{ color: "#276efa" }}>
              <a target="_blank" href={showcaseLink}>
                {showcaseTitle}
              </a>
            </span>
            {/* <h1>{company}</h1> */}
            <h2>{description}</h2>
          </div>
        </div>
      );
    };

    return (
      <div>
        <Helmet>
          <title>Vijay George | Portfolio</title>
        </Helmet>
        <Header />
        {this.state.showModal && (
          <ProjectModal
            handleToggleModal={this.handleToggleModal}
            modalContent={this.state.modalContent}
          />
        )}
        <div className="bannerOne">
          <div className="bannerOneTextContainer">
            <h1>
              Hi, I'm{" "}
              <span style={{ color: "#276efa" }}>
                <a target="_blank" href="https://twitter.com/VijayPGeorge">Vijay</a>
              </span>
              . I enjoy building simple, intuitive, and visually stunning products that help to redefine the status quo.
            </h1>
          </div>
        </div>
        <h2 className="sectionHeader">Selected Projects</h2>
        <hr />
        <div className="bannerTwo">
          <div className="allProjectsContainer">
            <ProjectItem
              title="Munny Web"
              subtitle="delightful budgeting for young professionals"
              img1={MetalWeb1}
              img2={MetalWeb2}
              role="End-To-End Design &amp; React Development"
              showcaseLink="https://beta.withcastle.com"
              showcaseTitle="Launch Munny Web"
              description="Munny Web (rebranded as Castle) is a web based budgeting app built for young professionals seeking the flexibility of a spreadsheet and the power of a professional personal finance management tool. My work involved designing prototypes in Figma, building reusable React components, and architecting several application critical services through AWS Cognito, CloudFormation, DynamoDB, and IAM."
            />
            <ProjectItem
              title="Munny iOS"
              subtitle="automated risk-tolerance budgeting"
              img1={MunnyLanding}
              img2={MetalLandingBottom}
              role="End-To-End Design &amp; React Native Development"
              showcaseLink="https://www.metalmoney.io/"
              showcaseTitle="Munny iOS Website"
              description="Munny iOS (rebranded as Metal Money) is an iOS financial management app designed to assess risk tolerance to suggest smarter options for budgeting, saving, and investing your cash. Worked with a partner to build a react native application and launched a free digital version on TestFlight.
              "
            />
            <ProjectItem
              title="KAL"
              subtitle="command line for chrome"
              img1={Kal1}
              img2={Kal2}
              role="End-To-End Design &amp; Chrome Extension Development "
              showcaseLink="https://github.com/VijiGeo/Kal"
              showcaseTitle="Github Repo"
              description="KAL - Keyboard Automatic Logic - is a chrome extension designed to solve the headache of performing repetitive and time consuming tasks in Chrome. V1.0 of the command line for chrome was built to search through all a users tabs, history, and bookmarks to quickly search for relevant documents and sites. Worked solo with Chrome APIs and open sourced extension code."
            />
            <ProjectItem
              title="TwinOS Dashboard"
              subtitle="hardware analytics driven by ML"
              img1={Twinthread}
              img2={TwinthreadMap}
              role="Product Redesign &amp; Optimization, React Development"
              showcaseLink="https://www.twinthread.com/"
              showcaseTitle="TwinThread Website"
              description="Collaborated with CEO and engineering team to create a complete redesign of the TwinOS platform. Conducted user interviews to understand product issues, performed A/B tests via Optimizely, tracked key metrics through Mixpanel, and developed large components of the React dashboard."
            />
            <ProjectItem
              title="Expo Trading"
              subtitle="crypto short token trading"
              img1={BrokerageReturning}
              img2={BrokerageSell}
              role="UX Design"
              showcaseLink="https://www.expotrading.com"
              showcaseTitle="Expo Website"
              description="Worked with a startup team to develop designs for a new crypto short token trading product called Expo. My work involved helping the team create product flows in Sketch, map edge cases, and build a cohesive brand around the launch of the margin trading product. Expo Trading is now live on the Ethereum Mainnet and used by dYdX protocol users."
            />
            <ProjectItem
              title="Radar Echo"
              subtitle="crypto asset exchange"
              img1={Radar1}
              img2={Radar2}
              img3={Radar3}
              img4={Radar4}
              role="UX Design &amp; React Native Prototyping"
              showcaseLink="https://relay.radar.tech/"
              showcaseTitle="Radar Echo Website"
              description="Worked with a startup team to design and develop mobile prototypes in InVision Studio and React Native for a crypto token exchange app called Radar Echo. Project involved working with the design and growth teams on product vision and overall UX.
              "
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PortfolioScene;
