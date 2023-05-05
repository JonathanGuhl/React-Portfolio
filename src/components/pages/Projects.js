import React, { useState } from "react";
import '../../styles/style.css'


export default function Project({projectRepo, img, projectName, projectURL}) {
  //Use States to store whether the picture is hovered or not
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

 

  return (
    <div className="col-md-6">
      <h3>{projectName}</h3>
      <div className="position-relative" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
        
        <img
          src={img}
          alt="Screenshot of Project"
          className={`img-fluid ${isHovered ? "blur-image blur-effect" : "blur-image"}`}
          
        />
        {isHovered && (
          <div className="position-absolute bottom-50 start-0">
            <p  className="badge" rel="noreferrer"></p>
            <p  className="badge"  rel="noreferrer"></p>
          </div>
        )}
      </div>
    </div>
  );
}