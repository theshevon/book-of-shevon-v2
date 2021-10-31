import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { ToggleMenuButton } from 'ui/nav/hamburger_menu/buttons/toggle_menu_button/toggle_menu_button';

storiesOf('UI/Nav/HamburgerMenu/Buttons', module)
  .add('ToggleMenuButton', () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
      <ToggleMenuButton
          menuOpen={menuOpen}
          onClick={toggleMenu}
      />
    );
  });
