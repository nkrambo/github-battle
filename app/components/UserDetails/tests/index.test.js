
import React from 'react';
import { shallow } from 'enzyme';

import UserDetails from '../index';

describe('<UserDetails />', () => {
  const info = {
    avatar_url: '/a-link-to-a-avatar',
    blog: 'http://www.someblog',
    company: 'Tesla',
    followers: 100,
    following: 100,
    location: 'San Francisco',
    login: 'nkrambo',
    name: 'Nick Krambousanos',
    public_repos: 100,
  };

  it('should render a score prop', () => {
    const renderedComponent = shallow(
      <UserDetails score={42} info={info} />
    );
    expect(renderedComponent.prop('score')).toEqual(42);
  });
});
