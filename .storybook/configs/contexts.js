import { Appearance, Theme, ThemeProvider, useThemeContext } from '../../src/util/theming/theme_provider';
import { Locale, LocaleProvider } from '../../src/util/localisation/locale_provider';

const STORY_STYLES = {
  width: '100%',
  height: '100%',
  padding: '25px'
};

const ThemeProviderOuterWrapper = ({ theme, children } = props) => (
  <ThemeProvider>
    <ThemeProviderInnerWrapper 
        theme={theme}
    >
      { children }
    </ThemeProviderInnerWrapper>
  </ThemeProvider>
);

const ThemeProviderInnerWrapper = ({ theme, children } = props) => {
  const { setTheme } = useThemeContext();
  setTheme(theme);
  return (
    <div styles={STORY_STYLES}>
      { children }
    </div>
  );
};

const AppearanceProviderOuterWrapper = ({ appearance, children } = props) => (
  <ThemeProvider>
    <AppearanceProviderInnerWrapper 
        appearance={appearance}
    >
      { children }
    </AppearanceProviderInnerWrapper>
  </ThemeProvider>
);

const AppearanceProviderInnerWrapper = ({ appearance, children } = props) => {
  const { setAppearance } = useThemeContext();
  setAppearance(appearance);
  const backgroundColor = appearance === Appearance.DARK ? 'hsl(0, 0%, 13%)' : 'white';
  return (
    <div style={{ ...STORY_STYLES, backgroundColor }}>
      { children }
    </div>
  );
};

const LocaleProviderComponent = ({ children } = props) => {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  )
}

export const contexts = [
  {
    icon: 'box',
    title: 'Theme',
    components: [
      ThemeProviderOuterWrapper,
    ],
    params: [
      {
        name: 'Basic',
        props: {
          theme: Theme.BASIC,
        }, 
        default: true,
      },
      {
        name: '8 Bit',
        props: {
          theme: Theme.EIGHT_BIT,
        }
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
  {
    icon: 'box',
    title: 'Appearance',
    components: [
      AppearanceProviderOuterWrapper,
    ],
    params: [
      {
        name: 'Light',
        props: {
          appearance: Appearance.LIGHT, 
        }, 
        default: true,
      },
      {
        name: 'Dark',
        props: {
          appearance: Appearance.DARK,
        }
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
  {
    icon: 'box',
    title: 'Locale',
    components: [
      LocaleProviderComponent,
    ],
    params: [
      {
        name: 'English',
        default: true,
      },
    ],
    options: {
      disable: true,
    },
  }
];
