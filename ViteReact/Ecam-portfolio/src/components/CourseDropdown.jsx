import React, { useState , useContext } from "react";
import { useEffect } from "react";
import AuthContext from "./store/store";
const CourseDropdown = (props) => {

    const storeCtx = useContext(AuthContext);
    let semId = props.courses ? props.courses : 1;
    const semData = props.semData;
    const [subName,setSubName] = useState('Select Course');
    const[course,setCourse] = useState([]);
    useEffect(()=>{
        let filteredCourse = semData.filter(sub => sub.id === semId);
        setCourse(filteredCourse[0].items);
        setSubName('Select Course')
        storeCtx.setCourseFalse();
    },[semId,setCourse])

    const courseSelectionHandler = (sub)=>{
      setSubName(sub.subjectName);
      storeCtx.setCourseTrue(sub);
    }
  return (
    <>
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="click"
        className="text-white flex justify-between bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {subName}{" "}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownHover"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
            {
                course.map((sub,idx)=>{
                    return        <li key={idx + 1} >
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={()=>courseSelectionHandler(sub)}
                    >
                      {sub.subjectName}
                    </a>
                  </li>
                })
            }       
        </ul>
      </div>
    </>
  );
};

export default CourseDropdown;
