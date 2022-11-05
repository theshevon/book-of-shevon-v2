// disabling bc they're being used as decorators and eslint is still throwing a fit
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action, makeObservable, observable } from 'mobx';

import styles from '../../ui/metrics/breakpoints.module.css';

const BreakpointSmall = parseInt(styles.breakpointSmall, 10) || 576;
const BreakpointMedium = parseInt(styles.breakpointMedium, 10) || 768;
const BreakpointLarge = parseInt(styles.breakpointMedium, 10) || 992;
const BreakpointXLarge = parseInt(styles.breakpointXLarge, 10) || 1200;
const BreakpointXXLarge = parseInt(styles.BreakpointXXLarge, 10) || 1400;

export enum DisplaySize {
  X_SMALL = 0,
  SMALL = BreakpointSmall,
  MEDIUM = BreakpointMedium,
  LARGE = BreakpointLarge,
  X_LARGE = BreakpointXLarge,
  X_X_LARGE = BreakpointXXLarge,
}

export const getWindowSizeAsDisplaySize = (size: number): DisplaySize => {
  if (size < BreakpointSmall) {
    return DisplaySize.X_SMALL;
  } else if (size < BreakpointMedium) {
    return DisplaySize.SMALL;
  } else if (size < BreakpointLarge) {
    return DisplaySize.MEDIUM;
  } else if (size < BreakpointXLarge) {
    return DisplaySize.LARGE;
  } else if (size < BreakpointXXLarge) {
    return DisplaySize.X_LARGE;
  } else {
    return DisplaySize.X_X_LARGE;
  }
};

export const isSmallOrNarrower = (size: DisplaySize) => size <= DisplaySize.SMALL;
export const isSmallOrWider = (size: DisplaySize) => size >= DisplaySize.SMALL;
export const isMediumOrNarrower = (size: DisplaySize) => size <= DisplaySize.MEDIUM;
export const isMediumOrWider = (size: DisplaySize) => size >= DisplaySize.MEDIUM;
export const isLargeOrNarrower = (size: DisplaySize) => size <= DisplaySize.LARGE;
export const isLargeOrWider = (size: DisplaySize) => size >= DisplaySize.LARGE;

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
    },
  };
})();

export const DisplaySizeObserver = DisplaySizeObserverFactory.getInstance();
