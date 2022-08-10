import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic:'Angular'
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Hi ${this.state.username}, Thanks for comments ${this.state.comments} on topic ${this.state.topic}`);
        event.preventDefault();
    }

    render() {

    const {username, comments, topic } = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
            <h2>Form Handling</h2>
            <div>
                <label>Username</label>
                <input type='text' value={username} onChange={this.handleUsernameChange} />
            </div>
            <div>
                <label>Comments</label>
                <textarea type='text' value={comments} onChange={this.handleCommentsChange}/>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value='Angular'>Angular</option>
                    <option value='React'>React</option>
                    <option value='Vue.js'>Vue.js</option>
                </select>
            </div>
            <button type='submit'>SUBMIT</button>
        </form>
    )
  }
}

export default Form