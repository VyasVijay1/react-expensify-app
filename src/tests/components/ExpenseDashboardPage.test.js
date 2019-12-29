import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

test('should render ExpenseDashBoardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})