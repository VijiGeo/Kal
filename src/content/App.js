import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from "./components/Modal"
import {
  searchFilteredTabsSelector
} from './selectors/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandPanelToggled: false
    }
  }

  componentDidMount() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.command === "toggle-feature") {
        this.handleModalToggle()
        sendResponse({ data: request.currentTab.title })
      }
      sendResponse({ data: {} })
    })
  }

  handleModalToggle() {
    this.setState(prevState => ({
      commandPanelToggled: !prevState.commandPanelToggled
    }))
  }

  setModalState = (modalState) => {
    this.setState({
      commandPanelToggled: modalState
    })
  }

  render() {
    const { tabs } = this.props
    const { commandPanelToggled } = this.state

    return (
      <Modal isOpen={commandPanelToggled} tabs={tabs} setModalState={this.setModalState} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tabs: searchFilteredTabsSelector(state)
  };
};

export default connect(mapStateToProps)(App);

