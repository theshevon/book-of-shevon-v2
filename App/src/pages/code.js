import React from 'react';

import CodeRepo from "../components/CodeRepoCard";
import img from "../images/stub.png";
import "../stylesheets/code.css";
import parseData from "../utilities/ProjectsParser";

const CodePage = ({ data }) => {
    let projects = parseData(data.allProjectsCsv.nodes);

    let individualProjects = (

      <div
          className="code-repos">

          { projects.individual.map((repo, index) => (
              <CodeRepo
                  key={ index }
                  title={ repo.name }
                  imgSrc={ require(`../images/code_repos/${repo.img_src}`) }
                  desc={ repo.description }
                  stack={ repo.tech_stack }
                  other_contributors={ repo.other_contributors }
                  link={ "google.com.au" }/>
          ))}
      </div>
  )

    let groupProjects = (

        <div
            className="code-repos">

            { projects.group.map((repo, index) => (
                <CodeRepo
                    key={ index }
                    title={ repo.name }
                    imgSrc={ require(`../images/code_repos/${repo.img_src}`) }
                    desc={ repo.description }
                    stack={ repo.tech_stack }
                    other_contributors={ repo.other_contributors }
                    link={ "google.com.au" }/>
            ))}
        </div>
    )

    return (

        <div
            className="code-page">

            <h1
                className="code-page-title">
                Projects
            </h1>

            { individualProjects }
            { groupProjects }

        </div>
    )
}


export const query = graphql`
  {
    __typename
    allProjectsCsv {
      nodes {
        name
        img_src
        description
        tech_stack
        other_contributors
      }
    }
  }
`

export default CodePage;