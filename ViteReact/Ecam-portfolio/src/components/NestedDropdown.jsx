import React from 'react'

const NestedDropdown = (props) => {
  const content = props.content;
  return (
    <>
      <div 
      id="doubleDropdown"
      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="doubleDropdownButton"
      >
    {
      Array.from(content).map((ele,ind)=>{
        return <li key={ind+1}>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {ele.subjectName};
            </a>
          </li>
      })
    }
    </ul>
    </div>
    </>
  )
}

export default NestedDropdown
