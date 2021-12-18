import classNames from 'classnames';
import React from 'react';
import { Theme, useThemeContext } from '../../../util/theming/theme_provider';
import { Capsule } from './../../../ui/capsule/capsule';
import { Text } from './../../../ui/text/text';
import { SkillsMessages as Messages } from './skills.messages';
import styles from './skills.module.css';

export type SkillsListProps = {
	label: 'proficient' | 'familiar',
	skills: string[],
};

export const Skills = ({
  skillsLists,
}: {
	skillsLists: SkillsListProps[],
}) => (
  <ul
      className={styles.skills}
  >
    { skillsLists.map(skillsList => (
      <li
          key={skillsList.label} // assumption: there will at most be two lists: one for 'proficient' and one for 'familiar'
          className={styles.skillsListContainer}
      >
        <SkillsList
            {...skillsList}
        />
      </li>
    )) }
  </ul>
);

const SkillsList = ({
  label,
  skills,
}: SkillsListProps) => {
  const { theme } = useThemeContext();
  return (
    <div
        className={classNames(styles.skillsList, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      <Text.ExtraSmall
          className={styles.label}
      >
        { label === 'proficient' ? Messages.ProficientWith() : Messages.FamiliarWith() }:
      </Text.ExtraSmall>
      <ul
          className={styles.list}
      >
        { skills.map(skill => (
          <li
              key={skill}
              className={styles.skill}
          >
            <Capsule>
              { skill }
            </Capsule>
          </li>
        )) }
      </ul>
    </div>
  );
};
