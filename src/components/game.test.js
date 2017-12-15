import React from 'react'
import config from './testConfig'
import Game from './Game'
import { shallow } from 'enzyme'

describe('<Game />', () => {

    it('Renders without crashing', () => {
        shallow(<Game />);
    });
});