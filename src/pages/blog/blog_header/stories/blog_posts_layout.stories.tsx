import React from 'react';
import { storiesOf } from '@storybook/react';

import { BlogHeader } from '../blog_header';

storiesOf('Pages/Blog/BlogHeader', module)
  .add('BlogHeader', () => (
    <BlogHeader/>
  ));
