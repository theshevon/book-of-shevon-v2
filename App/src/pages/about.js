import React from 'react';

import Layout from "../components/layout";
import photo from "../images/pic.jpg";

import "../stylesheets/about.css";

const AboutPage = () => {

    let proficientSkills = ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Haskell', 'Node.js', 'React / Redux', 'MongoDB', 'Unix / Linux', 'Boostrap', 'Git', 'REST', 'Agile Development (SCRUM)', 'Algorithms']
    let familiarSkills = ['Gatsby.js', 'GraphQL', 'Prolog', 'Firebase', 'Swift', 'Wordpress', 'Machine Learning', 'Artificial Intelligence', 'Microservices']

    proficientSkills = (
        <ul
            className="skills">
            { proficientSkills.map((skill, index) => (
                <li
                    key={ index}
                    className="skill proficient">
                    { skill }
                </li>

            ))}
        </ul>
    )

    familiarSkills = (
        <ul
            className="skills">
            { familiarSkills.map((skill, index) => (
                <li
                    key={ index}
                    className="skill familiar">
                    { skill }
                </li>

            ))}
        </ul>
    )

    return (

        <Layout>

            <div
                className="about-page">

                <section
                    id="profile">

                    <img
                        src={photo}
                        alt="portrait"
                        className="profile-pic"/>

                    <h1>Shevon Mendis</h1>

                </section>

                <section
                    id="experience">

                    <h4
                        class="subheading">
                        EDUCATION
                    </h4>

                    <ul>
                        <li>
                            Bachelor of Science, The University of Melbourne Feb 2017 - Dec 2019
                        </li>
                        <li>
                            Major: Computing & Software Systems
                        </li>
                        <li>
                            Weighted Average Mark: 80.583 (H1)
                        </li>
                    </ul>
                </section>

                <section
                    id="education">

                    <h4
                        class="subheading">
                        EXPERIENCE
                    </h4>

                    <ul>
                        <li>
                            <h5>
                                Academic Tutor - The University of Melbourne
                            </h5>
                            <p>
                                Responsibilities include:
                                <ul>
                                    <li>
                                        Assisting students in learning and understanding programming concepts in Python, both in class (in
sizes of 25 - 30) and via Grok monitoring.
                                    </li>
                                   <li>
                                        Marking students' projects and exams.
                                    </li>
                                </ul>
                            </p>
                        </li>

                        <li>
                            <h5>
                                Freelance Web Developer
                            </h5>
                            <p>
                                Notable work:
                                <ul>
                                    <li>
                                        Built a website for STM Developments using Wordpress.
                                    </li>
                                   <li>
                                        Contributed to building the website for R.S. Digital, a local startup.
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                </section>

                <section
                    id="skills">

                    <h4
                        className="subheading">
                        TECHNICAL SKILLS
                    </h4>

                    <ul>

                        <li>
                            Proficient with:

                            { proficientSkills }

                        </li>

                        <li>
                            Familiar with:

                            { familiarSkills }

                        </li>
                    </ul>
                </section>

            </div>
        </Layout>
    )
}

export default AboutPage;