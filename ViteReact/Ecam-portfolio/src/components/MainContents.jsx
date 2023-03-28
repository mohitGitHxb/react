import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./store/store";
const MainContents = (props) => {
  const storeCtx = useContext(AuthContext);
  const [subjectName, setSubjectName] = useState(``);
  const [links, setLinks] = useState({ syllabus: ``, drive: ``, youtube: []});
  useEffect(() => {
    setLinks({
      syllabus: storeCtx.defaultCourseSelected.syllabusLink,
      drive: storeCtx.defaultCourseSelected.driveLink,
      youtube:storeCtx.defaultCourseSelected.youtubeLink
    });
    setSubjectName(storeCtx.defaultCourseSelected.subjectName);
    console.table("Following links are", links);
    return () => {
      console.log("unmounting");
    };
  }, [storeCtx.defaultCourseSelected]);

  return (
    <section className="text-gray-400 body-font w-full">
      <div className="container mt-8 md:mt-10">
        <div className="lg:w-2/3 mt-2 flex  md:flex-row md:items-center justify-evenly md:justify-between items-center mx-auto md:mx-1">
          <h1 className="text-sm font-medium text-white">{`${subjectName}'s Syllabus  `}</h1>
          <a
            href={links.syllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 font-mono font-semibold text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-sm"
          >
            Check Out
          </a>
        </div>
        <div className="lg:w-2/3 mt-2 flex  md:flex-row md:items-center justify-evenly md:justify-between items-center mx-auto md:mx-1">
          <h1 className="text-sm font-medium  text-white">{`${subjectName}'s Drive link material  `}</h1>
          <a
            href={links.drive}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-white font-mono font-semibold bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-sm"
          >
            Check Out
          </a>
        </div>
    {   
      links.youtube.map((unit,idx) => {
        return <div key={idx+1} className="lg:w-2/3 mt-2 flex  md:flex-row md:items-center justify-evenly md:justify-between items-center mx-auto md:mx-1">
          <h1 className="text-sm font-medium  text-white">{unit.unit?`${subjectName}'s unit - ${unit.unit} link`:
          `${subjectName}'s full playlist`}</h1>
          <a
            href={unit.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-white font-mono font-semibold bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-sm"
          >
            Check Out
          </a>
        </div>
      })
        }
      </div>
    </section>
  );
};

export default MainContents;
