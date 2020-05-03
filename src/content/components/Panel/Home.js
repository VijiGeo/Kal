import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        <Section title="All Tabs" subtitle={`${tabs.length} Open`} />
        <div id="kal-content" className="cl-overflow-y-auto cl-overflow-x-hidden cl-h-main">
          <div className="cl-mt-xxs">
            {tabs.map((item, index) => {
              const isActiveTile = activeItemCursor === index

              return (
                <Tile key={item.id} handleHover={() => handleHover(index, item)} handleSelect={() => handleSelect(item.id)} item={item} active={isActiveTile} />
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveItem: (value) => {
      dispatch({
        type: 'ACTIVE_ITEM_SET',
        payload: value
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)

