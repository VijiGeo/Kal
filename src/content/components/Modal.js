import React from 'react'
import Tile from "./Tile.js"
import UITransition from './Transition'
import Header from "./Header"
import Section from "./Section"
import { Transition } from 'react-transition-group';

const Modal = ({ isOpen, tabs }) => {
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
      <div className="cl-fixed cl-bottom-0 cl-inset-x-0 cl-px-4 cl-pb-6 sm:cl-inset-0 sm:cl-p-0 sm:cl-flex sm:cl-items-center sm:cl-justify-center cl-z-9999">
        {/* <UITransition
          show={isOpen}
          enter='cl-ease-out cl-duration-300'
          enterFrom='cl-opacity-0'
          enterTo='cl-opacity-100'
          leave='cl-ease-in cl-duration-200'
          leaveFrom='cl-opacity-100'
          leaveTo='cl-opacity-0'
        >
          <div className="cl-fixed cl-inset-0 cl-transition-opacity">
            <div className="cl-absolute cl-inset-0 cl-bg-default cl-opacity-75"></div>
          </div>
        </UITransition> */}

        <UITransition
          show={isOpen}
          enter='cl-ease-out cl-duration-300'
          enterFrom='cl-opacity-0 cl-translate-y-4 sm:cl-translate-y-0 sm:cl-scale-95'
          enterTo='cl-opacity-100 cl-translate-y-0 sm:cl-scale-100'
          leave='cl-ease-in cl-duration-200'
          leaveFrom='cl-opacity-100 cl-translate-y-0 sm:cl-scale-100'
          leaveTo='cl-opacity-0 cl-translate-y-4 sm:cl-translate-y-0 sm:cl-scale-95'
        >
          <div className="cl-transition-all cl-transform cl-bg-default cl-shadow-3xl cl-rounded-large cl-max-h-default cl-w-main">
            <Header />

            <div className="cl-overflow-scroll cl-h-default">
              <Section />
              <table className="">
                <tbody className="">
                  {tabs.map(item => {
                    return (
                      <Tile item={item} />
                    )
                  })}
                </tbody>
              </table>
            </div>

          </div>

        </UITransition>
      </div>
    </Transition >

  )
}

export default Modal

