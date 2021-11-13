import {
  DisplaySize,
  getWindowSizeAsDisplaySize,
  isLargeOrNarrower,
  isLargeOrWider,
  isMediumOrNarrower,
  isMediumOrWider,
  isSmallOrNarrower,
  isSmallOrWider,
} from '../display_size_observer';

describe('getWindowSizeAsDisplaySize()', () => {
  it('Returns DisplaySize.X_SMALL when window size = 0', () => {
    expect(getWindowSizeAsDisplaySize(0)).toBe(DisplaySize.X_SMALL);
  });

  it('Returns DisplaySize.SMALL when window size = DisplaySize.SMALL\'s value', () => {
    expect(getWindowSizeAsDisplaySize(DisplaySize.SMALL.valueOf())).toBe(DisplaySize.SMALL);
  });

  it('Returns DisplaySize.MEDIUM when window size = DisplaySize.MEDIUM\'s value', () => {
    expect(getWindowSizeAsDisplaySize(DisplaySize.MEDIUM.valueOf())).toBe(DisplaySize.MEDIUM);
  });

  it('Returns DisplaySize.LARGE when window size = DisplaySize.LARGE\'s value', () => {
    expect(getWindowSizeAsDisplaySize(DisplaySize.LARGE.valueOf())).toBe(DisplaySize.LARGE);
  });

  it('Returns DisplaySize.X_LARGE when window size = DisplaySize.X_LARGE\'s value', () => {
    expect(getWindowSizeAsDisplaySize(DisplaySize.X_LARGE.valueOf())).toBe(DisplaySize.X_LARGE);
  });

  it('Returns DisplaySize.X_X_LARGE when window size = DisplaySize.X_X_LARGE\'s value', () => {
    expect(getWindowSizeAsDisplaySize(DisplaySize.X_X_LARGE.valueOf())).toBe(DisplaySize.X_X_LARGE);
  });
});

describe('isSmallOrNarrower()', () => {
  it('Returns `true` when the display size < DisplaySize.SMALL', () => {
    expect(isSmallOrNarrower(DisplaySize.X_SMALL)).toBe(true);
  });

  it('Returns `true` when the display size === DisplaySize.SMALL', () => {
    expect(isSmallOrNarrower(DisplaySize.SMALL)).toBe(true);
  });

  it('Returns `false` when the display size > DisplaySize.SMALL', () => {
    expect(isSmallOrNarrower(DisplaySize.MEDIUM)).toBe(false);
  });
});

describe('isSmallOrWider()', () => {
  it('Returns `false` when the display size < DisplaySize.SMALL', () => {
    expect(isSmallOrWider(DisplaySize.X_SMALL)).toBe(false);
  });

  it('Returns `true` when the display size === DisplaySize.SMALL', () => {
    expect(isSmallOrWider(DisplaySize.SMALL)).toBe(true);
  });

  it('Returns `true` when the display size > DisplaySize.SMALL', () => {
    expect(isSmallOrWider(DisplaySize.MEDIUM)).toBe(true);
  });
});

describe('isMediumnOrNarrower()', () => {
  it('Returns `true` when the display size < DisplaySize.MEDIUM', () => {
    expect(isMediumOrNarrower(DisplaySize.SMALL)).toBe(true);
  });

  it('Returns `true` when the display size === DisplaySize.MEDIUM', () => {
    expect(isMediumOrNarrower(DisplaySize.MEDIUM)).toBe(true);
  });

  it('Returns `false` when the display size > DisplaySize.MEDIUM', () => {
    expect(isMediumOrNarrower(DisplaySize.LARGE)).toBe(false);
  });
});

describe('isMediumOrWider()', () => {
  it('Returns `false` when the display size < DisplaySize.MEDIUM', () => {
    expect(isMediumOrWider(DisplaySize.SMALL)).toBe(false);
  });

  it('Returns `true` when the display size === DisplaySize.MEDIUM', () => {
    expect(isMediumOrWider(DisplaySize.MEDIUM)).toBe(true);
  });

  it('Returns `true` when the display size > DisplaySize.Mediumn', () => {
    expect(isMediumOrWider(DisplaySize.LARGE)).toBe(true);
  });
});

describe('isLargeOrNarrower()', () => {
  it('Returns `true` when the display size < DisplaySize.LARGE', () => {
    expect(isLargeOrNarrower(DisplaySize.MEDIUM)).toBe(true);
  });

  it('Returns `true` when the display size === DisplaySize.LARGE', () => {
    expect(isLargeOrNarrower(DisplaySize.LARGE)).toBe(true);
  });

  it('Returns `false` when the display size > DisplaySize.LARGE', () => {
    expect(isLargeOrNarrower(DisplaySize.X_X_LARGE)).toBe(false);
  });
});

describe('isLargeOrWider()', () => {
  it('Returns `false` when the display size < DisplaySize.LARGE', () => {
    expect(isLargeOrWider(DisplaySize.MEDIUM)).toBe(false);
  });

  it('Returns `true` when the display size === DisplaySize.LARGE', () => {
    expect(isLargeOrWider(DisplaySize.LARGE)).toBe(true);
  });

  it('Returns `true` when the display size > DisplaySize.LARGE', () => {
    expect(isLargeOrWider(DisplaySize.X_LARGE)).toBe(true);
  });
});
