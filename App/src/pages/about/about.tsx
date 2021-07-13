import React, { useEffect } from 'react';
import AOS from 'aos';

import { Section } from './section/section';
import { createProfile } from './profile/create';
import { Skills } from './skills/skills';
import { Experiences } from './experiences/experiences';
import { TertiaryEducation } from './info/education/education';
import { FamiliarSkills, ProficientSkills } from './info/skills/skills';
import { CommercialExperiences, VolunteerExperiences } from './info/experiences/experiences';

import styles from './about.module.css';
import 'aos/dist/aos.css';
import { Education } from './education/education';

const AOS_DURATION_MILLISECONDS = 1500;

export const About = () => {

	useEffect(() => {
		AOS.init({
				duration: AOS_DURATION_MILLISECONDS,
				once: true
		});
	}, []);

	const Profile = createProfile();

	return (

		<div
				className={styles.page}
		>

			{/* PROFILE SECTION */}
			{Profile}

			{/* EDUCATION SECTION */}
			<Section
					title={'education'}
			>
				<Education
						education={TertiaryEducation}
				/>
			</Section>

			{/* EXPERIENCE SECTION */}
			<Section
					title={'commercialXp'}
			>
				<Experiences
						experiences={CommercialExperiences}
				/>
			</Section>

			{/* SKILLS SECTION */}
			<Section
					title={'skills'}
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
					title={'volunteerXp'}
			>
				<Experiences
						experiences={VolunteerExperiences}
				/>
			</Section>
    
		</div>
	);
}
