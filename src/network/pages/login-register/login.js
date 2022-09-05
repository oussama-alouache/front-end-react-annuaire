import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './assets/login-style.css'


class Login extends Component {
constructor (props) {
    super(props);
    this.state={
        email:"",
        password:"",
        msg:"",
     
    };
}
onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
};
onSignInHandler = () => {
  

};
   render () {

    return(
      

        <div className="login-page">
     
          <div className="login">
          <video loop autoPlay id="background-video">
            <source src={require('./assets/bg.mp4')}  type="video/mp4"></source>
          </video>
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
        </div>
    )
   }

}
export default Login