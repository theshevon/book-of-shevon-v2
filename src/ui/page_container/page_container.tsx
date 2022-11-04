import classNames from 'classnames';
import React from 'react';
import styles from './page_container.module.css';

export const PageContainer = ({
  Content,
  pageBackgroundStyles,
  withoutTopPaddingForContent,
}: {
  Content: () => JSX.Element,
  pageBackgroundStyles?: string,
  withoutTopPaddingForContent?: boolean,
}) => (
  <div
      className={classNames(styles.pageContainer, pageBackgroundStyles)}
  >
    <div
        className={classNames(styles.pageContent, {
          [styles.withoutTopPaddingForContent]: withoutTopPaddingForContent,
        })}
    >
      <Content />
    </div>
  </div>
);
