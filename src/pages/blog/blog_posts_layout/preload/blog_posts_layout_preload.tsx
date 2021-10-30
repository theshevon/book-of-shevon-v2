import { observer } from 'mobx-react-lite';
import React from 'react';

import type { DisplaySize } from 'util/display_size_observer';
import { BlogPostPreload } from 'pages/blog/blog_posts_layout/blog_post/preload/blog_post_preload';
import { BlogPostsGridPreload } from 'pages/blog/blog_posts_layout/blog_posts_grid/preload/blog_posts_grid_preload';

import loadedStyles from 'pages/blog/blog_posts_layout/blog_posts_layout.module.css';

export const BlogPostsLayoutPreload = observer(({
  displaySize,
}: {
  displaySize: DisplaySize,
}) => {
  let Layout;
  if (displaySize !== 'small' && displaySize !== 'medium') {
    Layout = () => (
      <>
        <BlogPostPreload
            isJumbotron={true}
        />
        <>
          <div
              className={loadedStyles.separator}
          >
          </div>
          <BlogPostsGridPreload
              displaySize={displaySize}
          />
        </>
      </>
    );
  } else {
    Layout = () => (
      <BlogPostsGridPreload
          displaySize={displaySize}
      />
    );
  }

  return (
    <Layout/>
  )
});