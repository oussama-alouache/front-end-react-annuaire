import React, { Component } from "react";


export class Register extends Component {
  render() {
    return (
      <div>
          <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <button className="btn-login">Log In</button>
       
    </form>



				 
			</div>
       
     
    )
  }
}

export default Register