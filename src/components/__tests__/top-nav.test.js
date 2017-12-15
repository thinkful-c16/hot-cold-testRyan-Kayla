import React from 'react'
import config from '../testConfig'
import TopNav from '../top-nav'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<TopNav />', ()=>{
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
})