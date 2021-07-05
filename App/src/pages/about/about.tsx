import React, { useEffect } from 'react';
import AOS                  from 'aos';

import profilePic from './profile_pic.jpg';

import { InfoSection } from './info_section/info_section';
import { Experience } from './experience/experience';
import styles from './about.module.css';
import 'aos/dist/aos.css';

const SKILLS_PROFICIENT = ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'React / Redux', 'MongoDB', 'MySQL', 'Haskell', 'Unix / Linux', 'Boostrap', 'Git', 'REST', 'Agile Development (SCRUM)', 'Algorithms']
const SKILLS_FAMILIAR = ['Prolog', 'Firebase', 'Swift', 'Wordpress', 'Machine Learning', 'Artificial Intelligence']

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
				className={styles.page}
		>

			{/* PROFILE SECTION */}
			<section
					id='profile'
			>
				<img
						src={ profilePic }
						alt='portrait of handsome man wearing a regalia'
						className='profile-pic'
				/>
				<h1>
					Shevon Mendis
				</h1>
				<div
						className='underline'
				>
				</div>
			</section>

			{/* EDUCATION SECTION */}
			<InfoSection
					title={'Education'}
			>
				<ul
				>
					<li
							className={styles.positionContainer}
					>
						<div
								className='position-meta-info'
						>
								<p
										className='position'
								>
										The University of Melbourne
								</p>
								<p
										className='company'
								>
								Bachelor of Science
								</p>
						</div>
						<ul
								className='responsibilities'
						>
								<li
										className='responsibility'
								>
									<strong>Major:</strong> Computing &amp; Software Systems
								</li>
								<li
										className='responsibility'
								>
										<strong>Weighted Average Mark:</strong> 80.583 (H1)
								</li>
						</ul>
					</li>
				</ul>
			</InfoSection>

			{/* EXPERIENCE SECTION */}
			<InfoSection
					title={'Experience'}
			>
				<ul
				>
					<li
							className={styles.positionContainer}
					>
						<Experience
								role='Software Engineer'
								company='Canva'
								startDate='Apr 2021'
								endDate='Present'
								responsibilities={['Building and maintaing UI components', 'Performing code reviews']}
						/>
					</li> 
					<li
							className={styles.positionContainer}
					>
						<Experience
								role='Software Engineer, Professional Services'
								company='DGiT Systems'
								startDate='Jul 2020'
								endDate='Mar 2021'
								responsibilities={['Designing, building and testing platform-based solutions that meet clients', 'Winning the ”Best Rookie” (2020) Award']}
						/>
					</li>      
					<li
							className={styles.positionContainer}
					>
						<Experience
								role='Web Developer / Systems Integrator'
								company='The University of Melbourne'
								startDate='May 2020'
								endDate='Dec 2020'
								responsibilities={['Developing a web app that would allow individuals to visualise and analyse data sourced from COVID-19 literature', 'Integrating indiviudally developed analysis/ visualisation tools into a web server that would act as the API for the client app']}
						/>
					</li>
					<li
							className={styles.positionContainer}
					>
						<Experience
								role='Academic Tutor, Foundations of Computing'
								company='The University of Melbourne'
								startDate='July 2019'
								endDate='July 2020'
								responsibilities={['Assisting students in learning and understanding programming concepts in Python, both in class (in sizes of 25 - 30) and via Grok monitoring', 'Marking students\' projects and exams']}
						/>
					</li>
				</ul>
			</InfoSection>

			{/* SKILLS SECTION */}
			<InfoSection
					title={'Skills'}
			>
				<p>
					Proficient with:
				</p>
				{ proficientSkills }
				<p>
					Familiar with:
				</p>
				{ familiarSkills }
			</InfoSection>

			{/* VOLUNTEER SECTION */}
			<InfoSection
				title={'Volunteer Experience'}
			>
				<ul
				>
					<li
							className={styles.positionContainer}
					>
						<Experience
								role='Co-Founder & Vice President'
								company='CODEC (Community for Digital Entertainment Creation)'
								startDate='Mar 2019'
								endDate='Oct 2019'
								responsibilities={['Inaugural member of the committee that accumulated over 150 memberships in its first semester and was awarded the title of \'Best New Club\' by the University of Melbourne\'s Student Union', 'Touched base with every aspect of the club including designing the banner and logo, as well as in planning workshops for students interested in animation and game design']}
						/>
					</li> 
					<li
							className={styles.positionContainer}
					>
						<Experience
								role='General Committee Member'
								company='UMISC (University of Melbourne Information Security Club)'
								startDate='Sep 2018'
								endDate='Sep 2019'
								responsibilities={['Member of the committee that revived the club from dormancy and attained a 12% increase in club memberships as well as a steep rise in engagement compared to the previous year', 'Created and maintained the club\'s former (and first) website, and designed all of event posters and other marketing material', 'Created the design that was a runner-up for \'Most Entertaining Design\' at the University of Melbourne\'s Clubs & Societies Awards Night']}
						/>
					</li> 
					<li
							className={styles.positionContainer}
					>
						<Experience
								role='Publicity Sub-Committee Member'
								company='CISSA (Computing and Information Systems Students Association)'
								startDate='Apr 2019'
								endDate='Oct 2019'
								responsibilities={['Responsible for designing marketing and promotional material for both club events and sponsor-collaborated events, as well as management of club\'s social media', 'Created the design that won \'Most Entertaining Design\' at the University of Melbourne\'s Clubs & Societies Awards Night']}
						/>
					</li>
				</ul>
			</InfoSection>
    
		</div>
	);
}
