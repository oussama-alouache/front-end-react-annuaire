import React, { Component } from "react";
import'./assets/register-style.css'

export class Register extends Component {
  render() {
    return (
   
    <form className="register-form">
      <div className="head-register" >
      <h3>register</h3>
      </div>
       

        <label htmlFor="username">Username</label>
        <input className="input-register" type="text" placeholder="Email or Phone" id="username"></input>

        <label htmlFor="email">email</label>
        <input className="input-register" type="email" placeholder="Email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input className="input-register" type="password" placeholder="Password" id="password"></input>
        <label htmlFor="password"> conforme Password</label>
        <input className="input-register" type="password" placeholder=" conforme Password" id="password"></input>
        <label htmlFor="email">profil picture</label>  
        <input className="input-register" type="file" placeholder="image" id="image"  accept="image/png, image/jpeg"></input>
        <label htmlFor="email">role</label>  

        <select className="input-register" name=" optionlist " >
        <option>chose a role....</option>
        <option>ceo</option>
        <option>admin</option>
        <option> option 4 </option>
        <option> option 5 </option>
        </select>

        <button type="submit" className="btn-register">Log In</button>
       
    </form>



				 
		
       
     
    )
  }
}

export default Register