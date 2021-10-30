import React from 'react';
import { storiesOf } from '@storybook/react';

import type { BlogPostProps } from 'pages/blog/blog_posts_layout/blog_post/blog_post';
import { BlogPostsLayout } from 'pages/blog/blog_posts_layout/blog_posts_layout';
import { BlogPostsLayoutPreload } from 'pages/blog/blog_posts_layout/preload/blog_posts_layout_preload';
import { DisplaySizeObserver } from 'util/display_size_observer';

import thumbail from './test_cover.png';

const NUM_TEST_POSTS = 7;

const BlogPosts: BlogPostProps[] = Array.from({ length: NUM_TEST_POSTS }, (_, i) => ({
  title: 'Test Blog Post',
  pubDate: '2019-03-04 14:22:27',
  link: '#',
  thumbnail: thumbail,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis repellat tempore',
  categories: ['category'],
}));

storiesOf('Pages/Blog/BlogPostsLayout', module)
  .add('Preload', () => (
    <BlogPostsLayoutPreload
        displaySize={DisplaySizeObserver.size}
    />
  ))
  .add('BlogPostsLayout', () => (
    <BlogPostsLayout
        loadingState='complete'
        posts={BlogPosts}
        Fallback={() => <div>Fallback</div>}
    />
  ));
