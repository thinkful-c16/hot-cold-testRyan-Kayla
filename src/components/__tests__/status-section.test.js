import React from 'react'
import config from '../testConfig'
import StatusSection from '../status-section'
import { shallow } from 'enzyme'
import { expect } from 'chai'


describe('<StatusSection />', ()=>{
    it('Renders without crashing', () => {
        shallow(<StatusSection guesses={[]} />);
    });
})