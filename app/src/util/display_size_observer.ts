import { observable, action, makeObservable } from 'mobx';

import styles from './../ui/metrics/metrics.module.css';

export type DisplaySize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

// TODO: add functions to to determine boundaries, eg. smallOrWider

const BreakpointSmall = parseInt(styles.breakpointSmall, 10) || 576;
const BreakpointMedium = parseInt(styles.breakpointMedium, 10) || 768;
const BreakpointLarge = parseInt(styles.breakpointMedium, 10) || 992;
const BreakpointXLarge = parseInt(styles.BreakpointXLarge, 10) || 1200;

const getWindowSizeAsDisplaySize = (size: number) => {
  if (size < BreakpointSmall) {
    return 'xsmall';
  } else if (size < BreakpointMedium) {
    return 'small';
  } else if (size < BreakpointLarge) {
    return 'medium';
  } else if (size < BreakpointXLarge) {
    return 'xlarge'
  } else {
    return 'xxlarge';
  }
};

const getWindowSize = () => {
  return getWindowSizeAsDisplaySize(window.innerWidth);
};

const DisplaySizeObserverFactory = (() => {
  let instance: DisplaySizeObserver;

  class DisplaySizeObserver {
    @observable
    size: DisplaySize = getWindowSize();

    constructor() {
      makeObservable(this);
      window.addEventListener('resize', this.handleResize);
    }

    @action
    private handleResize = () => {
      const newSize = getWindowSize();
      if (this.size !== newSize) {
        this.size = newSize;
      }
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = new DisplaySizeObserver();
      }
      return instance;
    }
  };
})();

export const DisplaySizeObserver = DisplaySizeObserverFactory.getInstance();
