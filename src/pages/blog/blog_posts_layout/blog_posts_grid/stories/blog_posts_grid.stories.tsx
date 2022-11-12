import { storiesOf } from '@storybook/react';
import React from 'react';
import { DisplaySizeObserver } from '../../../../../util/display_size_observer/display_size_observer';
import thumbnail from '../../../../../util/storybook/test_images/test_img_0.png';
import { Appearance } from '../../../../../util/theming/theme_provider';
import type { BlogPostProps } from '../../blog_post/blog_post';
import { BlogPostsGrid } from '../blog_posts_grid';
import { BlogPostsGridPreload } from '../preload/blog_posts_grid_preload';

const NUM_TEST_POSTS = 7;

const BlogPosts: BlogPostProps[] = Array.from({ length: NUM_TEST_POSTS }, () => ({
  title: 'Test Blog Post',
  pubDate: '2019-03-04 14:22:27',
  link: '#',
  thumbnail,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis repellat tempore',
  categories: ['category'],
}));

storiesOf('Pages/Blog/BlogPostsGrid', module)
  .add('Preload', () => (
    <BlogPostsGridPreload
        displaySize={DisplaySizeObserver.size}
        appearance={Appearance.LIGHT}
    />
  ))
  .add('BlogPostsGrid', () => (
    <BlogPostsGrid
        posts={BlogPosts}
    />
  ));
