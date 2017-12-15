import React from 'react'
import config from '../testConfig'
import Header from '../header'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<Header />', ()=>{
    it('Renders without crashing', () => {
        shallow(<Header />);
    });
})