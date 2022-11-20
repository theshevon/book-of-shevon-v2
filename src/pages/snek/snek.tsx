import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Button } from '../../ui/button/button';
import { PageContainer } from '../../ui/page_container/page_container';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { Appearance, useThemeContext } from '../../util/theming/theme_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { Text } from './../../ui/text/text';
import { runGame } from './game';
import { SnekMessages as Messages } from './snek.messages';
import styles from './snek.module.css';

const noop = () => {};

export const Snek = () => {

  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle[locale], { type: 'emoji', src: '🐍' });
    runGame();
  }, [locale]);

  const { appearance } = useThemeContext();

  const Content = () => (
    <>
      <div
          className={styles.gameWelcome}
      >
        <Text.LargeTitle
            alignment='centre'
            fontWeight='bold'
        >
          🐍 { Messages.welcome[locale] } 🐍
        </Text.LargeTitle>
      </div>
      <div
          className={styles.gameInstructions}
      >
        <Text.Small
            alignment='centre'
        >
          { Messages.controls[locale] }
        </Text.Small>
      </div>
      <div
          className={styles.gameControls}
      >
        <div
            className={styles.topRow}
        >
          <Button
              onClick={noop}
              className={classNames(styles.gameControlBtn, {
                [styles.dark]: appearance === Appearance.DARK,
              })}
          >
            ⬆️
          </Button>
        </div>
        <div
            className={styles.bottomRow}
        >
          <Button
              onClick={noop}
              className={classNames(styles.gameControlBtn, {
                [styles.dark]: appearance === Appearance.DARK,
              })}
          >
            ⬅️
          </Button>
          <Button
              onClick={noop}
              className={classNames(styles.gameControlBtn, {
                [styles.dark]: appearance === Appearance.DARK,
              })}
          >
            ⬇️
          </Button>
          <Button
              onClick={noop}
              className={classNames(styles.gameControlBtn, {
                [styles.dark]: appearance === Appearance.DARK,
              })}
          >
            ➡️
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};
