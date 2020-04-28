import React from 'react';
import AOS from 'aos';

import Layout from "../components/layout";
import photo from "../images/pic.jpg";

import "../stylesheets/about.css";
import 'aos/dist/aos.css'

class AboutPage extends React.Component {

    componentDidMount(){
        AOS.init({
            duration: 1500
        });
    }


    proficientSkills = ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Haskell', 'Node.js', 'React / Redux', 'MongoDB', 'Unix / Linux', 'Boostrap', 'Git', 'REST', 'Agile Development (SCRUM)', 'Algorithms']
    familiarSkills = ['Gatsby.js', 'GraphQL', 'Prolog', 'Firebase', 'Swift', 'Wordpress', 'Machine Learning', 'Artificial Intelligence', 'Microservices']

    render() {

        let proficientSkills = (
            <ul
                className="skills">
                { this.proficientSkills.map((skill, index) => (
                    <li
                        key={ index}
                        className="skill capsule proficient">
                        { skill }
                    </li>

                ))}
            </ul>
        )

        let familiarSkills = (
            <ul
                className="skills">
                { this.familiarSkills.map((skill, index) => (
                    <li
                        key={ index}
                        className="skill capsule familiar">
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

                        <div
                            className="underline">
                        </div>

                    </section>

                    <section
                        id="education"
                        data-aos="fade-up">

                        <h3
                            className="subheading-1">
                            EDUCATION
                        </h3>

                        <ul>
                            <li>
                                <p className="subtext-1">
                                    Bachelor of Science, The University of Melbourne
                                </p>
                                <ul>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            <strong>Major:</strong> Computing & Software Systems
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            <strong>Weighted Average Mark:</strong> 80.583 (H1)
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section
                        id="experience"
                        data-aos="fade-up">

                        <h3
                            className="subheading-1">
                            EXPERIENCE
                        </h3>

                        <ul>
                            <li>
                                <p className="subtext-1">
                                    Academic Tutor - Foundations of Computing, The University of Melbourne
                                </p>
                                <p className="subtext-2">
                                    Responsibilities include:
                                </p>
                                <ul>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Assisting students in learning and understanding programming concepts in Python, both in class (in sizes of 25 - 30) and via Grok monitoring.
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Marking students' projects and exams.
                                        </p>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <p className="subtext-1">
                                    Web Developer, Freelance
                                </p>
                                <p className="subtext-2">
                                    Notable work:
                                </p>
                                <ul>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Built a website for STM Developments using Wordpress.
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Contributed to building the website for R.S. Digital, a local startup.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section
                        id="skills"
                        data-aos="fade-up">

                        <h3
                            className="subheading-1">
                            TECHNICAL SKILLS
                        </h3>

                        <h5>
                            Proficient with:
                        </h5>

                        { proficientSkills }

                        <h5>
                            Familiar with:
                        </h5>

                        { familiarSkills }

                    </section>

                </div>
            </Layout>
        )
    }
}

export default AboutPage;