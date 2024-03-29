import React, { createContext, useState } from "react";
import Semester from "../../assets/Semesters";
const AuthContext = createContext({
  isCourseSelected: false,
  defaultCourseSelected: {
    subjectName: "",
    syllabusLink: "",
    driveLink: "",
    youtubeLink: [],
  },
  semData: Semester,
  setCourseTrue: () => {},
  setCourseFalse: () => {},
});
export const AuthContextProvider = (props) => {
  const [isCourseSelected, setIsCourseSelected] = useState(false);
  const [defaultCourseSelected, setDefaultCourseSelected] = useState({
    subjectName: "",
    syllabusLink: "",
    driveLink: "",
    youtubeLink:[],
  });
  const setCourseTrue = (sub) => {
    setIsCourseSelected(true);
    setDefaultCourseSelected(sub);
  };
  const setCourseFalse = () => {
    setIsCourseSelected(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isCourseSelected: isCourseSelected,
        defaultCourseSelected: defaultCourseSelected,
        semData: Semester,
        setCourseTrue: setCourseTrue,
        setCourseFalse: setCourseFalse,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
