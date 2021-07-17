import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './icon_link.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type LinkType = 'web' | 'mail';

export type IconLinkProps = {
	type: LinkType,
	href: string,
	icon: IconDefinition,	
}

export const IconLink = ({
	type,
	href,
	icon,
}: IconLinkProps) => {
	let linkAttributes = {};
	if (type === 'web') {
		linkAttributes = {
			target: '_blank',
			rel: 'noopener noreferrer',
		}
	}
	return (
		<a
				href={href}
				{...linkAttributes}
				className={styles.iconLink}
		>
			<FontAwesomeIcon
					icon={icon}
			/>
		</a>
	);
}
