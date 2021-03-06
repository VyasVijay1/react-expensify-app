import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/store'
import {startSetExpenses} from './actions/expenses'
import {login, logout} from './actions/auth'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'
import './styles/style.css' 
import { firebase } from './firebase/firebase'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
  if(user)
  {
   store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard')
      }
    });
  }
  else
  {
    store.dispatch(logout())
    renderApp();
    history.push('/')
  }
})

// import React from 'react'
// import ReactDOM from 'react-dom'
// import AppRouter from './routers/AppRouter'
// import configureStore from './store/store'
// import {startSetExpenses} from './actions/expenses'
// import {addExpense} from './actions/expenses'
// import { setTextFilter } from './actions/filters'
// import getVisibleExpenses from './selectors/expenses'
// import {Provider} from 'react-redux'
// import 'react-dates/lib/css/_datepicker.css'
// import './styles/style.css' 
// import './firebase/firebase'


// const store = configureStore();
// // store.dispatch(addExpense({description: 'Water Bill', amount:4500, note: 'bill'}));
// // store.dispatch(addExpense({description: 'Gas Bill'}));
// //store.dispatch(setTextFilter('water'));

// // setTimeout (() => {
// //     store.dispatch(setTextFilter('bill'))
// // },3000)

// //const state = store.getState();
// // console.log(state);
// // const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
// // console.log(visibleExpense)

// const jsx =(
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// )

// ReactDOM.render(<p>Loding...</p>, document.getElementById('app'));
// store.dispatch(startSetExpenses()).then(() => {
//     ReactDOM.render(jsx, document.getElementById('app'));
// })


// // class OldSyntax {
// //     constructor(){
// //         this.name = 'Vijay'
// //     }
// //     getGreeting(){
        
// //     }
// // }
// // const oldSyntax = new OldSyntax();
// // class NewSyntax{
// //     name = 'Jen';
// //     getGreeting = () => {
// //         return <div>"Hi. My name is ${this.name}"</div>
// //     }
// // }
// // const newSyntax = new NewSyntax();
// // const newGreeting = newSyntax.getGreeting()
// // console.log(oldSyntax)
// // //console.log(newGreeting())
