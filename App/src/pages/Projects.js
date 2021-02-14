import React from "react";

import Project from "../components/Project";

import projectsJson from "../assets/projects/projects.json";

import "../styles/pages/Projects.css";

const Projects = () => {

    const projects = (

        <div
            className="projects">

            { projectsJson.map((project, index) => (
                <Project
                    key={ index }
                    title={ project.name }
                    year={ project.year }
                    desc={ project.desc }
                    stack={ project.techStack }
                    other_contributors={ project.otherContributors }
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

			{ projects }

        </div>
    )
}

export default Projects;
