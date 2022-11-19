import React    from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { LocaleProvider } from './util/localisation/locale_provider';
import { ThemeProvider } from './util/theming/theme_provider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <App/>
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
