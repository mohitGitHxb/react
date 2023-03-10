import { Dropdown } from "flowbite-react";
import React, { useContext, useState } from "react";
import CourseDropdown from "./CourseDropdown";
import AuthContext from "./store/store";
const SemDropdown = () => {
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
   <Dropdown label={selectedSemester.sem}>
  {
    semData.map((sem) => (
      <Dropdown.Item
        key={sem.id}
        onClick={() => selectedSemesterHandler(sem)}
      >
        {sem.Semester}
      </Dropdown.Item>
    ))
  }
</Dropdown>
<CourseDropdown courses={selectedSemester.id} semData={semData}/>
    </div>
  );
};

export default SemDropdown;
