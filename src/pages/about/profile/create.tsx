import React from 'react';
import ProfilePic from '../../../util/storybook/test_images/test_img_2.png';
import { Profile } from './profile';
import { ProfileMessages as Messages } from './profile.messages';

export const createProfile = () => (
  <Profile
      name={Messages.ShevonMendis()}
      imgSrc={ProfilePic}
      imgAltTag={Messages.AltTag()}
  />
);
