import React from 'react';
import AOS   from 'aos';

import "../styles/components/Project.css";
import 'aos/dist/aos.css';

class Project extends React.Component{

    componentDidMount(){
        AOS.init({
            duration: 1500,
            once: true
        });
    }

    render(){

        const { title, year, desc, stack, other_contributors, link } = this.props

        let tech_stack = (

            <div
                className="project-tech-stack-container">

                <h4
                    className="project-subheading">
                    Tech Stack
                </h4>

                <ul
                    className="project-tech-stack">

                    { stack.map((tech, index) => (

                        <li
                            key={ index }
                            className={ `capsule ${ tech.toLowerCase().replace('.', '').replace('#', "sharp")}` }>
                            { tech }
                        </li>

                    ))}

                </ul>

            </div>
        )

        let contributors = null;
        if (other_contributors.length > 0){

            contributors = (

                <div
                    className="project-contributors-container">

                    <h4
                        className="project-subheading">
                        Other Contributors
                    </h4>

                    <ul
                        className="project-contributors">

                        { other_contributors.map((contributor, index) => (

                            <li
                                key={ index }
                                className="contributor capsule">

                                <a
                                    href={ contributor.github }
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    { contributor.name }
                                </a>

                            </li>

                        ))}

                    </ul>

                </div>
            )
        }

        return (

            <div
                className="project"
                data-aos="fade-left">

                <h4
                    className="project-title">
                    { title }
                </h4>

                <p
                    className="project-year">
                    { year }
                </p>

                <p
                    className="project-desc">
                    { desc }
                </p>

                { tech_stack }

                { contributors }

                <a
                    href= { link }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn">
                    View project
                </a>

            </div>
        )
    }
}

export default Project;
