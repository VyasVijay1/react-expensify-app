import filterReducer from '../../reducers/filters'
import moment from 'moment'

test('should set up the default filter values', () => {
    const state = filterReducer(undefined, {typs:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined,{type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('should set sortby to date', () => {
    const currentState ={
        text:'',
        startDate:undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filterReducer(currentState, action) 
    expect(state.sortBy).toBe('date') 
})
test('should set text filter', () => {
    const text='This is text filter'
    const action = {type:'SET_TEXT_FILTER', text}
    const result = filterReducer(undefined,action)
    expect(result.text).toBe(text)
})

test('should set startDate filter', () => {
    const startDate = moment()
    const action = {type: 'SET_START_DATE', startDate}
    const result = filterReducer(undefined, action)
    expect(result.startDate).toEqual(startDate)
})

test('should set End date', () => {
    const endDate = moment()
    const action = {type:'SET_END_DATE', endDate}
    const result = filterReducer(undefined,action)
    expect(result.endDate).toEqual(endDate)
})