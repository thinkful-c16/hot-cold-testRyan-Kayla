import React from 'react'
import config from '../testConfig'
import GuessSection from '../guess-section'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<GuessSection />', () => {
    it('should render without crashing', () => {
        shallow(<GuessSection />)
    })
})