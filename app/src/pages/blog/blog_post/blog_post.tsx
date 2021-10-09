import React from 'react';
import classNames from 'classnames';

import { Link } from '../../../ui/link/link';
import { Text } from '../../../ui/text/text';

import styles from './blog_post.module.css';

const MAX_DESC_LEN = 300;

const getFormattedDate = (dateString: string) => {
  let formattedDate;
  try {
    const dt = new Date(dateString);
    const month = new Intl.DateTimeFormat('en-AU', { month: 'long' }).format(dt);
    formattedDate = `${month} ${dt.getDate().toString().padStart(2, '0')}, ${dt.getFullYear()}`;
  } catch (_) {
    // do nothing
  }
  return formattedDate;
}

const getShortenedDescription = (desc: string): string => {
  const sanitisedDesc = desc.replace(/(<([^>]+)>)/ig, ' ');
  if (sanitisedDesc.length <= MAX_DESC_LEN) return sanitisedDesc;
  return sanitisedDesc.substr(0, sanitisedDesc.lastIndexOf(' ', MAX_DESC_LEN)) + '...';  
}

export type BlogPostProps = {
  title: string,
  pubDate: string,
  link: string,
  thumbnail: string,
  description: string,
  categories: string[],
  isFirst?: boolean,
}

export const BlogPost = ({
  title,
  pubDate,
  link,
  thumbnail,
  description,
  categories,
  isFirst = false,
}: BlogPostProps) => (
  <div
      className={classNames(styles.blogPost, {
        [styles.first]: isFirst,
      })}
  >
    <div
        className={styles.coverImgContainer}
    >
      <img
          src={thumbnail}
          alt={`Cover for '${title}'`}
          className={styles.coverImg}
      />
    </div>
    <div
        className={styles.content}
    >
      <div
          className={styles.titleContainer}
      >
        <Link
            anchorText={title}
            url={link}
            className={classNames(styles.title)}
        />
      </div>
      <Text.ExtraSmall
          textCase='uppercase'
          className={styles.date}
      >
        {getFormattedDate(pubDate)}
      </Text.ExtraSmall>
      <Text.Small
          alignment='left'
      >
        {getShortenedDescription(description)}
      </Text.Small>
      <div
          className={styles.tags}
      >
        {categories.map(category => (
          <Tag
              tag={category}
          />
        ))}
      </div>
    </div>
  </div>
);

const Tag = ({
  tag,
}: {
  tag: string,
}) => (
  <div
      className={styles.tag}
  >
    <Text.ExtraSmall
        alignment='center'
        textCase='lowercase'
    >
      {tag}
    </Text.ExtraSmall>
  </div>
);
