import React from 'react';
import classNames from 'classnames';

import preloadStyles from './blog_post_preload.module.css';
import loadedStyles from 'pages/blog/blog_posts_layout/blog_post/blog_post.module.css';

export const BlogPostPreload = ({
  isJumbotron = false,
}: {
  isJumbotron?: boolean,
}) => (
  <div
      className={classNames(loadedStyles.blogPost, {
        [loadedStyles.jumbotron]: isJumbotron,
        [preloadStyles.jumbotron]: isJumbotron,
      })}
  >
    <div
        className={loadedStyles.coverImgContainer}
    >
      <div
          className={classNames(loadedStyles.coverImg, preloadStyles.coverImg)}
      >
      </div>
    </div>
    <div
        className={loadedStyles.contentContainer}
    >
      <div
          className={loadedStyles.titleContainer}
      >
        <div
            className={preloadStyles.title}
        >
        </div>
      </div>
      <div
          className={classNames(loadedStyles.date, preloadStyles.date)}
      >
      </div>
      <div
          className={classNames(loadedStyles.description, preloadStyles.description)}
      >
        <div
            className={preloadStyles.descriptionLineOne}
        >
        </div>
        <div
            className={preloadStyles.descriptionLineTwo}
        >
        </div>
        <div
            className={preloadStyles.descriptionLineThree}
        >
        </div>
      </div>
      <div
          className={loadedStyles.tags}
      >
        <div
            className={classNames(loadedStyles.tag, preloadStyles.tag)}
        >
        </div>
      </div>
    </div>
  </div>
);
