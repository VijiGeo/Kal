import React from 'react'

const Section = ({ title, subtitle }) => {
  return (
    <div className="cl-px-lg cl-h-xl cl-bg-secondary cl-flex cl-flex-wrap cl-items-center cl-justify-between">
      <div className="">
        <div className="cl-font-medium cl-leading-lg cl-text-secondary cl-text-sm">
          {title}
        </div>
      </div>
      <div className="cl-flex-shrink-0 cl-leading-lg cl-text-secondary cl-text-sm">
        {subtitle}
      </div>
    </div>
  )
}

export default Section




