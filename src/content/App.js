import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from "./components/Modal"
import {
  allTabsSelector, searchFilteredTabsSelector
} from './selectors/data';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     thisTab: {}
  //   }
  // }

  componentDidMount() { }

  render() {
    const { isPanelToggled, tabs, currentTab } = this.props

    // chrome.runtime.sendMessage({ type: "tabId" }, (response) => {
    //   this.setState(prevState => ({
    //     thisTab: response.data.id
    //   }))
    // })
    // 
    // const modalOpen = isPanelToggled && currentTab.items.id === thisTab

    // console.log("CURRENT TAB", currentTab)

    const modalOpen = isPanelToggled && currentTab
    // console.log("CURRENT TAB", currentTab)
    // console.log("IS MODAL OPEN", modalOpen)
    // console.log("ALL TABS", tabs)
    return (
      <Modal isOpen={modalOpen} tabs={tabs} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPanelToggled: state.controller.commandPanelToggled,
    tabs: searchFilteredTabsSelector(state),
    currentTab: state.data.currentTab
  };
};

export default connect(mapStateToProps)(App);

