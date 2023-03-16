import { Dropdown } from "flowbite-react";
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import AuthContext from "./store/store";

const CourseDropdown = (props) => {
  const storeCtx = useContext(AuthContext);
  let semId = props.courses ? props.courses : 1;
  const semData = props.semData;
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
    console.log("drop down is", isOpen);
  };
  const [subName, setSubName] = useState("Select Course");
  const [course, setCourse] = useState([]);
  useEffect(() => {
    let filteredCourse = semData.filter((sub) => sub.id === semId);
    setCourse(filteredCourse[0].items);
    setSubName("Select Course");
    storeCtx.setCourseFalse();
  }, [semId, setCourse]);

  const courseSelectionHandler = (sub) => {
    setSubName(sub.subjectName);
    storeCtx.setCourseTrue(sub);
  };
  return (
    <>
      <Dropdown label={subName}>
        {course.map((sub, idx) => (
          <Dropdown.Item
            key={idx + 1}
            onClick={() => courseSelectionHandler(sub)}
            className="w-full"
          >
            {sub.subjectName}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </>
  );
};

export default CourseDropdown;
