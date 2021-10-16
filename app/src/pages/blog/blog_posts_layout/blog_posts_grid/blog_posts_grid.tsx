import React from 'react';
import { observer } from 'mobx-react-lite';

import type { LoadingState } from '../blog_posts_layout';
import type { BlogPostProps } from '../blog_post/blog_post';
import { BlogPost } from '../blog_post/blog_post';

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
      {posts.map((post) => (
        <BlogPost
            key={post.title}
            {...post}
        />
      ))}
    </div>
));
