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
    <section className=" body-font w-full max-w-2xl">
      <div className="container mt-8 md:mt-10 py-8 px-5 glassmorphism-01">
        <div className="lg:w-3/4 md:2/3 mt-2 flex justify-between sm:justify-evenly md:justify-between items-center mx-auto">
          <h1 className="text-base md:text-xl font-semibold text-white text-left">{`${subjectName}'s Syllabus  `}</h1>
          <a
            href={links.syllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 font-semibold text-white border border-blue-700 bg-blue-400 bg-opacity-25 py-1 px-5 focus:outline-none hover:bg-blue-600 hover:bg-opacity-25 rounded-md text-base shadow-[0px_5px_14px_0px_#1a202c]"
          >
            Check Out
          </a>
        </div>
        <div className="lg:w-3/4 md:2/3 mt-2 flex justify-between sm:justify-evenly md:justify-between items-center mx-auto">
          <h1 className="text-base md:text-xl font-semibold text-white text-left">{`${subjectName}'s Drive link material  `}</h1>
          <a
            href={links.drive}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0  font-semibold text-white border border-blue-700 bg-blue-400 bg-opacity-25 py-1 px-5 focus:outline-none hover:bg-blue-600 hover:bg-opacity-25 rounded-md text-base shadow-[0px_5px_14px_0px_#1a202c]"
          >
            Check Out
          </a>
        </div>
    {   
      links.youtube.map((unit,idx) => {
        return <div key={idx+1} className="lg:w-3/4 md:2/3 mt-2 flex justify-between sm:justify-evenly md:justify-between items-center mx-auto">
          <h1 className="text-base md:text-xl font-semibold  text-white text-left">{unit.unit?`${subjectName}'s unit - ${unit.unit} link`:
          `${subjectName}'s full playlist`}</h1>
          <a
            href={unit.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 font-semibold text-white border border-blue-700 bg-blue-400 bg-opacity-25 py-1 px-5 focus:outline-none hover:bg-blue-600 hover:bg-opacity-25 rounded-md text-base shadow-[0px_5px_14px_0px_#1a202c]"
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
