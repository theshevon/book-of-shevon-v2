import classNames from 'classnames';
import React from 'react';
import { Appearance, Theme, useThemeContext } from '../../../util/theming/theme_provider';
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
}) => {
  const { appearance } = useThemeContext();
  return (
    <ul
        className={styles.skills}
    >
      { skillsLists.map(skillsList => (
        <li
            key={skillsList.label} // assumption: there will at most be two lists: one for 'proficient' and one for 'familiar'
            className={classNames(styles.skillsListContainer, {
              [styles.dark]: appearance === Appearance.DARK,
            })}
        >
          <SkillsList
              {...skillsList}
          />
        </li>
      )) }
    </ul>
  );
};

const SkillsList = ({
  label,
  skills,
}: SkillsListProps) => {
  const { theme, appearance } = useThemeContext();
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
          >
            <Capsule
                className={classNames(styles.skill, {
                  [styles.dark]: appearance === Appearance.DARK,
                })}
            >
              { skill }
            </Capsule>
          </li>
        )) }
      </ul>
    </div>
  );
};
