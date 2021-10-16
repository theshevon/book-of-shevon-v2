import React from 'react';

import { BlogPost, BlogPostProps } from './blog_post/blog_post';
import { BlogPostsGrid } from './blog_posts_grid/blog_posts_grid';

import styles from './blog_posts_layout.module.css';

export type LoadingState = 'loading' | 'complete' | 'error';

type BlogPostsLayoutProps = {
  loadingState: LoadingState,
  posts: BlogPostProps[],
  Fallback: () => JSX.Element,
}

type BlogPostsLayoutInternalProps = Pick<BlogPostsLayoutProps, 'loadingState' | 'posts'>;

export const BlogPostsLayout = ({
  loadingState,
  posts,
  Fallback,
}: BlogPostsLayoutProps) => (
  <div
      className={styles.blogPostsLayout}
  >
    {loadingState === 'error' || (loadingState === 'complete' && posts.length === 0)
    ? <Fallback />
    : <BlogPostsLayoutInternal
        loadingState={loadingState}
        posts={posts}
      />
    }
  </div>
);

const BlogPostsLayoutInternal = ({
  loadingState,
  posts,
}: BlogPostsLayoutInternalProps) => {
  const [first, ...rest] = posts;
  return (
    <>
      <BlogPost
          {...first}
          isJumbotron={true}
      />
      { rest.length > 0 &&
        <>
          <div
              className={styles.separator}
          >
          </div>
          <BlogPostsGrid
              loadingState={loadingState}
              posts={rest}
          />
        </>
      }
    </>
  );
}
