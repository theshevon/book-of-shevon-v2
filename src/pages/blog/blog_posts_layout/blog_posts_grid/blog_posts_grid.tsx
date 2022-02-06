import { observer } from 'mobx-react-lite';
import React from 'react';
import type { BlogPostProps } from '../blog_post/blog_post';
import { BlogPost } from '../blog_post/blog_post';

import styles from './blog_posts_grid.module.css';

type BlogPostsGridProps = {
  posts: BlogPostProps[],
}

export const BlogPostsGrid = observer(({
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
