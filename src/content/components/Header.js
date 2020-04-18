import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchTermSelector
} from "../selectors/controller"

class Header extends Component {


  componentDidMount() {
    const { isInputFocused } = this.props
    setTimeout(() => {
      const commandLine = document.getElementById('kal-command')
      if (isInputFocused) {
        commandLine.focus()
      } else {
        commandLine.blur()
      }
    }, 400)
  }

  render() {
    const { searchTerm, onSearchTermUpdate, activeItem, panelState } = this.props

    const searchTermUpdate = (e) => {
      const value = e.target.value
      onSearchTermUpdate(value)
    }

    return (
      <div className="cl-border-b-1 cl-border-primary">
        {/*TABS*/}
        <div className="cl-h-md cl-flex">
          {panelState.showBack &&
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 19L3 12M3 12L10 5M3 12L21 12" stroke="#817F8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          }
          <div className="cl-px-lg cl-font-medium cl-text-sm cl-leading-md cl-text-primary">
            {panelState.headerTitle}
          </div>
          {/* <div className="cl-pl-md cl-flex-shrink-0 cl-font-medium cl-text-sm cl-text-secondary cl-text-right">
            Send Feedback
          </div> */}
        </div>

        {/*SEARCH BAR*/}
        <div className="cl-relative cl-px-lg cl-py-md">
          <input id="kal-command" value={searchTerm} onChange={(e) => searchTermUpdate(e)} className="cl-border-none cl-placeholder-primary cl-text-white cl-text-xl cl-block cl-w-full cl-h-xl cl-form-input cl-bg-transparent focus:cl-outline-none" placeholder={panelState.searchPlaceholder} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeMode: state.controller.activeMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTermUpdate: (value) => {
      dispatch({
        type: 'SEARCH_TERM_UPDATED',
        payload: value
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

