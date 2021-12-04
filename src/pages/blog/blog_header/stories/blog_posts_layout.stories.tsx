import { storiesOf } from '@storybook/react';
import React from 'react';
import { BlogHeader } from '../blog_header';

storiesOf('Pages/Blog/BlogHeader', module)
  .add('BlogHeader', () => (
    <BlogHeader/>
  ));
