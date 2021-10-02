import React from 'react';
import { storiesOf } from '@storybook/react';

import { BlogPost } from '../pages/blog/blog_post/blog_post';
import BlogPostImg from './assets/blog_post_img.jpeg';

storiesOf('Pages/Blog/BlogPost', module)
  .add('BlogPost', () => (
    <BlogPost
      title='Blog Post Title'
      pubDate='2021-04-12 14:22:27'
      link=''
      thumbnail={BlogPostImg}
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam eligendi perspiciatis! Voluptatum magnam, reiciendis modi dolorum beatae et quibusdam maxime iusto laboriosam velit, amet doloribus, deleniti harum illum ducimus!'
      categories={['Category']}
    />
  ));
