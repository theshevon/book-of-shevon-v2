import React, { useEffect } from 'react';
import { updateDocumentHeader } from '../../util/title_manager';
import { AboutMessages as Messages } from './about.messages';
import styles from './about.module.css';
import { TertiaryEducation } from './data/education/education';
import { CommercialExperiences, VolunteerExperiences } from './data/experiences/experiences';
import { SkillsLists } from './data/skills/skills';
import { Education } from './education/education';
import { Experiences } from './experiences/experiences';
import { createProfile } from './profile/create';
import { Section } from './section/section';
import { Skills } from './skills/skills';

export const About = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle());
  }, []);

  const Profile = createProfile();

  return (

    <div
        className={styles.page}
    >

      { /* PROFILE SECTION */ }
      { Profile }

      { /* WORK EXPERIENCE SECTION */ }
      <Section
          title={'commercialXp'}
      >
        <Experiences
            experiences={CommercialExperiences}
        />
      </Section>

      { /* SKILLS SECTION */ }
      <Section
          title={'skills'}
      >
        <Skills
            skillsLists={SkillsLists}
        />
      </Section>

      { /* EDUCATION SECTION */ }
      <Section
          title={'education'}
      >
        <Education
            education={TertiaryEducation}
        />
      </Section>

      { /* VOLUNTEER EXPERIENCE SECTION */ }
      <Section
          title={'volunteerXp'}
      >
        <Experiences
            experiences={VolunteerExperiences}
        />
      </Section>

    </div>
  );
};
