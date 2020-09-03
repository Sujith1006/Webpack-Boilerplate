import React, { Component } from "react";
import  "./form.css"
import Image from "../../assets/IMAGE-b73881d9963948e8a4da7f669a99aa40.jpg1597734280384"
class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <>
      <img src={Image}/>
      <form className="main">  
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
      </>
    );
  }
}


export default Form;

