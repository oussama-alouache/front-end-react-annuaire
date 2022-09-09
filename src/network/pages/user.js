import React from "react";
import Popup from "../../popup";
import Register from "./login-register/register";
import './style.css';
import{useState,useEffect} from "react";
import Logout from "./login-register/logout";
import Welcome from "../welcome";
import Userupdate from "./User-update";
import Deleteuser from "./Delete-user";
function  Users() {
  const [ btnpop ,setbtnpop] = useState(false);// register popup 
  const [ btnpopup ,setbtnpopup] = useState(false); // update user popup
  const [ btnpopconf ,setbtnpopconf] = useState(false);// logout popup
  const [ btnpopsupp ,setbtnpopsupp] = useState(false);// delete user popup
  const [ timepop ,setbtimepop] = useState(false);// welcome popup

useEffect (() =>{
   setTimeout(()=>{
         setbtimepop(true);
   } ,3000);},
   []
);

    


        return(
<div>
<Popup trigger ={ btnpopsupp} setTrigger ={setbtnpopsupp}>
    <Deleteuser/>
  </Popup>
<Popup trigger ={ btnpopup} setTrigger ={setbtnpopup}>
    <Userupdate/>
  </Popup>
<Popup trigger ={ timepop} setTrigger ={setbtimepop}>
    <Welcome/>
  </Popup>
<Popup trigger ={ btnpopconf} setTrigger ={setbtnpopconf}>
    <Logout/>
  </Popup>
<Popup trigger ={ btnpop} setTrigger ={setbtnpop}>
    <Register/>
  </Popup>
<nav>

<div className="topnav">

  <div className="topnav-right">
  <a href="#" onClick={() => setbtnpop( true) } >create a new user</a>

    <a  href="#" onClick={() => setbtnpopconf( true) } >logout</a>
  </div>

</div>
</nav>

<div className="user-comp">
  
  
<div className="card">
  <img className="imgcard" src={require('./login-register/assets/team2.jpg')} alt="John" ></img>
  <h1>John Doe</h1>
  <p className="title">CEO  Founder, Example</p>
  <p>Harvard University</p>

  < button className='btn-log-y' onClick={() => setbtnpopup( true) }> edit</button>
  < button className='btn-log-n ' onClick={() => setbtnpopsupp( true) }>delete</button>
</div>
  
  
  
</div>


</div>

        )

    
    }

export default Users