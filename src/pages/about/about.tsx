import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { Text } from '../../ui/text/text';
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
    <>
      <Text.LargeTitle
          alignment='centre'
      >
        hej 👋🏽
      </Text.LargeTitle>
      <Text.LargeTitle
          alignment='centre'
      >
        i&apos;m shevon
      </Text.LargeTitle>
      <Text.Small
          alignment='centre'
          keepDefaultMargins={true}
      >
        anyway here&apos;s my resume if you wanted to know what i&apos;ve been up to professionally:
      </Text.Small>
      <Resume/>
    </>
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};
