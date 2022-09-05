import React from "react";
import Popup from "../../popup";
import Register from "./login-register/register";
import './style.css';
import{useState,useEffect} from "react";
import Logout from "./login-register/logout";
import Welcome from "../welcome";
function  Users() {
  const [ btnpop ,setbtnpop] = useState(false);
  const [ btnpopconf ,setbtnpopconf] = useState(false);
  const [ timepop ,setbtimepop] = useState(false);

useEffect (() =>{
   setTimeout(()=>{
         setbtimepop(true);
   } ,3000);},
   []
);

    


        return(
<div>
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


</div>

        )

    
    }

export default Users