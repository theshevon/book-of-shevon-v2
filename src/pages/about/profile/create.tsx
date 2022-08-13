import React from 'react';
import { Profile } from './profile';
import profilePic from './profile.jpeg';
import { ProfileMessages as Messages } from './profile.messages';

export const createProfile = () => (
  <Profile
      name={Messages.ShevonMendis()}
      imgSrc={profilePic}
      imgAltTag={Messages.AltTag()}
  />
);
