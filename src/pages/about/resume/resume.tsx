import classNames from 'classnames';
import React from 'react';
import { Appearance, Theme, useThemeContext } from '../../../util/theming/theme_provider';
import { TertiaryEducation } from './data/education/education';
import { CommercialExperiences, VolunteerExperiences } from './data/experiences/experiences';
import { SkillsLists } from './data/skills/skills';
import { Education } from './education/education';
import { Experiences } from './experiences/experiences';
import { Profile } from './profile/profile';
import styles from './resume.module.css';
import { Section } from './section/section';
import { Skills } from './skills/skills';

export const Resume = () => {

  const { theme, appearance } = useThemeContext();

  return (
    <div
        className={classNames(styles.resume, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >

      { /* profile section */ }
      <Profile/>

      { /* work experience section */ }
      <Section
          title='commercialXp'
      >
        <Experiences
            experiences={CommercialExperiences}
        />
      </Section>

      { /* skills section */ }
      <Section
          title='skills'
      >
        <Skills
            skillsLists={SkillsLists}
        />
      </Section>

      { /* education section */ }
      <Section
          title='education'
      >
        <Education
            education={TertiaryEducation}
        />
      </Section>

      { /* volunteer experience section */ }
      <Section
          title='volunteerXp'
      >
        <Experiences
            experiences={VolunteerExperiences}
        />
      </Section>

    </div>
  );
};
