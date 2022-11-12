import classNames from 'classnames';
import React from 'react';
import { Link } from '../../../../ui/link/link';
import { Text } from '../../../../ui/text/text';
import { Appearance, Theme, useThemeContext } from '../../../../util/theming/theme_provider';

import styles from './blog_post.module.css';

const MAX_DESC_LEN = 300;

const getFormattedDate = (dateString: string) => {
  try {
    const dt = new Date(dateString);
    const month = new Intl.DateTimeFormat('en-AU', { month: 'long' }).format(dt);
    return `${month} ${dt.getDate().toString().padStart(2, '0')}, ${dt.getFullYear()}`;
  } catch (_) {
    // do nothing
  }
};

const getShortenedDescription = (desc: string): string => {
  const sanitisedDesc = desc.replace(/(<([^>]+)>)/ig, ' ');
  if (sanitisedDesc.length <= MAX_DESC_LEN) return sanitisedDesc;
  return sanitisedDesc.substr(0, sanitisedDesc.lastIndexOf(' ', MAX_DESC_LEN)) + '...';
};

export type BlogPostProps = {
  title: string,
  pubDate: string,
  link: string,
  thumbnail: string,
  description: string,
  categories: string[],
  isJumbotron?: boolean,
}

export const BlogPost = ({
  title,
  pubDate,
  link,
  thumbnail,
  description,
  categories,
  isJumbotron,
}: BlogPostProps) => {
  const { theme } = useThemeContext();
  return (
    <div
        className={classNames(styles.blogPost, {
          [styles.jumbotron]: isJumbotron,
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      <div
          className={styles.coverImgContainer}
      >
        <Link
            url={link}
        >
          <img
              src={thumbnail}
              alt={`Cover for '${title}'`}
              className={styles.coverImg}
          />
        </Link>
      </div>
      <div
          className={styles.contentContainer}
      >
        <div
            className={styles.titleContainer}
        >
          <Link
              url={link}
          >
            <Text.LargeTitle
                alignment='left'
                fontWeight='bold'
            >
              { title }
            </Text.LargeTitle>
          </Link>
        </div>
        <Text.ExtraSmall
            textCase='uppercase'
            fontWeight='light'
            className={styles.date}
        >
          { getFormattedDate(pubDate) }
        </Text.ExtraSmall>
        <Text.Small
            alignment='left'
        >
          { getShortenedDescription(description) }
        </Text.Small>
        <div
            className={styles.tags}
        >
          { categories.map((category, index) => (
            <Tag
                key={index}
                tag={category}
            />
          )) }
        </div>
      </div>
    </div>
  );
};

const Tag = ({
  tag,
}: {
  tag: string,
}) => {
  return (
    <div
        className={styles.tag}
    >
      <Text.ExtraSmall
          alignment='centre'
          textCase='lowercase'
          className={styles.tagText}
          retainDarkTextOnDarkMode={true}
      >
        { tag }
      </Text.ExtraSmall>
    </div>
  );
};
