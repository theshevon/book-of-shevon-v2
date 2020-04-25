import React from 'react';

import CodeRepo from "../components/CodeRepo";
import img from "../images/stub.png";

const CodePage = () => {
    return (

        <div
            class="repo-page">

            <div
                className="code-repos">

                <CodeRepo
                    title="Project"
                    imgSrc={ img }
                    desc="this is a project I did"
                    stack={ ["React.js", "GraphQL"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                <CodeRepo
                    title="Project"
                    imgSrc={ img }
                    desc="this is a project I did"
                    stack={ ["React.js", "GraphQL"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                <CodeRepo
                    title="Project"
                    imgSrc={ img }
                    desc="this is a project I did"
                    stack={ ["React.js", "GraphQL"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                <CodeRepo
                    title="Project"
                    imgSrc={ img }
                    desc="this is a project I did"
                    stack={ ["React.js", "GraphQL"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
                <CodeRepo
                    title="Project"
                    imgSrc={ img }
                    desc="this is a project I did"
                    stack={ ["React.js", "GraphQL"] }
                    other_contributors={ [{ name: "John Smith", github: "a.com"}, { name : "Smith John", github: "b.com" }] }
                    link={ "google.com.au" }/>
            </div>
        </div>
    )
}

export default CodePage;