import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    render() {
       
        //ternary operator method
        return (
            this.state.isLoggedIn ? <h3>Welcome CHAITHRA!</h3> : <h3>Welcome Guest</h3>
        )


        // let message; //element variable method
        // if(this.state.isLoggedIn) message = <h3>Welcome CHAITHRA!</h3>
        // else message = <h3>Welcome Guest</h3>
        // return <div>{message}</div>


        // if(this.state.isLoggedIn){ //If-else
        //     return (
        //         <div>
        //             <h3>Welcome CHAITHRA!</h3>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h3>Welcome Guest</h3>
        //         </div>
        //     )
        // }

        
        // //short hand circuit
        // return this.state.isLoggedIn && <h3>Welcome CHAITHRA!</h3>
    
  }
}

export default ConditionalRendering