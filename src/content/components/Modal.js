import React, { Component } from 'react';
import UITransition from './Transition'
import { Transition } from 'react-transition-group';
import HomePanel from "./Panel/Home"
// import TilePanel from "./Panel/Tile"
import { connect } from 'react-redux';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemCursor: 1,
      scrollPosition: 300
    }
  }

  componentDidMount() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.command === "toggle-feature") {
        if (this.props.tabs.length > 1) {
          this.setItemCursor(1, 0)
        } else {
          this.setItemCursor(0, 0)
        }
        sendResponse({ data: request.currentTab.title })
      }
    })
  }


  setItemCursor = (n, time) => {
    setTimeout(() => {
      this.setState({
        activeItemCursor: n
      })
    }, time)
  }

  handleItemHover = (index, item) => {
    const { updateActiveItem } = this.props
    this.setState({
      activeItemCursor: index,
    })
    updateActiveItem(item)
  }

  handleItemSelect = (id) => {
    const { setModalState, onSearchTermUpdate } = this.props

    chrome.runtime.sendMessage({ type: "switchToTab", tab: id }, (response) => {
      setModalState(false)
      onSearchTermUpdate("")
      this.setState({
        activeItemCursor: 1
      })
    })
  }

  handleKeyDown = (e, id) => {
    const { tabs, setModalState } = this.props
    const { activeItemCursor, scrollPosition } = this.state

    const activeElement = tabs[activeItemCursor]
    const scrollContent = document.querySelector('kal-container').shadowRoot.querySelector('#kal-content')

    //ESCAPE KEY
    if (e.keyCode === 27) {
      setModalState(false)
    }

    //UP KEY
    if (e.keyCode === 38 && activeItemCursor > 0) {
      // console.log("UP KEY PRESSED", e)

      e.preventDefault()
      this.setState(prevState => ({
        activeItemCursor: prevState.activeItemCursor - 1
      }), () => {
        if (activeItemCursor < tabs.length - 1 - 2) {
          scrollContent.scrollBy(0, -80)
          this.setState(prevState => ({
            scrollPosition: prevState - 80
          }))
        }
      })
    }

    //DOWN KEY
    else if (e.keyCode === 40 && activeItemCursor < tabs.length - 1) {
      // console.log("DOWN KEY PRESSED", e)

      e.preventDefault()
      this.setState(prevState => ({
        activeItemCursor: prevState.activeItemCursor + 1
      }), () => {
        if (activeItemCursor > 2) {
          scrollContent.scrollBy(0, 80)
          this.setState(prevState => ({
            scrollPosition: prevState + 80
          }))
        }
      })
    }

    //ENTER KEY
    else if (e.keyCode === 13) {
      this.handleItemSelect(activeElement.id)
    }
  }


  render() {
    const { isOpen, tabs, activeMode, setModalState, commandBarFocused, activeItem } = this.props
    const { activeItemCursor, scrollPosition } = this.state

    if (isOpen) {
      document.body.style.overflow = 'hidden'

      // setTimeout(() => {
      //   const scrollContent = document.querySelector('kal-container').shadowRoot.querySelector('#kal-content')

      //   scrollContent.scrollTo(0, this.state.scrollPosition)
      //   console.log("SCROLL CONTENT", scrollContent)

      // }, 100)

      // Save current focus
      // focusedElementBeforeModal = document.activeElement;
      // Listen for and trap the keyboard
      // modal.addEventListener('keydown', handleKeyDown);
      // // Focus first child
      // firstTabStop.focus();
    } else {
      document.body.style.overflow = 'scroll'
    }

    const PANEL_MODE = {
      "HOME": {
        headerTitle: "Kal",
        showBack: false,
        // searchPlaceholder: "Type a '/' command or search"
        searchPlaceholder: "Search Tabs"
      },
    }

    const panelData = {
      tabs: tabs,
      handleHover: this.handleItemHover,
      handleSelect: this.handleItemSelect,
      setItemCursor: this.setItemCursor,
      commandBarFocused: commandBarFocused,
      activeMode: activeMode,
      activeItemCursor: activeItemCursor,
      panelState: PANEL_MODE[activeMode],
      activeItem: activeItem
    }

    return (
      <div id="kal-modal" >
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
          <div className="cl-fixed cl-bottom-0 cl-inset-x-0 cl-px-md cl-pb-lg sm:cl-inset-0 sm:cl-p-0 sm:cl-flex sm:cl-items-center sm:cl-justify-center cl-z-9999">

            <UITransition
              show={isOpen}
              enter='cl-ease-out cl-duration-300'
              enterFrom='cl-opacity-0'
              enterTo='cl-opacity-100'
              leave='cl-ease-in cl-duration-200'
              leaveFrom='cl-opacity-100'
              leaveTo='cl-opacity-0'
            >
              <div id="kal-modal-overlay" onClick={() => setModalState(false)} className="cl-fixed cl-inset-0 cl-transition-opacity">
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
              {/* <FocusTrapZone> */}
              <div id="kal-modal-panel" className="cl-font-sans cl-font-medium cl-transition-all cl-transform cl-bg-primary cl-shadow-3xl cl-overflow-hidden cl-rounded-large cl-max-h-default cl-max-w-default cl-w-main" onKeyDown={(e) => this.handleKeyDown(e)}>
                {activeMode === "HOME" && <HomePanel data={panelData} />}
              </div>
              {/* </FocusTrapZone> */}

            </UITransition>

          </div>
        </Transition>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.controller.activeItem,
    activeMode: state.controller.activeMode,
    commandBarFocused: state.controller.commandBarFocused,
    searchTerm: state.controller.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
    onSearchTermUpdate: (value) => {
      dispatch({
        type: 'SEARCH_TERM_UPDATED',
        payload: value
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)

