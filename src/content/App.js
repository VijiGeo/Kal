import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from "./components/Modal"

export const getAllTabs = () => new Promise((resolve) => {
  chrome.tabs.query({
  }, (tabs) => {
    resolve(tabs);
  })
})

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // document.addEventListener('click', () => {
    //   this.props.dispatch({
    //     type: 'ADD_COUNT'
    //   });
    // });
  }

  render() {
    const { isPanelToggled, tabs } = this.props
    console.log("PANEL", isPanelToggled)
    console.log("TABS", tabs)

    return (
      // <div>Test</div>
      <Modal isOpen={isPanelToggled} tabs={tabs} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPanelToggled: state.controller.commandPanelToggled,
    tabs: state.data.currentTabs.items
  };
};

export default connect(mapStateToProps)(App);
