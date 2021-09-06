import React from 'react';

import { Section } from './section/section';
import { createProfile } from './profile/create';
import { Skills } from './skills/skills';
import { Education } from './education/education';
import { Experiences } from './experiences/experiences';
import { TertiaryEducation } from './info/education/education';
import { SkillsLists } from './info/skills/skills';
import { CommercialExperiences, VolunteerExperiences } from './info/experiences/experiences';
import { useDocumentHeader } from './../../util/hooks';

import { AboutMessages as Messages } from './about.messages';

import styles from './about.module.css';

export const About = () => {

	useDocumentHeader(Messages.pageTitle());

	const Profile = createProfile();

	return (

		<div
				className={styles.page}
		>

			{/* PROFILE SECTION */}
			{Profile}

			{/* WORK EXPERIENCE SECTION */}
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
						skillsLists={SkillsLists}
				/>
			</Section>

			{/* EDUCATION SECTION */}
			<Section
					title={'education'}
			>
				<Education
						education={TertiaryEducation}
				/>
			</Section>

			{/* VOLUNTEER EXPERIENCE SECTION */}
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
