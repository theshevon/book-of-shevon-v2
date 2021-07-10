import React, { useEffect } from 'react';
import AOS                  from 'aos';

import profilePic from './profile_pic.jpg';

import { Section } from './section/section';
import { createProfile } from './profile/create';
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

	const Profile = createProfile();

	return (

		<div
				className={styles.page}
		>

			{/* PROFILE SECTION */}
			{Profile}

			{/* EDUCATION SECTION */}
			<Section
					titleOpt={'education'}
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
					titleOpt={'commercialXp'}
			>
				<Experiences
						experiences={CommercialExperiences}
				/>
			</Section>

			{/* SKILLS SECTION */}
			<Section
					titleOpt={'skills'}
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
				titleOpt={'volunteerXp'}
			>
				<Experiences
						experiences={VolunteerExperiences}
				/>
			</Section>
    
		</div>
	);
}
