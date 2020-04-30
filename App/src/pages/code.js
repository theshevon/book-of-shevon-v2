import React from 'react';

import CodeRepo from "../components/CodeRepo";
import img from "../images/stub.png";
import "../stylesheets/code.css";
import parseData from "../utilities/BlogPostParser";

const CodePage = ({ data }) => {

    let blogPosts = parseData(data.allBlogPostsCsv.nodes)

    blogPosts = (

        <div
            className="code-repos">

            { blogPosts.map((repo, index) => (
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

            { blogPosts }

        </div>
    )
}


export const query = graphql`
  {
    __typename
    allBlogPostsCsv {
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