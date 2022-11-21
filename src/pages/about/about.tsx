import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { useThemeContext } from '../../util/theming/theme_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { AboutMessages as Messages } from './about.messages';
import styles from './about.module.css';
import { Resume } from './resume/resume';

export const About = () => {

  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle[locale], { type: 'emoji', src: '👀' });
  }, [locale]);

  const { theme, appearance } = useThemeContext();

  const Content = () => (
    <Resume/>
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};
