import React, { useState } from "react";
import NestedDropdown from "./NestedDropdown";
import Semesters from "../assets/Semesters";
const Dropdown = () => {
  const [semData,setSemData] = useState(Semesters);
  return (
    <>
      <button
        id="multiLevelDropdownButton"
        data-dropdown-toggle="dropdown"
        class="text-white lg:font-bold tracking-wider font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Select Semester{" "}
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
       <div
      
      id="dropdown"
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-900 hover:text-gray-800  dark:text-gray-200"
        aria-labelledby="multiLevelDropdownButton"
      >
      {
        semData.map((element)=>{
           return <li key={element.id}>
              <button
                id="doubleDropdownButton"
                data-dropdown-toggle="doubleDropdown"
                data-dropdown-placement="right-start"
                type="button"
                class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {element.semester}
                <svg
                  aria-hidden="true"
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
             <NestedDropdown content={element.content}/>
            </li>
        })
      }
          </ul>
        </div>
    </>
  );
};

export default Dropdown;
