import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchTermSelector
} from "../../selectors/controller"
import Section from "../Section"
import Tile from "../Tile/Item.js"

class Header extends Component {


  componentDidMount() {
  }

  render() {
    const { tabs, cursor, handleHover, handleClick } = this.props

    return (
      <React.Fragment>
        <Section title="All Tabs" subtitle={`${tabs.length} Open`} />
        <div className="cl-mt-xxs">
          {tabs.map((item, id) => {
            const isActiveTile = cursor === id
            return (
              <Tile key={item.id} handleHover={() => handleHover(id)} handleClick={() => handleClick(id)} item={item} active={isActiveTile} />
            )
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)

