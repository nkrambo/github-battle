
import React from 'react';
import { shallow } from 'enzyme';

import ConfirmBattle from '../index';

describe('<ConfirmBattle />', () => {
  it('should render a loading component if isLoading is true', () => {
    const renderedComponent = shallow(
      <ConfirmBattle
        isLoading
        onInitiateBattle={() => {}}
        playersInfo={[]}
      />
    );
    expect(renderedComponent.type()).toEqual('div');
  });
});
