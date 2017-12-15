import React from 'react'
import config from '../testConfig'
import GuessForm from '../guess-form'
// import jest from 'jest'
import { shallow, mount } from 'enzyme'
// import { expect } from 'chai'

describe('<GuessForm />', () => {
    it('should render without crashing', () => {
        shallow(<GuessForm />)
    })

    it('should fire onSubmit callback when button is clicked', () => {
        const callback = jest.fn();
        //creates virtual browser to mount GuessForm component
        //creates onMakeGuess prop; its a cb to pass dummy data 
        //guessform sends data to guess section
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 12;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        //input will be a string from the client side
        expect(callback).toHaveBeenCalledWith(value.toString());
    })

})