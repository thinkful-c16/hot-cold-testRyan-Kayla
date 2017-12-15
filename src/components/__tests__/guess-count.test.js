import React from 'react'
import config from '../testConfig'
import GuessCount from '../guess-count'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<GuessCount />', () => {
    it('should render without crashing', () => {
        shallow(<GuessCount />)
    })
})