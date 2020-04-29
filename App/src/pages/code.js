import React from 'react';

import CodeRepo from "../components/CodeRepo";
import img from "../images/stub.png";
import "../stylesheets/code.css";
import parseData from "../utilities/BlogPostParser";

const CodePage = ({ data }) => {

    let blogPosts = parseData(data.allBlogPostsCsv.nodes)

    return (

        <div
            className="code-page">

            <h1
                className="code-page-title">
                Projects
            </h1>

            <div
                className="code-repos">
                <CodeRepo
                    title="Project Name"
                    imgSrc={ img }
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
                    stack={ ["Python", "MongoDB", "Firebase"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                <CodeRepo
                    title="Project Name"
                    imgSrc={ img }
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
                    stack={ ["React.js", "Gatsby.js", "GraphQL"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                <CodeRepo
                    title="Project Name"
                    imgSrc={ img }
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
                    stack={ ["HTML", "CSS", "Javascript"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                <CodeRepo
                    title="Project Name"
                    imgSrc={ img }
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
                    stack={ ["Node.js", "C", "C#", "Unity"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                <CodeRepo
                    title="Project Name"
                    imgSrc={ img }
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
                    stack={ ["C", "C#", "Haskell"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                 <CodeRepo
                    title="Project Name"
                    imgSrc={ img }
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
                    stack={ ["Prolog", "Java", "Haskell"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
            </div>
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