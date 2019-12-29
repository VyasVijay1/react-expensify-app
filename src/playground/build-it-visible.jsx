class VisbilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            isVisibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {isVisibility: !prevState.isVisibility}
        })        
    }
    render()
            {
            return(
                    <div>
                        <button onClick={this.handleToggleVisibility}>
                             {this.state.isVisibility? "Hide Details" : "Show Details"}    
                         </button>
                        {this.state.isVisibility && (
                            <div>
                                <p>
                                    Hey. These are some details you can now see!
                                </p>
                            </div>

                        )}
                    </div>
                    
                   )
            }
}
ReactDOM.render(<VisbilityToggle/>,document.getElementById('app'))