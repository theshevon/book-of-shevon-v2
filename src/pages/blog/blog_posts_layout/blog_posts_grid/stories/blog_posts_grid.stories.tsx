import React from 'react';
import { storiesOf } from '@storybook/react';

import type { BlogPostProps } from '../../blog_post/blog_post';
import { BlogPostsGrid } from '../blog_posts_grid';
import { BlogPostsGridPreload } from '../preload/blog_posts_grid_preload';
import { DisplaySizeObserver } from '../../../../../util/display_size_observer';

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

storiesOf('Pages/Blog/BlogPostsGrid', module)
  .add('Preload', () => (
    <BlogPostsGridPreload
        displaySize={DisplaySizeObserver.size}
    />
  ))
  .add('BlogPostsGrid', () => (
    <BlogPostsGrid
        loadingState='complete'
        posts={BlogPosts}
    />
  ));
