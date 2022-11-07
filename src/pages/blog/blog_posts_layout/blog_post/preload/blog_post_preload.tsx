import classNames from 'classnames';
import React from 'react';
import { Appearance } from '../../../../../util/theming/theme_provider';
import loadedStyles from '../blog_post.module.css';
import preloadStyles from './blog_post_preload.module.css';

export const BlogPostPreload = ({
  isJumbotron = false,
  appearance,
}: {
  isJumbotron?: boolean,
  appearance: Appearance;
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
          className={classNames(loadedStyles.coverImg, preloadStyles.coverImg, {
            [preloadStyles.darkCoverImg]: appearance === Appearance.DARK,
          })}
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
            className={classNames(preloadStyles.title, {
              [preloadStyles.darkTitle]: appearance === Appearance.DARK,
            })}
        >
        </div>
      </div>
      <div
          className={classNames(loadedStyles.date, preloadStyles.date, {
            [preloadStyles.darkDate]: appearance === Appearance.DARK,
          })}
      >
      </div>
      <div
          className={classNames(loadedStyles.description, preloadStyles.description)}
      >
        <div
            className={classNames(preloadStyles.descriptionLineOne, {
              [preloadStyles.darkDescriptionLineOne]: appearance === Appearance.DARK,
            })}
        >
        </div>
        <div
            className={classNames(preloadStyles.descriptionLineTwo, {
              [preloadStyles.darkDescriptionLineTwo]: appearance === Appearance.DARK,
            })}
        >
        </div>
        <div
            className={classNames(preloadStyles.descriptionLineThree, {
              [preloadStyles.darkDescriptionLineThree]: appearance === Appearance.DARK,
            })}
        >
        </div>
      </div>
      <div
          className={loadedStyles.tags}
      >
        <div
            className={classNames(loadedStyles.tag, preloadStyles.tag, {
              [preloadStyles.darkTag]: appearance === Appearance.DARK,
            })}
        >
        </div>
      </div>
    </div>
  </div>
);
