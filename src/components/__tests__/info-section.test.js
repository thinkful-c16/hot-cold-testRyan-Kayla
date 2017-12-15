import React from 'react'
import config from '../testConfig'
import InfoSection from '../info-section'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<InfoSection />', ()=>{
    it('Renders without crashing', () => {
        shallow(<InfoSection />);
    });
})