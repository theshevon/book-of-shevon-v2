import React from 'react';

import styles from './info_section.module.css';

type InfoSectionProps = {
	title: string,
}

export const InfoSection: React.FC<InfoSectionProps> = ({
	title,
	children,
}) => (
	<section
			className={styles.infoSection}
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
