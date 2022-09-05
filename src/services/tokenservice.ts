import axios from "axios";
import React, { Component } from "react";

interface Credentials {
    username: string;
    password: string;
  }
class Tokenservice {
     async Userlogin (credentials:Credentials){
        try{
            const responce = await axios.post ("http://localhost:8001/api/login",credentials);
            return responce.data;


        }
        catch (error) {
            console.error("Error", error.response);
            return false;
          }
     }
 }
 export default new Tokenservice