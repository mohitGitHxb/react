import React, { createContext, useState } from 'react'
import Semester from '../../assets/Semesters'
const AuthContext = createContext({
    isCourseSelected:false,
    defaultCourseSelected:{
        subjectName:'',
        syllabusLink:'',
        driveLink:'',
    },
    semData:Semester,
    setCourseTrue: ()=>{},
    setCourseFalse: ()=>{},
})
export const AuthContextProvider = (props)=>{
    const[isCourseSelected,setIsCourseSelected] = useState(false);
    const[defaultCourseSelected,setDefaultCourseSelected] = useState({subjectName:'',syllabusLink:'',driveLink:''})
    const setCourseTrue = (sub)=>{
    setIsCourseSelected(true);
    setDefaultCourseSelected(sub);

    console.log(isCourseSelected);
    console.table(defaultCourseSelected);
    
}
const setCourseFalse = ()=>{
    setIsCourseSelected(false);
    console.log(isCourseSelected);
    console.table(defaultCourseSelected);
}

    return(
        <AuthContext.Provider value={{
            isCourseSelected: isCourseSelected,
            defaultCourseSelected: defaultCourseSelected,
            semData:Semester,
            setCourseTrue: setCourseTrue,
            setCourseFalse: setCourseFalse,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext