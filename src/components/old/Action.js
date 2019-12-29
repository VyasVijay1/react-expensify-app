import React from 'react'

const Action = (props) =>(
  <div>
    <button 
    disabled={!props.hasOptions}
    onClick={props.handlePick}
    >What you want me to do?</button>
  </div>
)

export default Action