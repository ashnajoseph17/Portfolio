import React from 'react'
import Projectitem from '../components/Projectitem'

import "../components/styles/Project.css"
import {projectList} from "../helpers/projectList"

function Projects() {
  return (
    <div className='projects'>
      <h2>My Personal Projects</h2>
      <div className="projectList">
       {projectList.map((prolist,idx)=>{
        return <Projectitem id = {idx} name = {prolist.name} image={prolist.image}/>
       })}
      </div>
      
    </div>
  )
}

export default Projects
