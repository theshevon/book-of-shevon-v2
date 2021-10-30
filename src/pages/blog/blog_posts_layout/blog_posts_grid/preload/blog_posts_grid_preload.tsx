import { observer } from 'mobx-react-lite';
import React from 'react';

import type { DisplaySize } from '../../../../../util/display_size_observer';
import { BlogPostPreload } from '../../blog_post/preload/blog_post_preload';

import loadedStyles from '../blog_posts_grid.module.css';

const cardsPerRowMedium = parseInt(loadedStyles.cardsPerRowMedium, 10) || 2;
const cardsPerRowLarge = parseInt(loadedStyles.cardsPerRowLarge, 10) || 3;
const cardsPerRowXLarge = parseInt(loadedStyles.cardsPerRowXLarge, 10) || 4;

const getNumberOfCardsNeeded = (size: DisplaySize) => {
  switch (size) {
    case 'xxlarge':
    case 'xlarge':
      return cardsPerRowXLarge;
    case 'large':
      return cardsPerRowLarge;
    case 'medium':
    case 'small':
    case 'xsmall':
    default:
      return cardsPerRowMedium;
  }
}

export const BlogPostsGridPreload = observer(({
  displaySize,
}: {
  displaySize: DisplaySize,
}) => (
  <div
      className={loadedStyles.blogPostsGrid}
  >
    {Array.from({ length: getNumberOfCardsNeeded(displaySize) }).map((_, index) => (
      <BlogPostPreload
          key={index}
      />
    ))}
  </div>
));
