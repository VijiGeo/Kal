import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  componentDidMount() { }

  render() {
    const { panelState, setModalOpen } = this.props

    return (
      <div className="cl-py-md cl-border-b-1 cl-border-primary">
        <div className="cl-h-md cl-flex">
          {/* {panelState.showBack &&
            <svg className="cl-pl-lg cl-w-lg cl-h-lg cl-bg-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 19L3 12M3 12L10 5M3 12L21 12" stroke="#817F8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          } */}
          <div className="cl-px-lg cl-flex-auto cl-font-medium cl-text-sm cl-leading-md cl-text-primary">
            {panelState.headerTitle}
          </div>
          <a target="_blank" onClick={() => setModalOpen(false)} href="https://forms.gle/MhNEtXk7wTTrWaRE7" className="cl-px-lg cl-font-medium cl-text-sm cl-leading-md cl-text-secondary cl-no-underline">
            Send Feedback
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    setModalOpen: (value) => {
      dispatch({
        type: 'COMMAND_PANEL_TOGGLED',
        payload: value
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

