import React from 'react'
import ReactDOM from 'react-dom'
export default class AddOption extends React.Component{
  state = {
    error: undefined
  }
    constructor(props) {
      super(props)
      this.handleAddOption = this.handleAddOption.bind(this)
     
    }
    handleAddOption(e){
      e.preventDefault();
      console.log('testing');
      const option = e.target.elements.txtoption.value.trim()
      console.log(e.target.elements.txtoption.value)
     const error = this.props.handleAddOption(option)
     this.setState(() => {
       return {
         error
       }
     })
     if(!error)
     {e.target.elements.txtoption.value = ''}
    }
    render(){
      return(
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="txtoption"/>
            <button type="submit">Add Option</button>
          </form>
        </div>
      )
    }  
  }
  
  