import React from 'react';
import { useDocumentHeader } from '../../util/hooks';
import { CreativeMessages as Messages } from './creative.messages';

import styles from './creative.module.css';

export const Creative = () => {

  useDocumentHeader(Messages.pageTitle());

  return (
    <div>
      Creative page
    </div>
  );
};
