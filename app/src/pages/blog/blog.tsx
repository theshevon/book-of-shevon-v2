import React, { useEffect, useState } from 'react';

import { BlogHeader } from './blog_header/blog_header';
import { useDocumentHeader } from '../../util/hooks';
import { BlogPostProps } from './blog_post/blog_post';
import { BlogPostsGrid, LoadingState } from './blog_posts_grid/blog_posts_grid';

import { BlogMessages as Messages } from './blog.messages';

import styles from './blog.module.css';

const MEDIUM_BLOG_LINK = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shevon_mendis';

export const Blog = () => {

  useDocumentHeader(Messages.pageTitle());

  const [posts, setPosts] = useState<BlogPostProps[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>('complete');

  useEffect(() => {
    fetch(MEDIUM_BLOG_LINK)
        .then(res => res.json())
        .catch(_ => setLoadingState('error'))
        .then(feed => {
            setLoadingState('complete');
            setPosts(feed.items.filter((item: { categories: string[] }) => item.categories.length > 0));
        });
  }, []);
 
  // TODO: create a fallback placeholder
  const Fallback = () => <div>Fallback placeholder</div>;

  return (
    <div
        className={styles.blog}
    >
      <BlogHeader/>
      <div
          className={styles.blogPostsGridContainer}
      >
        {/* TODO: rename this to something better */}
        {/* <div
            className={styles.topThing}
        /> */}
        <BlogPostsGrid
            loadingState={loadingState}
            posts={posts}
            Fallback={Fallback}
        />
      </div>
    </div>
  );
}
