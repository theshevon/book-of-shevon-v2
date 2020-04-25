import React from 'react';

import CodeRepo from "../components/CodeRepo";
import img from "../images/stub.png";
import "../stylesheets/code.css";

const CodePage = () => {
    return (

        <div
            className="code-page">

            <div
                className="code-repos">
                <CodeRepo
                    title="Project"
                    imgSrc={ img }
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
                    stack={ ["React.js", "Gatsby.js", "GraphQL", "Python", "MongoDB", "Firebase", "HTML", "CSS", "Javascript", "Node.js", "C", "C#", "Haskell", "Prolog", "Java"] }
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