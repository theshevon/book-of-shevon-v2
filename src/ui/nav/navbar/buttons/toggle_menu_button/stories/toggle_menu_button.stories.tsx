import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { StoryWrapper } from '../../../../../../util/storybook/story_wrapper';
import { ToggleMenuButton } from '../toggle_menu_button';

storiesOf('UI/Nav/Navbar/Buttons/ToggleMenuButton', module)
  .add('ToggleMenuButton', () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
      <StoryWrapper>
        <ToggleMenuButton
            menuOpen={menuOpen}
            onClick={toggleMenu}
        />
      </StoryWrapper>
    );
  });
