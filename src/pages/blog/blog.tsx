import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { BlogMessages as Messages } from './blog.messages';
import { BlogPostProps } from './blog_posts_layout/blog_post/blog_post';
import { BlogPostsLayout } from './blog_posts_layout/blog_posts_layout';
import type { LoadingState } from './blog_posts_layout/blog_posts_layout';

const MEDIUM_BLOG_LINK = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shevn';

export const Blog = () => {

  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle[locale], { type: 'emoji', src: '✏️' });
  }, [locale]);

  const [posts, setPosts] = useState<BlogPostProps[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>('loading');

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
  const Fallback = () => <div>Loading...</div>;

  const Content = () => (
    <BlogPostsLayout
        loadingState={loadingState}
        posts={posts}
        Fallback={Fallback}
    />
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};
