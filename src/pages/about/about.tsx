import classNames from 'classnames';
import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../util/theming/theme_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { AboutMessages as Messages } from './about.messages';
import styles from './about.module.css';
import { TertiaryEducation } from './data/education/education';
import { CommercialExperiences, VolunteerExperiences } from './data/experiences/experiences';
import { SkillsLists } from './data/skills/skills';
import { Education } from './education/education';
import { Experiences } from './experiences/experiences';
import { Profile } from './profile/profile';
import { Section } from './section/section';
import { Skills } from './skills/skills';

export const About = () => {

  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle[locale], { type: 'emoji', src: '👀' });
  }, [locale]);

  const { theme, appearance } = useThemeContext();

  const Content = () => (

    <div
        className={classNames(styles.aboutPage, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >

      { /* PROFILE SECTION */ }
      <Profile/>

      { /* WORK EXPERIENCE SECTION */ }
      <Section
          title='commercialXp'
      >
        <Experiences
            experiences={CommercialExperiences}
        />
      </Section>

      { /* SKILLS SECTION */ }
      <Section
          title='skills'
      >
        <Skills
            skillsLists={SkillsLists}
        />
      </Section>

      { /* EDUCATION SECTION */ }
      <Section
          title='education'
      >
        <Education
            education={TertiaryEducation}
        />
      </Section>

      { /* VOLUNTEER EXPERIENCE SECTION */ }
      <Section
          title='volunteerXp'
      >
        <Experiences
            experiences={VolunteerExperiences}
        />
      </Section>

    </div>
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};
