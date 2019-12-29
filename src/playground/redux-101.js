import { createStore } from 'redux'

//action generator
const incrementCount = ({incrementBy= 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
})

const reset = () => ({
    type: 'RESET'
})
const setCount = ({count=0} = {}) => ({
    type: 'SET',
    count
})

const countReducer = (state = {count:1},action) => {
    switch(action.type){
       
        case 'INCREMENT':
               // const incrementBy = typeof action.incrementBy == 'number'? action.incrementBy:1
        return {
            count: state.count + action.incrementBy
        }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy == 'number' ? action.decrementBy:1
            return{
                count: state.count- action.decrementBy
            }
        case 'RESET':
            return {
                count:0
            }
            case 'SET':
            return {
                count: action.count
            }
        default:
            {
                return state
            }
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 5
// })
store.dispatch(incrementCount())
console.log(store.getState())

store.dispatch(incrementCount({incrementBy:5}))

// store.dispatch({
//     type:'INCREMENT'
// })
console.log(store.getState())

store.dispatch(decrementCount())
console.log(store.getState())
store.dispatch(decrementCount({decrementBy:10}))
console.log(store.getState())
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy: 10
// })


store.dispatch(reset())
// store.dispatch({
//     type:'RESET'
// })
console.log(store.getState())
store.dispatch(setCount({count:101}))
// store.dispatch({
//     type:'SET',
//     count:101
// })





















// import {createStore} from 'redux'

// const incrementcount = ( { incrementBy =  1} = {}) => ({
//     type:'INCREMENT',
//     incrementBy
// })
// const decrementcount = ({decrementBy = 1} = {}) => ({
//     type:'DECREMENT',
//     decrementBy
// })
// const reset = () => ({
//     type:'RESET'
// })
// const countReducer = (state = {count:0}, action) => {
//     switch(action.type){
//         case 'INCREMENT':
//          return{
//             count: state.count + action.incrementBy
//         }
//         case 'RESET':
//         return{
//             count: 0
//         }
//         case 'DECREMENT':
//                 return{
//                     count: state.count - action.decrementBy
//                 }
//         case 'SET':
//             return{
//                 count: action.count
//             }
//         default:
//             return state
//     }
// }
// const store = createStore(countReducer) 


// const unsubscribe = store.subscribe(() => {
// console.log('subscribe: '  + store.getState())
// })
// //console.log(store.getState())
// //dispatchers
// store.dispatch(incrementcount({ incrementBy: 5 }))
// console.log(store.getState())
// store.dispatch(incrementcount())
// console.log(store.getState())
// store.dispatch({
//     type:'RESET'
// })
// console.log(store.getState())
// store.dispatch(decrementcount({ decrementBy: 10 }))
// console.log(store.getState())
// store.dispatch(reset())
// console.log(store.getState())