import React from 'react';

import { Links } from './links';
import { IconLink } from './icon_link/icon_link';
import { Text } from './../../ui/text/text';
import { useDocumentHeader } from '../../util/util';

import { HomeMessages as Messages } from './home.messages';

import styles from './home.module.css';

export const Home = () => {

	useDocumentHeader(Messages.pageTitle());
	
	return (
		<div
				className={styles.siteTitleContainer}
		>
			<Text.LargeTitle
					alignment='center'
					className={styles.siteTitle}
			>
				{Messages.bookOfShevon()}
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
}
