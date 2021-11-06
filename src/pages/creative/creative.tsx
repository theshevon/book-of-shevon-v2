import React, { useEffect } from 'react';
import { updateDocumentHeader } from '../../util/title_manager';
import { CreativeMessages as Messages } from './creative.messages';

import styles from './creative.module.css';

export const Creative = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle());
  }, []);

  return (
    <div>
      Creative page
    </div>
  );
};
