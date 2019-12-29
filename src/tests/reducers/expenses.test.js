import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const result = expensesReducer(undefined,{type:'@@INIT'})
    expect(result).toEqual([])
})

test('should set to remove the expense', () => {
    const action ={
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const result = expensesReducer(expenses,action)
    expect(result).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense if id is not found', () => {
    const action ={
        type:'REMOVE_EXPENSE',
        id: -1
    }
    const result = expensesReducer(expenses,action)
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]])
})
test('should add an expense', () => {
    const expense = {
        id: '4',
        amount: 29500,
        description:'',
        note:'',
        createdAt: 20000    
    }
    const action = {type: 'ADD_EXPENSE', expense}
    const result = expensesReducer(expenses,action)
    expect(result).toEqual([...expenses,expense])
})

test('should edit expense', () => {
    const amount= 35000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const result = expensesReducer(expenses,action)
    expect(result[1].amount).toBe(amount)
})

test('should not edit expense if id not found', () => {
    const amount= 35000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const result = expensesReducer(expenses,action)
    expect(result).toEqual(expenses)
})