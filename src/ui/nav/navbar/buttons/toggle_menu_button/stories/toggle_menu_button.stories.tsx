import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { StoryGroup } from '../../../../../storybook/stories';
import { ToggleMenuButton } from '../toggle_menu_button';

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
