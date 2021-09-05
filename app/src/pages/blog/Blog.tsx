import React, { useEffect, useState } from 'react';

import { BlogHeader } from './blog_header/blog_header';
import { useDocumentHeader } from '../../util/hooks';

import { BlogMessages as Messages } from './blog.messages';

import styles from './blog.module.css';

const MEDIUM_BLOG_LINK = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shevon_mendis";

type Post = {
  title: string,
  thumbnail: string,
  description: string,
  link: string,
}

export const Blog = () => {

  useDocumentHeader(Messages.pageTitle());

  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(MEDIUM_BLOG_LINK)
        .then(res => res.json())
        .catch(_ => setError(true))
        .then(feed => {
            setError(false);
            setPosts(feed.items.filter((item: { categories: string[] }) => item.categories.length > 0));
            setLoading(false);
        });
  }, []);

  return (
    <div>
      <BlogHeader/>
    </div>
  );
}
