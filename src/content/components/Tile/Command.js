import React, { Component } from 'react';

class Tile extends Component {
  render() {
    const { item, active, handleHover, handleSelect, index } = this.props

    return (
      <div tabindex={index} onClick={handleSelect} onMouseOver={handleHover} className={`${active && "cl-border-tile cl-bg-secondary"} cl-border-l-2 cl-border-0 cl-border-transparent cl-border-solid focus:cl-outline-none focus:cl-bg-gray-50 cl-w-main cl-h-tile cl-cursor-pointer`}>

        <div className="cl-py-md cl-px-md cl-whitespace-no-wrap">
          <div className="cl-flex cl-items-center cl-justify-center">
            <div className="cl-flex-shrink-0 cl-w-lg cl-h-lg">
              <div className="cl-w-lg cl-h-lg cl-text-primary cl-flex cl-items-center cl-justify-center cl-bg-secondary">
                {item.title.substring(0, 1)}
              </div>
            </div>
            <div className="cl-ml-md">
              <div className="cl-text-sm cl-font-medium cl-leading-lg cl-text-primary cl-truncate cl-break-normal cl-w-tile">{item.title}</div>
              <div className="cl-text-sm cl-truncate cl-leading-lg cl-text-secondary cl-w-tile">{item.desc}
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Tile

