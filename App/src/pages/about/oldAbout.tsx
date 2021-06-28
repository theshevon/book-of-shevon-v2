import React, { useEffect } from 'react';
import AOS                  from 'aos';

import profilePic from './profile_pic.jpg';

import './About.css';
import 'aos/dist/aos.css';

const SKILLS_PROFICIENT = ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'React / Redux', 'MongoDB', 'MySQL', 'Haskell', 'Unix / Linux', 'Boostrap', 'Git', 'REST', 'Agile Development (SCRUM)', 'Algorithms']
const SKILLS_FAMILIAR = ['Prolog', 'Firebase', 'Swift', 'Wordpress', 'Machine Learning', 'Microservices', 'Artificial Intelligence']

export const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    });

    let proficientSkills = (
        <ul
            className='skills'>
            { SKILLS_PROFICIENT.map((skill, index) => (
                <li
                    key={ index }
                    className='skill capsule'>
                    { skill }
                </li>

            ))}
        </ul>
    );

    let familiarSkills = (
        <ul
            className='skills'>
            { SKILLS_FAMILIAR.map((skill, index) => (
                <li
                    key={ index }
                    className='skill capsule'>
                    { skill }
                </li>

            ))}
        </ul>
    );

    return (

        <div
            className='about-page'>

            <section
                id='profile'>

                <img
                    src={ profilePic }
                    alt='portrait'
                    className='profile-pic'/>

                <h1>Shevon Mendis</h1>

                <div
                    className='underline'>
                </div>

            </section>

            <section
                id='education'
                data-aos='fade-up'>

                <h3
                    className='subheading'>
                    EDUCATION
                </h3>

                <ul>

                    <li
                        className='position-container'>

                        <div
                            className='position-meta-info'>
                            <p
                                className='position'>
                                The University of Melbourne
                            </p>
                            <p
                                className='company'>
                                Bachelor of Science
                            </p>
                        </div>

                        <ul
                            className='responsibilities'>

                            <li
                                className='responsibility'>
                                <strong>Major:</strong> Computing &amp; Software Systems
                            </li>

                            <li
                                className='responsibility'>
                                <strong>Weighted Average Mark:</strong> 80.583 (H1)
                            </li>

                        </ul>

                    </li>

                </ul>

            </section>

            <section
                id='experience'
                data-aos='fade-up'>

                <h3
                    className='subheading'>
                    EXPERIENCE
                </h3>

                <ul>

                    <li
                        className='position-container'>

                        <div
                            className='position-meta-info'>
                            <p
                                className='position'>
                                Software Engineer, Professional Services
                            </p>
                            <p
                                className='company'>
                                DGiT Systems
                            </p>
                            <p
                                className='duration'>
                                Jul 2020 - Present
                            </p>
                        </div>

                        <p
                            className='text-2'>
                            Responsible for:
                        </p>

                        <ul
                            className='responsibilities'>
                            <li
                                className='responsibility'>
                                Designing, building and testing platform-based solutions that meet clients' requirements
                            </li>
                            <li
                                className='responsibility'>
                                Performing thorough code reviews
                            </li>
                            <li
                                className='responsibility'>
                                Winning the ”Best Rookie” (2020) Award
                            </li>
                        </ul>
                    </li>       

                    <li
                        className='position-container'>

                        <div
                            className='position-meta-info'>
                            <p
                                className='position'>
                                Web Developer / Systems Integrator
                            </p>
                            <p
                                className='company'>
                                The University of Melbourne
                            </p>
                            <p
                                className='duration'>
                                May 2020 - Dec 2020
                            </p>
                        </div>

                        <p
                            className='text-2'>
                            Responsible for:
                        </p>

                        <ul
                            className='responsibilities'>
                            <li
                                className='responsibility'>
                                Developing a web app that would allow individuals to visualise and analyse data sourced from COVID-19 literature
                            </li>
                            <li
                                className='responsibility'>
                                Integrating indiviudally developed analysis/ visualisation tools into a web server that would act as the API for the client app
                            </li>
                        </ul>
                    </li>

                    <li
                        className='position-container'>

                        <div
                            className='position-meta-info'>
                            <p
                                className='position'>
                                Academic Tutor, Foundations of Computing
                            </p>
                            <p
                                className='company'>
                                The University of Melbourne
                            </p>
                            <p
                                className='duration'>
                                Jul 2019 - Jul 2020
                            </p>
                        </div>

                        <p
                            className='text-2'>
                            Responsible for:
                        </p>

                        <ul
                            className='responsibilities'>
                            <li
                                className='responsibility'>
                                Assisting students in learning and understanding programming concepts in Python, both in class (in sizes of 25 - 30) and via Grok monitoring
                            </li>
                            <li
                                className='responsibility'>
                                Marking students' projects and exams
                            </li>
                        </ul>

                    </li>

                    <li
                        className='position-container'>

                        <div
                            className='position-meta-info'>
                            <p
                                className='position'>
                                Web Developer
                            </p>
                            <p
                                className='company'>
                                Freelance
                            </p>
                            <p
                                className='duration'>
                                Mar 2019 - Oct 2019
                            </p>
                        </div>

                        <p
                            className='text-2'>
                            Notable work:
                        </p>

                        <ul
                            className='responsibilities'>

                            <li
                                className='responsibility'>
                                Built a website for STM Developments using Wordpress
                            </li>

                            <li
                                className='responsibility'>
                                Contributed to building the website for R.S. Digital, a local startup
                            </li>

                        </ul>

                    </li>

                </ul>

            </section>

            <section
                id='skills'
                data-aos='fade-up'>

                <h3
                    className='subheading'>
                    TECHNICAL SKILLS
                </h3>

                <p>
                    Proficient with:
                </p>

                { proficientSkills }

                <p>
                    Familiar with:
                </p>

                { familiarSkills }

            </section>

            <section
                id='volunteer'
                data-aos='fade-up'>

                <h3
                    className='subheading'>
                    VOLUNTEER EXPERIENCE
                </h3>

                <ul>

                    <li
                        className='position-container'>

                        <div
                            className='position-meta-info'>
                            <p
                                className='position'>
                                Co-Founder &amp; Vice President
                            </p>
                            <p
                                className='company'>
                                CODEC (Community for Digital Entertainment Creation)
                            </p>
                            <p
                                className='duration'>
                                Mar 2019 - Oct 2019
                            </p>
                        </div>

                        <ul
                            className='responsibilities'>

                            <li
                                className='responsibility'>
                                Inaugural member of the committee that accumulated over 150 memberships in its first semester
and was awarded the title of 'Best New Club' by the University of Melbourne's Student Union
                            </li>

                            <li
                                className='responsibility'>
                                Touched base with every aspect of the club including designing the banner and logo, as well as
in planning workshops for students interested in animation and game design
                            </li>

                        </ul>

                    </li>

                    <li
                        className='position-container'>

                        <div
                            className='position-meta-info'>
                            <p
                                className='position'>
                                General Committee Member
                            </p>
                            <a
                                className='company'
                                href='https://www.umisc.info/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                UMISC (University of Melbourne Information Security Club)
                            </a>
                            <p
                                className='duration'>
                                Sep 2018 - Sep 2019
                            </p>
                        </div>

                        <ul
                            className='responsibilities'>

                            <li
                                className='responsibility'>
                                Member of the committee that revived the club from dormancy and attained a 12% increase in
club memberships as well as a steep rise in engagement compared to the previous year
                            </li>

                            <li
                                className='responsibility'>
                                    Created and maintained the club's former (and first) website, and designed all of event posters and other marketing material
                            </li>

                            <li
                                className='responsibility'>
                                Created the design that was a runner-up for 'Most Entertaining Design' at the University of Melbourne's Clubs & Societies Awards Night
                            </li>

                        </ul>

                    </li>

                    <li
                        className='position-container'>

                        <div
                            className='position-meta-info'>
                            <p
                                className='position'>
                                Publicity Sub-Committee Member
                            </p>
                            <a
                                className='company'
                                href='https://cissa.org.au/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                CISSA (Computing and Information Systems Students Association)
                            </a>
                            <p
                                className='duration'>
                                Apr 2019 - Oct 2019
                            </p>
                        </div>

                        <ul
                            className='responsibilities'>

                            <li
                                className='responsibility'>
                                Responsible for designing marketing and promotional material for both club events and sponsor-
collaborated events, as well as management of club's social media
                            </li>

                            <li
                                className='responsibility'>
                                Created the design that won 'Most Entertaining Design' at the University of Melbourne's Clubs & Societies Awards Night
                            </li>

                        </ul>

                    </li>

                </ul>

            </section>

        </div>
    )
}
