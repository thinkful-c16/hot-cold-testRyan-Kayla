import React from 'react'
import config from '../testConfig'
import Game from '../Game'
import Header from '../header'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<Game />', () => {

    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('should have make your guess in state on load', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state('feedback')).to.equal('Make your guess!');
    })
});