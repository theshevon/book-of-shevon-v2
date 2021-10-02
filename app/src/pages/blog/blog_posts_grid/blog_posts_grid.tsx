import React from 'react';
import { observer } from 'mobx-react-lite';

import type { BlogPostProps } from '../blog_post/blog_post';
import { BlogPost } from '../blog_post/blog_post';

import styles from './blog_posts_grid.module.css';

export type LoadingState = 'loading' | 'complete' | 'error';

type BlogPostsGridProps = {
  loadingState: LoadingState,
  posts: BlogPostProps[],
  Fallback: () => JSX.Element,
}

export const BlogPostsGrid = observer(({
  loadingState,
  posts,
  Fallback,
}: BlogPostsGridProps) => {

  let BlogPosts: () => JSX.Element = Fallback;
  if (loadingState === 'loading') {
    BlogPosts = () => <div>Loading placeholder</div>;
  } else if (loadingState === 'complete') {
    BlogPosts = () => (
      <>
        {posts.map((post) => (
          <BlogPost
              key={post.title}
              {...post}
          />
        ))}
      </>
    ); 
  }
  
  return (
    <div
        className={styles.blogPostsGrid}
    >
      {loadingState === 'error'
      ? <Fallback />
      : <BlogPosts/>
      }
    </div>
  )
});
