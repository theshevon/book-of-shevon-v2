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
  } else if (loadingState === 'complete' && posts.length > 0) {
    const jumbotronPost = posts[0];
    const cardPosts = posts.splice(1);
    BlogPosts = () => (
      <>
        <div
            className={styles.jumbotronContainer}
        >
          <BlogPost
              {...jumbotronPost}
              isJumbotron={true}
          />
        </div>
        <div
            className={styles.separator}
        />
        <div
            className={styles.blogPostsGrid}
        >
          {cardPosts.map((post) => (
            <BlogPost
                key={post.title}
                {...post}
            />
          ))}
        </div>
      </>
    ); 
  }
  
  // TODO: fallback
  return (
    <div
        className={styles.blogPostsLayout}
    >
      {loadingState === 'error'
      ? <Fallback />
      : <BlogPosts/>
      }
    </div>
  )
});
