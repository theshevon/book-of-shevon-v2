import { storiesOf } from '@storybook/react';

import { BlogHeader } from 'pages/blog/blog_header/blog_header';
import React from 'react';

storiesOf('Pages/Blog/BlogHeader', module)
  .add('BlogHeader', () => (
    <BlogHeader/>
  ));
