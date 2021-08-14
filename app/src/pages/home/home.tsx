import React from 'react';

import { Links } from './links';
import { IconLink } from './icon_link/icon_link';
import { Text } from './../../ui/text/text';
import { HomeMessages as Messages } from './home.messages';

import styles from './home.module.css';

export const Home = () => (
	<div
			className={styles.siteTitleContainer}
	>
		<Text.LargeTitle
				alignment='center'
				className={styles.siteTitle}
		>
			{Messages.SiteTitle()}
		</Text.LargeTitle>
		<div
				className={styles.links}
		>
			{ Links.map(link =>(
				<IconLink
					{...link}
				/>
			))}
		</div>
	</div>
);
