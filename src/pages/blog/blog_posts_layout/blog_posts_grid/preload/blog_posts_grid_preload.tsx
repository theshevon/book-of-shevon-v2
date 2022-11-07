import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { DisplaySize } from '../../../../../util/display_size_observer/display_size_observer';
import { Appearance } from '../../../../../util/theming/theme_provider';
import { BlogPostPreload } from '../../blog_post/preload/blog_post_preload';
import loadedStyles from '../blog_posts_grid.module.css';
import preloadedStyles from './blog_posts_grid_preload.module.css';

const cardsPerRowMedium = parseInt(loadedStyles.cardsPerRowMedium, 10) || 2;
const cardsPerRowLarge = parseInt(loadedStyles.cardsPerRowLarge, 10) || 3;
const cardsPerRowXLarge = parseInt(loadedStyles.cardsPerRowXLarge, 10) || 4;

const getNumberOfCardsNeeded = (size: DisplaySize) => {
  switch (size) {
    case DisplaySize.X_X_LARGE:
    case DisplaySize.X_LARGE:
      return cardsPerRowXLarge;
    case DisplaySize.LARGE:
      return cardsPerRowLarge;
    case DisplaySize.MEDIUM:
    case DisplaySize.SMALL:
    case DisplaySize.X_SMALL:
    default:
      return cardsPerRowMedium;
  }
};

export const BlogPostsGridPreload = observer(({
  displaySize,
  appearance,
}: {
  displaySize: DisplaySize,
  appearance: Appearance,
}) => (
  <div
      className={classNames(loadedStyles.blogPostsGrid, preloadedStyles.blogPostsGrid)}
  >
    { Array.from({ length: getNumberOfCardsNeeded(displaySize) }).map((_, index) => (
      <BlogPostPreload
          key={index}
          appearance={appearance}
      />
    )) }
  </div>
));
