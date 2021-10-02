import React from 'react';

import { Link } from '../../../ui/link/link';
import { Text } from '../../../ui/text/text';

import styles from './blog_post.module.css';

const getFormattedDate = (dateString: string) => {
  const dt = new Date(dateString);
  const month = new Intl.DateTimeFormat('en-AU', { month: 'long' }).format(dt);
  const formattedDate = `${month}, ${dt.getDate().toString().padStart(2, '0')} ${dt.getFullYear()}`
  return formattedDate;
}

// const getShortenedDescription = (desc: string): string => {
//   const sanitisedDesc = desc.replace(/(<([^>]+)>)/ig, ' ');
//   if (sanitisedDesc.length <= MAX_DESC_LEN) return sanitisedDesc;
//   return sanitisedDesc.substr(0, sanitisedDesc.lastIndexOf(' ', MAX_DESC_LEN)) + '...';  
// }

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
      className={styles.blogPost}
  >
    <img
        src={thumbnail}
        alt={`Cover for '${title}'`}
        className={styles.coverImg}
    />
    <div
        className={styles.tags}
    >
      {categories.map(category => (
        <Tag
            tag={category}
        />
      ))}
    </div>
    <Text.ExtraSmall
        textCase='uppercase'
    >
      {getFormattedDate(pubDate)}
    </Text.ExtraSmall>
    <div
        className={styles.titleContainer}
    >
      <Link
          anchorText={title}
          url={link}
          className={styles.title}
      />
    </div>
    <Text.Small
        alignment='left'
    >
      {description}
    </Text.Small>
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
