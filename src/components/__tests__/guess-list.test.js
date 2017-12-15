import React from 'react'
import config from '../testConfig'
import GuessList from '../guess-list'
import { shallow, mount } from 'enzyme'
// import { expect } from 'chai'

describe('<GuessList />', () => {
    it('should render without crashing', () => {
        shallow(<GuessList guesses={[]} />)
    })
    it('should add a guess to the guess list', () => {
        const guessValues = [2,4,5]
        const wrapper = mount(<GuessList guesses={guessValues} />)
        const listItem = wrapper.find('li');
        expect(listItem.length).toEqual(guessValues.length)
        guessValues.forEach( (value, index) => {
            expect(listItem.at(index).text()).toEqual(value.toString())
        })
        expect(listItem.at(0).text()).toEqual(guessValues[0].toString());
    })
})