import React from 'react'
import classNames from 'classnames';

import { Text } from './../text/text';

import styles from './capsule.module.css';

type Link = {
  anchorText: string,
  url: string,
}

type Content = string | Link;

type CapsuleProps = {
  content: Content,
  className?: string[],
}

const renderContent = (content: Content) => {
  if (typeof content === 'string') {
    return <Text.Small>{content}</Text.Small>
  }
  return (
    <a
        href={content.url}
        target='_blank'
        rel='noreferrer'
        className={styles.link}
    >
      {content.anchorText}
    </a>
  );
}

export const Capsule = ({
  content,
  className = [],
}: CapsuleProps) => (
  <div
      className={classNames(styles.capsule, ...className)}
  >
    {renderContent(content)}
  </div>
);
