import React, { useEffect } from 'react';
import { updateDocumentHeader } from '../../util/title_manager';
import { SnekMessages as Messages } from './snek.messages';

export const Snek = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle(), { type: 'emoji', src: '🐍' });
  }, []);

  return (
    <></>
  );
};
