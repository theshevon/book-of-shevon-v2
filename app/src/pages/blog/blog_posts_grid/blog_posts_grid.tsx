import React from 'react';
import { observer } from 'mobx-react-lite';

import { BlogPostProps } from './../blog_post/blog_post';

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
    BlogPosts = () => <div>{posts.map((post) => <div key={post.title}>Placeholder for {post.title}</div>)}</div>; 
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
