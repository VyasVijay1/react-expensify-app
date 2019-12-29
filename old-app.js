import React from 'react'
import ReactDOM from 'react-dom'

const template = <p>This is JSX from Webpack</p>//React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'))


// import validator from 'validator'
// console.log(validator.isEmail('test@test.com'))
// import isSenior, {isAdult, canDrink} from './util.js'
// console.log(isAdult(18))
// console.log(canDrink(20))
// console.log(isSenior(64))

//import subtract, {square, add} from './util.js'
// console.log('test')
// console.log(square(4))
// console.log(add(4,5))
// console.log(subtract(4,2))
// class IndecisionApp extends React.Component{
//   constructor(props){
//    console.log('This is constructor')
//     super(props)
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
//     this.handlePick = this.handlePick.bind(this)
//     this.handleAddOption = this.handleAddOption.bind(this)
//     this.handleDeleteOption = this.handleDeleteOption.bind(this)
//     this.state = {
//       options: []//['Thing one', 'Thing two', 'Thing three']
//     }
//   }
//   componentDidMount(){
//     try{
//       const json = localStorage.getItem('options')
//       const options = JSON.parse(json)
//       if(options)
//       {
//       this.setState(() => ({ options}))}
//     }
//     catch(e)
//     {}  
//   }
//   componentDidUpdate(prevProps,prevState){
//     if(prevState.options.length !== this.state.options.length){
//       const json = JSON.stringify(this.state.options)
//       localStorage.setItem('options', json)
//     }    
//   }
//   componentWillUnmount(){console.log('This is componentwillunmount')}
//   handleDeleteOptions(){
//     this.setState(() => ({options: []}))     
//   }
//   handleDeleteOption(optionToRemove){
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => optionToRemove !== option)
//     }))    
//   }
//   handlePick(){
//     const randomNum = Math.floor(Math.random() * this.state.options.length)
//     const option = this.state.options[randomNum]
//     alert(option);
//   }
//   handleAddOption(option){
//     if(!option){
//       return 'Enter valid to add item'
//     } else if(this.state.options.indexOf(option) > -1){
//       return 'This option already exist'
//     }

//     this.setState((prevState) => (
//       {options: prevState.options.concat([option])}
//       ))
    
//   }
//   render(){
//     console.log('thisis render')
//     const title="!Indecision";
//     const subtitle = 'Put you life in hands of computer.'
   
//     return(
//       <div>
//   <Header title={title} subtitle={subtitle}/>
//   <Action 
//     hasOptions ={this.state.options.length > 0}
//     handlePick = {this.handlePick}
//     />
//   <Options options={this.state.options}
//   handleDeleteOptions={this.handleDeleteOptions} 
//   handleDeleteOption={this.handleDeleteOption} 
//   />  
//   <AddOption 
//   handleAddOption={this.handleAddOption}
//   />
//       </div>
//     )
//   }
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h1>{props.subtitle}</h1>
//     </div>
//   )
// }

// const Action = (props) =>{
//   return(
//     <div>
//       <button 
//       disabled={!props.hasOptions}
//       onClick={props.handlePick}
//       >What you want me to do?</button>
//     </div>
//   )
// }

// const Options = (props) => {
//   return(
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button><br/>
//       Options Component here<br></br>
//       {}props.options.length === 0 && <p>Please add an option</p>
//       {
//       props.options.map((option) => 
//       <Option 
//       key={option} optionText={option} 
//       handleDeleteOption = {props.handleDeleteOption}
//       />)
//       }      
//     </div>
//   )

// }

// const Option = (props) => {
//   return(
//     <div>
//      {props.optionText}
//      <button
//      onClick ={(e) => {
//        props.handleDeleteOption(props.optionText)
//      }

//      }
//      >remove</button>
//     </div>
//   )
// }

// //1.set up the form with the text
// //2. wire up onsubmit
// //3. handleAddOption -> fetch the value types -> if value, then alert
// class AddOption extends React.Component{
//   constructor(props) {
//     super(props)
//     this.handleAddOption = this.handleAddOption.bind(this)
//     this.state = {
//       error: undefined
//     }
//   }
//   handleAddOption(e){
//     e.preventDefault();
//     const option = e.target.elements.txtoption.value.trim()
//     console.log(e.target.elements.txtoption.value)
//    const error = this.props.handleAddOption(option)
//    this.setState(() => {
//      return {
//        error
//      }
//    })
//    if(!error)
//    {e.target.elements.txtoption.value = ''}
//   }
//   render(){
//     return(
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="txtoption"/>
//           <button type="submit">Add Option</button>
//         </form>
//       </div>
//     )
//   }  
// }

// ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
