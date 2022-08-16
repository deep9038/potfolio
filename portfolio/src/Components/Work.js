import "./WarkCard.css";
import React from "react";
import WorkCard from "./WorkCard";
import WorkCarddata from "./Workcarddata";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-hading">Projec</h1>
      <div className="project-container">
        {WorkCarddata.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              vew={val.view}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Work;
