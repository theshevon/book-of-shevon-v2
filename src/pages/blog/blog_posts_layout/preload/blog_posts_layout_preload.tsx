import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import type { DisplaySize } from '../../../../util/display_size_observer/display_size_observer';
import { isMediumOrWider } from '../../../../util/display_size_observer/display_size_observer';
import { Appearance } from '../../../../util/theming/theme_provider';
import { BlogPostPreload } from '../blog_post/preload/blog_post_preload';
import { BlogPostsGridPreload } from '../blog_posts_grid/preload/blog_posts_grid_preload';
import loadedStyles from '../blog_posts_layout.module.css';

export const BlogPostsLayoutPreload = observer(({
  displaySize,
  appearance,
}: {
  displaySize: DisplaySize,
  appearance: Appearance,
}) => {
  let Layout;
  if (isMediumOrWider(displaySize)) {
    Layout = () => (
      <>
        <BlogPostPreload
            isJumbotron={true}
            appearance={appearance}
        />
        <>
          <div
              className={classNames(loadedStyles.separator, {
                [loadedStyles.dark]: appearance === Appearance.DARK,
              })}
          >
          </div>
          <BlogPostsGridPreload
              displaySize={displaySize}
              appearance={appearance}
          />
        </>
      </>
    );
  } else {
    Layout = () => (
      <BlogPostsGridPreload
          displaySize={displaySize}
          appearance={appearance}
      />
    );
  }

  return (
    <Layout/>
  );
});
