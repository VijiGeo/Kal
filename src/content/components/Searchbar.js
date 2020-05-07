import React, { Component } from 'react';
import { connect } from 'react-redux';

class Searchbar extends Component {

  componentDidMount() {

    setTimeout(() => {
      const commandLine = document.querySelector('kal-container').shadowRoot.querySelector('#kal-command-input')
      commandLine.focus()
    }, 400)
  }

  render() {
    const { searchTerm, onSearchTermUpdate, activeItem, panelState, setItemCursor } = this.props

    const searchTermUpdate = (e) => {
      const value = e.target.value
      console.log("VALUE", value, typeof (value))
      onSearchTermUpdate(value)
      if (value == "") {
        setItemCursor(1, 0)
      } else {
        setItemCursor(0, 0)
      }
    }

    return (
      <div className="cl-border-b-1 cl-border-primary">
        <div className="cl-relative cl-px-lg cl-pb-md">
          <input id="kal-command-input" value={searchTerm} onChange={(e) => searchTermUpdate(e)} className="cl-border-none cl-placeholder-primary cl-text-white cl-text-xl cl-block cl-w-full cl-h-xl cl-form-input cl-bg-transparent focus:cl-outline-none" placeholder={panelState.searchPlaceholder} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // activeMode: state.controller.activeMode,
    searchTerm: state.controller.searchTerm
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

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)

