import React from "react";
import App from "../App";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    handlSubmit(event){
      const {name,email, message} = this.state
      event.preventDefault()

    }

    handleChange(event) {
      this.setState({ [event.target.name] :event.target.value })
    }
    render (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label  name='name'>Name</label>
            <input name='name' value ={this.state.name} onChange={this.handleChange} 
          </div>
          <div>
            <label  name='email'>Email</label>
            <input name='email' value ={this.state.email} onChange={this.handleChange} 
          </div>
          <div>
            <label  for='message'>message</label>
            <textarea id='message' name="message" value ={this.state.message} onChange={this.handleChange} 
          </div>
          <div>
            <button> Submit </button>
          </div>
        </form>
        </React.Fragment>
    );
  
    }
  }





export default App;
