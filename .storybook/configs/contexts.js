import { Theme, ThemeProvider, useThemeContext } from '../../src/util/theming/theme_provider';

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
    <>
      { children }
    </>
  );
};

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
          theme: Theme.BASIC 
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
];
