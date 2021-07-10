import React from 'react';

import { Profile } from './profile';
import { ProfileMessages as Messages } from './profile.messages';
import ProfilePic from './profile_pic.png';

export const createProfile = () => (
  <Profile
    name={Messages.ShevonMendis()}
    imgSrc={ProfilePic}
    imgAltTag={Messages.AltTag()}
  />
);
