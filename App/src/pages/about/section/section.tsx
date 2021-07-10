import React from 'react';

import { SectionMessages as Messages } from './section.messages';
import styles from './section.module.css';

type SectionTitleOpt = 'education' | 'commercialXp' | 'skills' | 'volunteerXp';

type SectionProps = {
	title: SectionTitleOpt,
}

export const Section: React.FC<SectionProps> = ({
	title,
	children,
}) => (
	<section
			className={styles.section}
	>
		<h3
				className={styles.title}
		>
			{getSectionTitleLabel(title)}
		</h3>
		<div
				className={styles.info}
		>
			{children}
		</div>        
	</section>
);

const getSectionTitleLabel = (sectionTitleOpt: SectionTitleOpt): string => {
	switch(sectionTitleOpt) {
		case 'education':
			return Messages.education();
		case 'commercialXp':
			return Messages.commercialExperience();
		case 'skills':
			return Messages.skills();
		case 'volunteerXp':
			return Messages.volunteerExperience();
	}
}
