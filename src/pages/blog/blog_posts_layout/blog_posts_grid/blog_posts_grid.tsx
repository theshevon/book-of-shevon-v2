import { observer } from 'mobx-react-lite';

import type { BlogPostProps } from 'pages/blog/blog_posts_layout/blog_post/blog_post';
import { BlogPost } from 'pages/blog/blog_posts_layout/blog_post/blog_post';
import type { LoadingState } from 'pages/blog/blog_posts_layout/blog_posts_layout';
import React from 'react';

import styles from './blog_posts_grid.module.css';

type BlogPostsGridProps = {
  loadingState: LoadingState,
  posts: BlogPostProps[],
}

export const BlogPostsGrid = observer(({
  loadingState,
  posts,
}: BlogPostsGridProps) => (
  <div
      className={styles.blogPostsGrid}
  >
    { posts.map((post) => (
      <BlogPost
          key={post.title}
          {...post}
      />
    )) }
  </div>
));
