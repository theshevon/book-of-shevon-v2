import React from 'react';

import { Link } from '../../../ui/link/link';
import { Text } from './../../../ui/text/text';

import styles from './blog_post.module.css';

const MAX_DESC_LEN = 350;

export type BlogPostProps = {
  title: string,
  thumbnail: string,
  description: string,
  link: string,
}

const getShortenedDescription = (desc: string): string => {
  const sanitisedDesc = desc.replace(/(<([^>]+)>)/ig, '');
  if (sanitisedDesc.length <= MAX_DESC_LEN) return sanitisedDesc;
  return sanitisedDesc.substr(0, sanitisedDesc.lastIndexOf(' ', MAX_DESC_LEN)) + '...';  
}

export const BlogPost = ({
  title,
  thumbnail,
  description,
  link,
}: BlogPostProps) => (
  <div
      className={styles.blogPost}
  >
    <Text.MediumTitle
        alignment='center'
        keepDefaultMargins={true}
    >
      {title}
    </Text.MediumTitle>
    <img
        src={thumbnail}
        alt={`Cover for '${title}'`}
        className={styles.coverImg}
    />
    <div
        className={styles.desc}
    >
      <Text.Small
          keepDefaultMargins={true}  
      >
        {getShortenedDescription(description)}
      </Text.Small>
      <Link
          anchorText='read more'
          url={link}
      />
    </div>
  </div>
);
