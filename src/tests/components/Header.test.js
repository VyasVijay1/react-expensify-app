import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'
import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'

test('should render ', () => {
 const wrapper = shallow(<Header/>)
 expect(toJSON(wrapper)).toMatchSnapshot()
 
    //const renderer = new ReactShallowRenderer();
 //renderer.render(<Header/>)
//  expect(renderer.getRenderOutput()).toMatchSnapshot()   
})