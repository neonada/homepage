import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./forma.css";
export class Forma extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qobr7b4",
        "template_200hju8",
        e.target,
        "user_kLaQbMQBdL9wBoOccYis8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.resetForm();
  };
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="mainFormWrapper">
        <form onSubmit={this.sendEmail.bind(this)} className="form">
          <div className="name-email-input">
            <input
              type="text"
              value={name}
              placeholder="Your name"
              name="name"
              id="Name"
              autocomplete="off"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              name="email"
              id="email"
              autocomplete="off"
              onChange={this.handleChange}
            />
          </div>
          <textarea
            rows="6"
            className="form-textarea"
            type="text"
            value={message}
            name="message"
            placeholder="Message"
            autocomplete="off"
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    );
  }
}
export default Forma;
