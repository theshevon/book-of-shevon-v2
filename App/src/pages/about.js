import React from 'react';
import AOS from 'aos';

import Layout from "../components/layout";
import photo from "../images/pic.jpg";

import "../stylesheets/about.css";
import 'aos/dist/aos.css'

class AboutPage extends React.Component {

    componentDidMount(){
        AOS.init({
            duration: 1500,
            once: true
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
                                <div
                                    className="position-meta-info">
                                    <p className="position">
                                        The University of Melbourne
                                    </p>
                                    <p className="company">
                                        Bachelor of Science
                                    </p>
                                </div>
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
                                <div
                                    className="position-meta-info">
                                    <p className="position">
                                        Academic Tutor, Foundations of Computing
                                    </p>
                                    <p className="company">
                                        The University of Melbourne
                                    </p>
                                    <p className="duration">
                                        July 2019 - Present
                                    </p>
                                </div>
                                <p className="subtext-2">
                                    Responsibilities include:
                                </p>
                                <ul>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Assisting students in learning and understanding programming concepts in Python, both in class (in sizes of 25 - 30) and via Grok monitoring
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Marking students' projects and exams
                                        </p>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <div
                                    className="position-meta-info">
                                    <p className="position">
                                        Web Developer
                                    </p>
                                    <p className="company">
                                        Freelance
                                    </p>
                                    <p className="duration">
                                        Mar 2019 - Oct 2019
                                    </p>
                                </div>
                                <p className="subtext-2">
                                    Notable work:
                                </p>
                                <ul>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Built a website for STM Developments using Wordpress
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Contributed to building the website for R.S. Digital, a local startup
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

                        <p
                            className="subtext-1">
                            Proficient with:
                        </p>

                        { proficientSkills }

                        <p
                            className="subtext-1">
                            Familiar with:
                        </p>

                        { familiarSkills }

                    </section>

                    <section
                        id="volunteer"
                        data-aos="fade-up">

                        <h3
                            className="subheading-1">
                            VOLUNTEER EXPERIENCE
                        </h3>

                        <ul>
                            <li>
                                <div
                                    className="position-meta-info">
                                    <p className="position">
                                        Co-Founder & Vice President
                                    </p>
                                    <p className="company">
                                        CODEC (Community for Digital Entertainment Creation)
                                    </p>
                                    <p className="duration">
                                        Mar 2019 - Oct 2019
                                    </p>
                                </div>
                                <ul>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Inaugural member of the committee that accumulated over 150 memberships in its first semester
    and was awarded the title of 'Best New Club' by the University of Melbourne's Student Union
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Touched base with every aspect of the club including designing the banner and logo, as well as
    in planning workshops for students interested in animation and game design
                                        </p>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <div
                                    className="position-meta-info">
                                    <p className="position">
                                        General Committee Member
                                    </p>
                                    <p className="company">
                                        UMISC (University of Melbourne Information Security Club)
                                    </p>
                                    <p className="duration">
                                        Sep 2018 - Sep 2019
                                    </p>
                                </div>
                                <ul>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Member of the committee that revived the club from dormancy and attained a 12% increase in
    club memberships as well as a steep rise in engagement compared to the previous year
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Created and maintained the club's website, and designed all of event
    posters and other marketing material
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Created the design that was a runner-up for 'Most Entertaining Design' at the University of Melbourne's Clubs & Societies Awards Night
                                        </p>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <div
                                    className="position-meta-info">
                                    <p className="position">
                                        Publicity Sub-Committee Member
                                    </p>
                                    <p className="company">
                                        CISSA (Computing and Information Systems Students Association)
                                    </p>
                                    <p className="duration">
                                        Apr 2019 - Oct 2019
                                    </p>
                                </div>
                                <ul>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Responsible for designing marketing and promotional material for both club events and sponsor-
    collaborated events, as well as management of club's social media
                                        </p>
                                    </li>
                                    <li
                                        className="list-item-2">
                                        <p className="subtext-2">
                                            Created the design that won 'Most Entertaining Design' at the University of Melbourne's Clubs & Societies Awards Night
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </section>
                </div>
            </Layout>
        )
    }
}

export default AboutPage;