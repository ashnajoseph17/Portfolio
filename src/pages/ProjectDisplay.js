import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/projectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../components/styles/ProjectDisplay.css";
function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
     <div className="description">
      {project.description}
     </div>
    </div>
  );
}

export default ProjectDisplay;
