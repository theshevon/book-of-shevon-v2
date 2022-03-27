import classNames from 'classnames';
import React from 'react';
import styles from './page_container.module.css';

export const PageContainer = ({
  Nav,
  Content,
  withoutTopPaddingForContent,
}: {
  Nav: () => JSX.Element,
  Content: () => JSX.Element,
  withoutTopPaddingForContent?: boolean,
}) => (
  <div
      className={styles.pageContainer}
  >
    <Nav />
    <div
        className={classNames(styles.pageContent, {
          [styles.withoutTopPaddingForContent]: withoutTopPaddingForContent,
        })}
    >
      <Content />
    </div>
  </div>
);
