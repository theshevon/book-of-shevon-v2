type FavIcon = {
  type: 'img' | 'emoji',
  src: string,
};

const getEmojiFavIconHref = (emoji: string) => {
  return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`;
};

export const updateDocumentHeader = (title: string, favIcon?: FavIcon) => {
  document.title = title;
  if (favIcon) {
    const favIconElement = document.getElementById('favIcon') as HTMLAnchorElement;
    if (favIconElement) {
      const href = favIcon.type === 'img' ? favIcon.src : getEmojiFavIconHref(favIcon.src);
      favIconElement.href = href;
    }
  }
};
