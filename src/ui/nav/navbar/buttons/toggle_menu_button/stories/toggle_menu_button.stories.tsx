import { StoryGroup } from 'util/storybook/stories';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { ToggleMenuButton } from 'ui/nav/navbar/buttons/toggle_menu_button/toggle_menu_button';

storiesOf('UI/Nav/Navbar/Buttons', module)
  .add('ToggleMenuButton', () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
      <StoryGroup>
        <ToggleMenuButton
            menuOpen={menuOpen}
            onClick={toggleMenu}
        />
      </StoryGroup>
    );
  });
