import React from 'react'
import config from '../testConfig'
import AuralStatus from '../aural-status'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<AuralStatus />', () => {
    it('should render without crashing', () => {
        shallow(<AuralStatus />)
    })
})
