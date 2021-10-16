import React from 'react';

import { BlogPost, BlogPostProps } from './blog_post/blog_post';
import { BlogPostsGrid } from './blog_posts_grid/blog_posts_grid';

import styles from './blog_posts_layout.module.css';
import { observer } from 'mobx-react-lite';
import type { DisplaySize } from '../../../util/display_size_observer';
import { DisplaySizeObserver } from '../../../util/display_size_observer';

export type LoadingState = 'loading' | 'complete' | 'error';

type BlogPostsLayoutProps = {
  loadingState: LoadingState,
  posts: BlogPostProps[],
  Fallback: () => JSX.Element,
}

export const BlogPostsLayout = observer(({
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
          displaySize={DisplaySizeObserver.size}
          loadingState={loadingState}
          posts={posts}
      />
    }
  </div>
));

const BlogPostsLayoutInternal = observer(({
  displaySize,
  loadingState,
  posts,
}: { displaySize: DisplaySize } & Omit<BlogPostsLayoutProps, 'Fallback'>) => {
  let Layout;
  if (displaySize !== 'small' && displaySize !== 'medium') {
    const [first, ...rest] = posts;
    Layout = () => (
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
  } else {
    Layout = () => (
      <BlogPostsGrid
          loadingState={loadingState}
          posts={posts}
      />
    );
  }

  return (
    <Layout />
  );
});
