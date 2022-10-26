import React, { useEffect } from 'react';
import { Button } from '../../ui/button/button';
import { updateDocumentHeader } from '../../util/title_manager';
import { Text } from './../../ui/text/text';
import { startGame } from './game/main';
import { SnekMessages as Messages } from './snek.messages';
import styles from './snek.module.css';

const noop = () => {};

export const Snek = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle(), { type: 'emoji', src: '🐍' });
    startGame();
  }, []);

  return (
    <>
      <div className={styles.gameWelcome}>
        <Text.LargeTitle alignment='centre' fontWeight='bold'>🐍 Welcome to Favicon SnEk 🐍</Text.LargeTitle>
      </div>
      <div className={styles.gameInstructions}>
        <Text.Small alignment='centre'>Use the arrow keys to control the snek</Text.Small>
      </div>
      <div className={styles.gameControls}>
        <div className={styles.topRow}>
          <Button onClick={noop} className={styles.gameControlBtn}>
            ⬆️
          </Button>
        </div>
        <div className={styles.bottomRow}>
          <Button onClick={noop} className={styles.gameControlBtn}>
            ⬅️
          </Button>
          <Button onClick={noop} className={styles.gameControlBtn}>
            ⬇️
          </Button>
          <Button onClick={noop} className={styles.gameControlBtn}>
            ➡️
          </Button>
        </div>
      </div>
      <div id='game-board' className={styles.gameBoard}></div>
    </>
  );
};
