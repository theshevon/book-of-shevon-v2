import { storiesOf } from '@storybook/react';
import React from 'react';
import { DisplaySizeObserver } from '../../../../util/display_size_observer/display_size_observer';
import thumbnail from '../../../../util/storybook/test_images/test_img_0.png';
import { Appearance } from '../../../../util/theming/theme_provider';
import type { BlogPostProps } from '../blog_post/blog_post';
import { BlogPostsLayout } from '../blog_posts_layout';
import { BlogPostsLayoutPreload } from '../preload/blog_posts_layout_preload';

const NUM_TEST_POSTS = 7;

const BlogPosts: BlogPostProps[] = Array.from({ length: NUM_TEST_POSTS }, () => ({
  title: 'Test Blog Post',
  pubDate: '2019-03-04 14:22:27',
  link: '#',
  thumbnail: thumbnail,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis repellat tempore',
  categories: ['category'],
}));

storiesOf('Pages/Blog/BlogPostsLayout', module)
  .add('Preload', () => (
    <BlogPostsLayoutPreload
        appearance={Appearance.LIGHT}
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
