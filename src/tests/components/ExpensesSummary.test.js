import {ExpensesSummary} from '../../components/ExpensesSummary'
import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'

test('should render Expense summary with no expense', () => {
    const wrapper = shallow(<ExpensesSummary/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render Expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render Expense summary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={23512340987}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})