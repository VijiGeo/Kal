import React from 'react'

const Header = ({ }) => {
  return (
    <div>
      {/*TABS*/}
      <nav className="cl-flex">
        <a href="#" className="cl-px-3 cl-py-2 cl-font-medium cl-text-sm cl-leading-5 cl-rounded-md cl-text-gray-500 hover:cl-text-gray-700 focus:cl-outline-none focus:cl-text-indigo-600 focus:cl-bg-indigo-50">
          Kal
        </a>
        {/* <a href="#" className="cl-ml-4 cl-px-3 cl-py-2 cl-font-medium cl-text-sm cl-leading-5 cl-rounded-md cl-text-gray-500 hover:cl-text-gray-700 focus:cl-outline-none focus:cl-text-indigo-600 focus:cl-bg-indigo-50">
          Testing 2
        </a> */}
      </nav>

      {/*SEARCH BAR*/}
      <div className="cl-relative">
        <input autoFocus id="search" className="cl-block cl-w-full cl-form-input cl-bg-transparent focus:cl-outline-none" placeholder="Type a '/' command or search" />
      </div>
    </div>
  )
}

export default Header

