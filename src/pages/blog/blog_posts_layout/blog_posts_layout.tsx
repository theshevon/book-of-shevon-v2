import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import type { DisplaySize } from '../../../util/display_size_observer/display_size_observer';
import { DisplaySizeObserver, isMediumOrWider } from '../../../util/display_size_observer/display_size_observer';
import { Appearance, useThemeContext } from '../../../util/theming/theme_provider';
import { BlogPost, BlogPostProps } from './blog_post/blog_post';
import { BlogPostsGrid } from './blog_posts_grid/blog_posts_grid';
import styles from './blog_posts_layout.module.css';
import { BlogPostsLayoutPreload } from './preload/blog_posts_layout_preload';

export type LoadingState = 'loading' | 'complete' | 'error';

type BlogPostsLayoutProps = {
  loadingState: LoadingState,
  posts: BlogPostProps[],
  Fallback: () => JSX.Element,
}

export const BlogPostsLayout = observer(({
  loadingState,
  posts,
  Fallback,
}: BlogPostsLayoutProps) => (
  <div
      className={styles.blogPostsLayout}
  >
    { loadingState === 'error' || (loadingState === 'complete' && posts.length === 0)
      ? <Fallback />
      : <BlogPostsLayoutInternal
              displaySize={DisplaySizeObserver.size}
              loadingState={loadingState}
              posts={posts}
      />
    }
  </div>
));

const BlogPostsLayoutInternal = observer(({
  displaySize,
  loadingState,
  posts,
}: { displaySize: DisplaySize } & Omit<BlogPostsLayoutProps, 'Fallback'>) => {
  const { appearance } = useThemeContext();

  let Layout;
  if (loadingState === 'loading') {
    Layout = () => (
      <BlogPostsLayoutPreload
          displaySize={displaySize}
          appearance={appearance}
      />
    );
  } else {
    if (isMediumOrWider(displaySize)) {
      const [first, ...rest] = posts;
      Layout = () => (
        <>
          <BlogPost
              {...first}
              isJumbotron={true}
          />
          { rest.length > 0 &&
            <>
              <div
                  className={classNames(styles.separator, {
                    [styles.dark]: appearance === Appearance.DARK,
                  })}
              >
              </div>
              <BlogPostsGrid
                  posts={rest}
              />
            </>
          }
        </>
      );
    } else {
      Layout = () => (
        <BlogPostsGrid
            posts={posts}
        />
      );
    }
  }

  return (
    <Layout/>
  );
});
