import React from 'react';

import {Links} from './links';

import { HomeMessages as Messages } from './home.messages';
import styles from './home.module.css';
import { IconLink } from './icon_link/icon_link';

export const Home = () => (
	<div
			className={styles.siteTitleContainer}
	>
		<h1
				className={styles.siteTitle}
		>
			{Messages.SiteTitle()}
		</h1>
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
