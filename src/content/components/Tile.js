import React from 'react'

const Tile = ({ item }) => {

  return (
    <tr className="cl-transition cl-duration-150 cl-ease-in-out hover:cl-bg-gray-50 focus:cl-outline-none focus:cl-bg-gray-50">
      <td className="cl-px-6 cl-py-4 cl-whitespace-no-wrap">
        <a href={item.url} className="cl-flex cl-items-center">
          {/* {item.favIconUrl &&
            <div className="flex-shrink-0 w-7 h-7">
              <img className="rounded-md w-7 h-7" src={item.favIconUrl} />
            </div>
          } */}
          <div className="cl-ml-4">
            <div className="cl-text-sm cl-font-medium cl-leading-5 cl-text-gray-200 cl-text-gray-600 cl-truncate">{item.title}</div>
            {/* <div className="text-sm leading-5 text-gray-500 truncate">    {item.url}
            </div> */}
          </div>
        </a>

      </td>
      {/* <td className="px-4 py-4 pr-6 text-right whitespace-no-wrap">
        {item.relevantTab && item.relevantTab.active ? <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
          Active
      </span> : <span className="inline-flex px-2 text-xs font-semibold leading-5 text-yellow-800 bg-yellow-100 rounded-full">
            Inactive
      </span>
        }
      </td> */}
    </tr>
  )
}

export default Tile

