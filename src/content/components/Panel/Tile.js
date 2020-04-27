import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchTermSelector
} from "../../selectors/controller"
import Section from "../Section"
import ItemTile from "../Tile/Item.js"
import CommandTile from "../Tile/Command.js"
import commands from "../../fixtures/tileCommands"
import Header from "../Header"
import Searchbar from '../Searchbar';

class Panel extends Component {
  componentDidMount() { }

  render() {
    const { data: { tabs, handleHover, handleSelect, commandBarFocused, activeMode, activeItemCursor, panelState, activeItem } } = this.props

    console.log("ACIVE ITEM", activeItem)
    console.log("CURSOR", activeItemCursor)

    return (
      <React.Fragment>
        <Header isInputFocused={commandBarFocused} activeItemCursor={activeItemCursor} activeMode={activeMode} panelState={panelState} />
        {/* <Searchbar panelState={panelState} /> */}
        {/* {activeItem &&
          <ItemTile key={activeItem.id} item={activeItem} active={false} />
        } */}
        <div id="kal-content" className="cl-overflow-y-auto cl-overflow-x-hidden cl-h-main">
          <Section title="Available Commands" subtitle={`${tabs.length} Open`} />
          <div className="cl-mt-xxs">
            {commands.map((item, index) => {
              const isActiveTile = activeItemCursor === index
              return (
                item.status === "ACTIVE" &&
                <CommandTile key={item.id} index={index} handleHover={() => handleHover(index)} handleSelect={() => handleSelect(item.id)} item={item} active={isActiveTile} />
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

