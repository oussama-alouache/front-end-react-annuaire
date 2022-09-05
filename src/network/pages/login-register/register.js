import React, { Component } from "react";


export class Register extends Component {
  render() {
    return (
   
    <form className="register-form">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        <label htmlFor="email">email</label>
        <input type="email" placeholder="Email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <button className="btn-login">Log In</button>
       
    </form>



				 
		
       
     
    )
  }
}

export default Register