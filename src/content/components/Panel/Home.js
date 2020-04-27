import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchTermSelector
} from "../../selectors/controller"
import Section from "../Section"
import Tile from "../Tile/Item.js"
import Header from "../Header"
import Searchbar from "../Searchbar"

class Panel extends Component {


  componentDidMount() { }

  render() {
    const { data: { tabs, handleHover, handleSelect, commandBarFocused, activeMode, activeItemCursor, panelState } } = this.props

    return (
      <React.Fragment>
        <Header isInputFocused={commandBarFocused} activeItemCursor={activeItemCursor} activeMode={activeMode} panelState={panelState} />
        <Searchbar panelState={panelState} />
        <div id="kal-content" className="cl-overflow-y-auto cl-overflow-x-hidden cl-h-main">
          <Section title="All Tabs" subtitle={`${tabs.length} Open`} />
          <div className="cl-mt-xxs">
            {tabs.map((item, id) => {
              const isActiveTile = activeItemCursor === id
              return (
                <Tile key={item.id} handleHover={() => handleHover(id, item)} handleSelect={() => handleSelect(item.id)} item={item} active={isActiveTile} />
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: searchTermSelector(state)
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

export default connect(mapStateToProps, mapDispatchToProps)(Panel)

