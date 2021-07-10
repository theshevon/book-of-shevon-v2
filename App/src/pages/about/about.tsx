import React, { useEffect } from 'react';
import AOS                  from 'aos';

import profilePic from './profile_pic.jpg';

import { Section } from './section/section';
import { Skills } from './skills/skills';
import { Experiences } from './experiences/experiences';
import { FamiliarSkills, ProficientSkills } from './info/skills/skills';
import { CommercialExperiences, VolunteerExperiences } from './info/experiences/experiences';

import styles from './about.module.css';
import 'aos/dist/aos.css';

export const About = () => {

	useEffect(() => {
			AOS.init({
					duration: 1500,
					once: true
			});
	});

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
			<Section
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
			</Section>

			{/* EXPERIENCE SECTION */}
			<Section
					title={'Experience'}
			>
				<Experiences
						experiences={CommercialExperiences}
				/>
			</Section>

			{/* SKILLS SECTION */}
			<Section
					title={'Skills'}
			>
				<Skills
					label={'proficient'}
					skills={ProficientSkills}
				/>
				<Skills
					label={'familiar'}
					skills={FamiliarSkills}
				/>
			</Section>

			{/* VOLUNTEER SECTION */}
			<Section
				title={'Volunteer Experience'}
			>
				<Experiences
						experiences={VolunteerExperiences}
				/>
			</Section>
    
		</div>
	);
}
