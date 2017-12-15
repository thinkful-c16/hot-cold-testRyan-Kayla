import React from 'react'
import config from '../testConfig'
import GuessForm from '../guess-form'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<GuessForm />', () => {
    it('should render without crashing', () => {
        shallow(<GuessForm />)
    })
})