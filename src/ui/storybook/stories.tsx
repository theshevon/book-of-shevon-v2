import React from 'react';
import styles from './stories.module.css';

export class StoryGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
          className={styles.group}
      >
        { React.Children.map(children, (Story: React.ReactNode) => (
          <SingleStory>
            { Story }
          </SingleStory>
        )) }
      </div>
    );
  }
}

class SingleStory extends React.Component {
  render() {
    return (
      <div
          className={styles.storyInGroup}
      >
        { this.props.children }
      </div>
    );
  }
}
