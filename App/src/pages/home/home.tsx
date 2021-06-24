import React from 'react';

import {faEnvelope}      from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faGithub, 
    faLinkedin, 
    faMedium, 
    faYoutube 
} from '@fortawesome/free-brands-svg-icons';

import { HomeMessages as Messages } from './home.messages';
import styles from './home.module.css';

export const Home = () => (
	<div
			className={styles.siteTitleContainer}>

			<h1
					className={styles.siteTitle}
			>
					{Messages.SiteTitle()}
			</h1>

			<div
					className={styles.links}
			>
				<a
						href='mailto:shevonmendis98@gmail.com'
				>
					<FontAwesomeIcon
							icon={faEnvelope}
					/>
				</a>
				<a
						href='https://github.com/theshevon'
						target='_blank'
						rel='noopener noreferrer'
				>
						<FontAwesomeIcon
								icon={faGithub}
						/>
				</a>
				<a
						href='https://www.linkedin.com/in/mendiss'
						target='_blank'
						rel='noopener noreferrer'
				>
						<FontAwesomeIcon
								icon={faLinkedin}
						/>
				</a>
				<a
						href='https://medium.com/@shevon_mendis'
						target='_blank'
						rel='noopener noreferrer'
				>
						<FontAwesomeIcon
								icon={faMedium}
						/>
				</a>
				<a
						href='https://www.youtube.com/channel/UCkL1cYAWa9Wsx6xDT2H8zOg?view_as=subscriber'
						target='_blank'
						rel='noopener noreferrer'
				>
						<FontAwesomeIcon
								icon={faYoutube}
						/>
				</a>
			</div>
	</div>
);
