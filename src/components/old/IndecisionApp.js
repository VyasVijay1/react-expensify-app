import React from 'react'
import AddOption from './AddOption.js'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
  state = {
    options: [],//['Thing one', 'Thing two', 'Thing three']
    selectedOption: undefined
  }
    
    handleDeleteOptions = () =>{
      this.setState(() => ({options: []}))     
    }
    handleDeleteOption = (optionToRemove) =>{
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }))    
    }
    handleClearSelectedOption = () =>{
      this.setState(() => ({ selectedOption: undefined}))
    }
    handlePick = () =>{
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      this.setState(() => ({
        selectedOption: option
      })

      )
    }
    handleAddOption = (option) =>{
      if(!option){
        return 'Enter valid to add item'
      } else if(this.state.options.indexOf(option) > -1){
        return 'This option already exist'
      }
  
      this.setState((prevState) => (
        {options: prevState.options.concat([option])}
        ))
      
    }

    componentDidMount(){
      try{
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if(options)
        {
        this.setState(() => ({ options}))}
      }
      catch(e)
      {}  
    }
    componentDidUpdate(prevProps,prevState){
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
      }    
    }
    componentWillUnmount(){console.log('This is componentwillunmount')}
   
    render(){
      console.log('thisis render')
      const title="!Indecision";
      const subtitle = 'Put you life in hands of computer.'
     
      return(
        <div>
    <Header title={title} subtitle={subtitle}/>
    <Action 
      hasOptions ={this.state.options.length > 0}
      handlePick = {this.handlePick}
      />
    <Options options={this.state.options}
    handleDeleteOptions={this.handleDeleteOptions} 
    handleDeleteOption={this.handleDeleteOption} 
    />  
    <AddOption 
    handleAddOption={this.handleAddOption}
    />
    <OptionModal
    selectedOption = {this.state.selectedOption}
    handleClearSelectedOption = {this.handleClearSelectedOption}
    ></OptionModal>
        </div>
      )
    }
  }