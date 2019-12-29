class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleClickone = this.handleClickone.bind(this)
        this.handleClickTwo = this.handleClickTwo.bind(this)
        this.handleClickThree = this.handleClickThree.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
      const stringcount = localStorage.getItem('count')
      const count = parseInt(stringcount,10)
      if(!isNaN(count)) {
            this.setState(() => ({ count }))
      }  
    }
    componentDidUpdate(prevProps, prevState){
        //console.log('t: ' + prevState.count)
        if(prevState.count !== this.state.count)
        {
            //console.log('2')
            localStorage.setItem('count', this.state.count)
        }
    }
    handleClickone(){
        this.setState((prevState) =>{
            return{
                count: prevState.count + 1
            }
        }
        )        
    }
    handleClickTwo(){
        this.setState((prevState) =>{
            return{
                count: prevState.count -1
            }
        })
    }
    handleClickThree(){
       this.setState(() => {return {count:0}})
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleClickone}>+1</button>
                <button onClick={this.handleClickTwo}>-1</button>
                <button onClick={this.handleClickThree}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter count={-10}/>,document.getElementById('app'))














// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleAddOne = this.handleAddOne.bind(this)
//         this.handleAddTwo = this.handleAddTwo.bind(this)
//         this.handleAddThree = this.handleAddThree.bind(this)
//         this.state = {
//             count: 0
//         }
//     }
// handleAddOne(){
//     this.setState((prevState) => {
//         return {
//             count: prevState.count + 1
//         }        
//     })
//     console.log('Handle one clicked: ' + this.state.count)
// }
// handleAddTwo(){
//     this.setState((prevState) => {
//         return {           
//                 count: prevState.count -1  
//         }         
//     }

//     )
//     console.log('prevState.count: ' + this.count)
// }
// handleAddThree(){
//     this.setState(() => {
//             return {
//                count:0
//             }
//         }
//         )
//     console.log('Handle Three clicked')
// }
//     render(){
//         return(
//             <div>
//                 <h1>Counter: {this.state.count} </h1>
//                 <button onClick={this.handleAddOne}>+1</button>
//                 <button onClick={this.handleAddTwo}>-1</button>
//                 <button onClick={this.handleAddThree}>reset</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Counter/>, document.getElementById('app'))