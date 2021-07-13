import React from 'react';

import { SkillsMessages as Messages } from './skills.messages';
import styles from './skills.module.css';

type SkillsProps = {
	label: 'proficient' | 'familiar',
	skills: string[],
};

export const Skills = ({
	label,
	skills,
}: SkillsProps) => (
	<div
			className={styles.skillsContainer}
	>
		<p
				className={styles.label}
		>
			{ label === 'proficient' ? Messages.ProficientWith() : Messages.FamiliarWith() }:
		</p>
		<ul
				className={styles.skillsList}
		>
			{skills.map(skill => (
				<li
						key={skill}
						className={styles.skill}
				>
					{skill}
				</li>
			))}
		</ul>
	</div>
);
