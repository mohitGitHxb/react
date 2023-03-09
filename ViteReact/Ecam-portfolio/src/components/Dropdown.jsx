import React, { useContext, useState } from "react";
import CourseDropdown from "./CourseDropdown";
import AuthContext from "./store/store";
const Dropdown = () => {
  // const [semData, setSemData] = useState(Semesters);
  const storeCtx = useContext(AuthContext);
  const semData = storeCtx.semData;
  const [selectedSemester, setSelectedSemester] = useState({sem:'Select Semester',isSelected:false,id:null});
  const selectedSemesterHandler = (e) =>{
    setSelectedSemester((prevState)=>{return {sem:e.Semester ,isSelected:true,id:e.id}});
    // console.log(selectedSemester);
  }
  return (
    <div className="flex flex-col md:flex-row md:gap-8 gap-4">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white flex justify-between bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
       {selectedSemester.sem}{" "}
        <svg
          className="w-4 h-4 ml-2"
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
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
     {   
    semData.map((ele)=>{

   return  <li key={ele.id} onClick={()=>{selectedSemesterHandler(ele)}}>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
                {ele.Semester}
            </a>
          </li>
    })
         }
        </ul>
      </div>

    <CourseDropdown courses={selectedSemester.id} semData={semData}/>
    </div>
  );
};

export default Dropdown;
