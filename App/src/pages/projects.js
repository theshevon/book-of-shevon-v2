import React from 'react';

import Project from "../components/Project";
import parseData from "../utilities/ProjectsParser";

import "../stylesheets/projects.css";

const ProjectsPage = ({ data }) => {

    let projects = parseData(data.allProjectsCsv.nodes);

    let allProjects = (

      <div
          className="projects">

          { projects.map((project, index) => (
              <Project
                  key={ index }
                  title={ project.name }
                  year={ project.year }
                  desc={ project.description }
                  stack={ project.tech_stack }
                  other_contributors={ project.other_contributors }
                  link={ project.link }/>
          ))}

      </div>
  )

    return (

        <div
            className="projects-page">

            <h1
                className="projects-page-title">
                ls projects
            </h1>

            { allProjects }

        </div>
    )
}

export const query = graphql`
  {
    __typename
    allProjectsCsv {
      nodes {
        name
        year
        description
        tech_stack
        other_contributors
        link
      }
    }
  }
`

export default ProjectsPage;