import React from 'react';

import { Text } from './../../../ui/text/text';
import { Capsule } from './../../../ui/capsule/capsule';
import { SkillsMessages as Messages } from './skills.messages';

import styles from './skills.module.css';

export type SkillsListProps = {
	label: 'proficient' | 'familiar',
	skills: string[],
};

export const Skills = ({
	skillsLists,
}: {
	skillsLists: SkillsListProps[],
}) => (
	<ul
			className={styles.skills}
	>
		{skillsLists.map(skillsList => (
			<li
					key={skillsList.label} // assumption: there will at most be two lists: one for 'proficient' and one for 'familiar'
					className={styles.skillsListContainer}
			>
				<SkillsList
						{...skillsList}
				/>
			</li>
		))}
	</ul>
);

const SkillsList = ({
		label,
		skills,
}: SkillsListProps) => (
	<div
			className={styles.skillsList}
	>
		<p
				className={styles.label}
		>
			{label === 'proficient' ? Messages.ProficientWith() : Messages.FamiliarWith()}:
		</p>
		<ul
				className={styles.list}
		>
			{skills.map(skill => (
				<li
						key={skill}
						className={styles.skill}
				>
					<Capsule>
						<Text.Small
								text={skill}
						/>
					</Capsule>
				</li>
			))}
		</ul>
	</div>
);
