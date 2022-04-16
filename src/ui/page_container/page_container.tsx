import classNames from 'classnames';
import React from 'react';
import styles from './page_container.module.css';

export const PageContainer = ({
  Nav,
  Content,
  pageBackgroundStyles,
  withoutTopPaddingForContent,
}: {
  Nav: () => JSX.Element,
  Content: () => JSX.Element,
  pageBackgroundStyles?: string,
  withoutTopPaddingForContent?: boolean,
}) => (
  <div
      className={classNames(styles.pageContainer, pageBackgroundStyles)}
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
