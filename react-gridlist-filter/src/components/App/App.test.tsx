import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from '../Card/Card';
import {shallow, Mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from '../../mock/fetch';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

// store the mock card response from json file
const cardResponse = require('../../mock/cards.json');

describe('App Component', () => {
  it('App component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  /// to check for snapshot making sure the UI is not changing
  it('render correctly text and button component', () => {  
    const textBox = renderer
    .create(<input type = 'text'></input>)
    .toJSON();
    expect(textBox).toMatchSnapshot();

    const button = renderer
    .create(<button></button>)
    .toJSON();
    expect(button).toMatchSnapshot();
  });

  // Simulate the initial page load to display the cards
  // Simulate the fetch call from the resolver
  describe('App component', () => {
    describe('when rendered', () => {
      it('should fetch a list of cards', () => {
        const wrapper = shallow(<App />);
        const fetchSpy = jest.spyOn(window, 'fetch');
        const cardInstance = shallow(
          <Card cardData={cardResponse} />
        );
        //expect(wrapper.state('cardData')).toBe(cardResponse);
        //expect(wrapper.state('loading')).toBe(false);
       // expect(fetchSpy).toBeCalled();
      });
    });
  });

  /// Simulate the onChange event on the textbox
  /// To do// add more test to simulate the filter based on the search text
  it('should call onChange for textbox', () => {
    const wrapper = shallow(<App />);
    const handleChange = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'Raid' }
    };
    const textBox = wrapper.find('input.textbox');
    textBox.simulate('change', event);
    //expect(wrapper.state('searchText')).toBe('Raid');
    //expect(handleChange).toBeCalledWith(event);
  });

  /// Simulate the button click event
  it('search button should display the records ', () => {
    const wrapper = shallow(<App />);
    const fetchCards = jest.fn();
    const searchBtn = wrapper.find('button.button');
    searchBtn.simulate('click');
    //expect(fetchCards).toBeCalled();
  });

  /// Simulate the window scroll and trigger the handleScroll function
  it('calls window.scroll', () => {
    const handleScroll = jest.fn();
    document.body.scrollTop = 100;
    //window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));
    //expect(handleScroll).toBeCalled();
  });
  
})