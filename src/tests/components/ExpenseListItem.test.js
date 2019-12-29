import React from 'react'
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import ExpenseListItem from '../../components/ExpenseListItem'

test('should render the expenselist item of the id', () => {
    const wrapper = shallow(<ExpenseListItem  {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})