import React from 'react'
import config from '../testConfig'
import Feedback from '../feedback'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<Feedback />', () => {
    it('should render without crashing', () => {
        shallow(<Feedback />)
    })
})
