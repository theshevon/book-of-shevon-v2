import { AppMessages as Messages } from 'app.messages';

export const useDocumentHeader = (title: string, favIconHref?: string) => {
  document.title = title + ' - ' + Messages.bookOfShevon();
  if (favIconHref) {
    const favIcon = document.getElementById('favicon') as HTMLAnchorElement;
    if (favIcon) {
      favIcon.href = favIconHref;
    }
  }
};
