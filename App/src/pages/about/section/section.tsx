import React from 'react';

import styles from './section.module.css';

type SectionProps = {
	title: string,
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
			{title}
		</h3>
		<div
				className={styles.info}
		>
			{children}
		</div>        
	</section>
);
