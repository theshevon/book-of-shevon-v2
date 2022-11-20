import classNames from 'classnames';
import React from 'react';
import { Locale, useLocaleContext } from '../../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../../util/theming/theme_provider';
import { ButtonLink, CapsuleLink } from './../../../ui/link/link';
import { Text } from './../../../ui/text/text';
import { ProjectMessages as Messages } from './project.messages';
import styles from './project.module.css';
import { TechCapsule } from './tech_capsule/tech_capsule';

type Contributor = {
  name: (locale: Locale) => string,
  githubUrl: string,
}

type TechStackType = ((locale: Locale) => string)[];

export type ProjectProps = {
  name: (locale: Locale) => string,
  year: number,
  description: (locale: Locale) => string,
  techStack: TechStackType,
  otherContributors?: Contributor[],
  githubUrl: string,
}

export const Project = ({
  name,
  year,
  description,
  techStack,
  otherContributors,
  githubUrl,
}: ProjectProps) => {
  const { locale } = useLocaleContext();
  const { theme, appearance } = useThemeContext();
  return (
    <div
        className={classNames(styles.project, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      { /* TITLE */ }
      <Text.Large
          alignment='centre'
          fontWeight='bold'
          className={styles.title}
      >
        { name(locale) }
      </Text.Large>

      { /* YEAR */ }
      <Text.ExtraSmall
          alignment='centre'
          className={styles.year}
      >
        { year.toString() }
      </Text.ExtraSmall>

      { /* DESCRIPTION */ }
      <Text.Small
          alignment='centre'
          className={styles.description}
          retainDarkTextOnDarkMode={theme === Theme.EIGHT_BIT}
      >
        { description(locale) }
      </Text.Small>

      { /* TECH STACK */ }
      <div
          className={styles.techStack}
      >
        <Text.Medium
            alignment='centre'
            fontWeight='bold'
            retainDarkTextOnDarkMode={theme === Theme.EIGHT_BIT}
        >
          { Messages.TechStack[locale] }
        </Text.Medium>
        <TechStack
            techStack={techStack}
        />
      </div>

      { /* OTHER CONTRIBUTORS */ }
      { otherContributors &&
        <div
            className={styles.otherContributors}
        >
          <Text.Medium
              alignment='centre'
              fontWeight='bold'
              retainDarkTextOnDarkMode={theme === Theme.EIGHT_BIT}
          >
            { Messages.OtherContributors[locale] }
          </Text.Medium>
          <OtherContributors
              otherContributors={otherContributors}
          />
        </div>
      }

      { /* GITHUB LINK */ }
      <div
          className={styles.githubLinkContainer}
      >
        <ButtonLink
            url={githubUrl}
            className={classNames(styles.githubLink, {
              [styles.eightBit]: theme === Theme.EIGHT_BIT,
            })}
        >
          { Messages.ViewProject[locale] }
        </ButtonLink>
      </div>

    </div>
  );
};

const TechStack = ({
  techStack,
}: {
  techStack: TechStackType,
}) => {
  const { locale } = useLocaleContext();
  const localisedTechStack = techStack.map(tech => tech(locale));
  return (
    <ul
        className={styles.techList}
    >
      { localisedTechStack.map(tech => (
        <li
            key={tech}
            className={styles.listCapsule}
        >
          <TechCapsule
              tech={tech}
          />
        </li>
      )) }
    </ul>
  );
};

const OtherContributors = ({
  otherContributors,
}: {
  otherContributors: Contributor[],
}) => {
  const { locale } = useLocaleContext();
  return (
    <ul
        className={styles.contributorsList}
    >
      { otherContributors.map(otherContributor => (
        <li
            key={otherContributor.name(locale)}
            className={styles.contributorCapsuleContainer}
        >
          <CapsuleLink
              url={otherContributor.githubUrl}
              className={styles.contributorCapsule}
          >
            { otherContributor.name(locale) }
          </CapsuleLink>
        </li>
      )) }
    </ul>
  );
};
