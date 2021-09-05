import React, { useEffect, useState } from 'react';

import { useDocumentHeader } from '../../util/hooks';

import { BlogMessages as Messages } from './blog.messages';

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(MEDIUM_BLOG_LINK)
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(feed => {
            setPosts(feed.items.filter((item: { categories: string[] }) => item.categories.length > 0));
            setLoading(false);
        });
  }, []);

  return (
    <div>
      Blog Page
    </div>
  );
}
