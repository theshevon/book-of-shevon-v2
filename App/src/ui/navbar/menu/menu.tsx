import React from 'react';
import classNames from 'classnames';

import styles from './menu.module.css';

type Link = {
  label: string, 
  route: string,
  active: boolean,
}

type MenuProps = {
  links: Link[],
}

export const Menu = ({
  links,
}: MenuProps) => (
  <ul
      className={styles.menu}    
  >
    { links.map(link => (
      <li
          key={link.label}
      >
        <a
            href={link.route}
            className={classNames(styles.link, {
              [styles.active]: link.active,
            })}
        >
            { link.label }
        </a>
      </li>
    ))}
  </ul>
);
