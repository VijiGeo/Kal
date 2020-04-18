import React, { Component } from 'react';
import UITransition from './Transition'
import { Transition } from 'react-transition-group';
import Header from "./Header"
import HomePanel from "./Panel/Home"
import TilePanel from "./Panel/Tile"
import { connect } from 'react-redux';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemCursor: 0,
      activeItem: {},
    }
  }

  componentDidMount() { }


  handleKeyDown = (e) => {
    const { tabs, updateMode, isModalOpen, updateActiveItem } = this.props
    const { activeItemCursor } = this.state
    // arrow up/down button should select next/previous list element

    // console.log("CURSOR", activeItemCursor)
    const scrollContent = document.getElementById('kal-content')

    //MULTIPLE KEY MAP
    var map = {}

    //ESCAPE KEY
    if (e.keyCode === 27) {
      isModalOpen(false)
    }
    //UP KEY
    if (e.keyCode === 38 && activeItemCursor > 0) {
      e.preventDefault()
      this.setState(prevState => ({
        activeItemCursor: prevState.activeItemCursor - 1
      }), () => {
        if (activeItemCursor < tabs.length - 1 - 2) {
          scrollContent.scrollBy(0, -80)
        }
      })
    }
    //DOWN KEY
    else if (e.keyCode === 40 && activeItemCursor < tabs.length - 1) {
      e.preventDefault()
      this.setState(prevState => ({
        activeItemCursor: prevState.activeItemCursor + 1
      }), () => {
        if (activeItemCursor > 2) {
          scrollContent.scrollBy(0, 80)
        }
      })
    }

    //ENTER KEY
    else if (e.keyCode === 13) {
      updateMode("TILE")
      // console.log("ENTER")
    }

    //LEFT-COMMAND KEY
    else if (e.keyCode === 37) {
      updateMode("HOME")

      // var map = {}; // You could also use an array
      // onkeydown = onkeyup = function (e) {
      //   e = e || event; // to deal with IE
      //   map[e.keyCode] = e.type == 'keydown';
      //   /* insert conditional here */
      // }

      console.log("LEFT CLICKED")
    }

    //BACK-SLASH KEY
    // else if (e.keyCode === 220) {
    //   console.log("BACKSLASH ENABLED")
    // }
  }

  handleItemHover = (id) => {
    // this.state.updateActiveItem(id)
    this.setState(prevState => ({
      activeItemCursor: id
    }))
  }

  handleItemClick = (id) => {
    this.setState({
      activeItemCursor: id
    })
    this.props.updateMode("TILE")
  }

  render() {
    const { isOpen, tabs, isModalOpen, activeMode, commandBarFocused, mode } = this.props
    const { activeItemCursor } = this.state

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }


    const PANEL_MODE = {
      "HOME": {
        headerTitle: "Kal",
        showBack: false,
        searchPlaceholder: "Type a '/' command or search"
      },
      "TILE": {
        headerTitle: "Test",
        showBack: true,
        searchPlaceholder: "Search commands"
      }
    }

    return (
      <Transition
        unmountOnExit
        in={isOpen}
        appear={true}
        timeout={{
          appear: 0,
          enter: 0,
          exit: 200,
        }}
      >
        <div onKeyDown={(e) => this.handleKeyDown(e)} className="cl-fixed cl-bottom-0 cl-inset-x-0 cl-px-md cl-pb-lg sm:cl-inset-0 sm:cl-p-0 sm:cl-flex sm:cl-items-center sm:cl-justify-center cl-z-9999">

          <UITransition
            show={isOpen}
            enter='cl-ease-out cl-duration-300'
            enterFrom='cl-opacity-0'
            enterTo='cl-opacity-100'
            leave='cl-ease-in cl-duration-200'
            leaveFrom='cl-opacity-100'
            leaveTo='cl-opacity-0'
          >
            <div onClick={() => isModalOpen(false)} className="cl-fixed cl-inset-0 cl-transition-opacity">
              <div className="cl-absolute cl-inset-0 cl-bg-primary cl-opacity-75"></div>
            </div>
          </UITransition>

          <UITransition
            show={isOpen}
            enter='cl-ease-out cl-duration-300'
            enterFrom='cl-opacity-0 cl-translate-y-4 sm:cl-translate-y-0 sm:cl-scale-95'
            enterTo='cl-opacity-100 cl-translate-y-0 sm:cl-scale-100'
            leave='cl-ease-in cl-duration-200'
            leaveFrom='cl-opacity-100 cl-translate-y-0 sm:cl-scale-100'
            leaveTo='cl-opacity-0 cl-translate-y-4 sm:cl-translate-y-0 sm:cl-scale-95'
          >

            <div className="cl-font-sans cl-transition-all cl-transform cl-bg-primary cl-shadow-3xl cl-overflow-hidden cl-rounded-large cl-max-h-default cl-max-w-default cl-w-main cl-py-md">

              <Header isInputFocused={commandBarFocused} activeItemCursor={activeItemCursor} activeMode={activeMode} panelState={PANEL_MODE[activeMode]} />
              <div id="kal-content" className="cl-overflow-y-auto cl-overflow-x-hidden cl-h-main">
                {activeMode === "HOME" && <HomePanel tabs={tabs} cursor={activeItemCursor} handleHover={this.handleItemHover} handleClick={this.handleItemClick} />
                }
                {activeMode === "TILE" && <TilePanel tabs={tabs} cursor={activeItemCursor} handleHover={this.handleItemHover} handleClick={this.handleItemClick} />
                }
              </div>

            </div>

          </UITransition>


        </div>
      </Transition>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    // activeItemCursor: state.controller.activeItemCursor,
    activeMode: state.controller.activeMode,
    commandBarFocused: state.controller.commandBarFocused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isModalOpen: (value) => {
      dispatch({
        type: 'COMMAND_PANEL_TOGGLED',
        payload: value
      })
    },
    updateMode: (value) => {
      dispatch({
        type: 'ACTIVE_MODE_SET',
        payload: value
      })
    },
    updateActiveItem: (value) => {
      dispatch({
        type: 'ACTIVE_ITEM_SET',
        payload: value
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)

