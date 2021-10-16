import { observable, action, makeObservable } from 'mobx';

import styles from './../ui/metrics/metrics.module.css';

export type Breakpoint = 'small' | 'medium' | 'large';

const BreakpointSmall = parseInt(styles.breakpointSmall, 10) || 576;
const BreakpointMedium = parseInt(styles.breakpointMedium, 10) || 768;

const getSizeAsBreakpoint = (size: number) => {
  if (size <= BreakpointSmall) {
    return 'small';
  } else if (size <= BreakpointMedium) {
    return 'medium';
  }
  return 'large';
};

const getWindowSize = () => {
  return getSizeAsBreakpoint(window.innerWidth);
};

const DisplaySizeObserverFactory = (() => {
  let instance: DisplaySizeObserver;

  class DisplaySizeObserver {
    @observable
    size: Breakpoint = getWindowSize();

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
