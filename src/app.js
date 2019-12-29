import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/store'
import {addExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'
//import './styles/styles.css' 

const store = configureStore();
// store.dispatch(addExpense({description: 'Water Bill', amount:4500, note: 'bill'}));
// store.dispatch(addExpense({description: 'Gas Bill'}));
//store.dispatch(setTextFilter('water'));

// setTimeout (() => {
//     store.dispatch(setTextFilter('bill'))
// },3000)

//const state = store.getState();
// console.log(state);
// const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpense)

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

// class OldSyntax {
//     constructor(){
//         this.name = 'Vijay'
//     }
//     getGreeting(){
        
//     }
// }
// const oldSyntax = new OldSyntax();
// class NewSyntax{
//     name = 'Jen';
//     getGreeting = () => {
//         return <div>"Hi. My name is ${this.name}"</div>
//     }
// }
// const newSyntax = new NewSyntax();
// const newGreeting = newSyntax.getGreeting()
// console.log(oldSyntax)
// //console.log(newGreeting())
