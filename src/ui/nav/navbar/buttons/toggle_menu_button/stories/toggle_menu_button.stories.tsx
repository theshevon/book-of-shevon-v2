import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { ToggleMenuButton } from '../toggle_menu_button';

storiesOf('UI/Nav/Navbar/Buttons/ToggleMenuButton', module)
  .add('ToggleMenuButton', () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
      <ToggleMenuButton
          menuOpen={menuOpen}
          onClick={toggleMenu}
          activeRoute='#'
      />
    );
  });
