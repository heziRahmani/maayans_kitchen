import React,{useRef} from "react"

import {useHistory} from "react-router-dom"
import "../css/login.css"
export default function LogIn(params) {
    






    let history=useHistory()
    

   
    let userInput=useRef()
    let passRef=useRef()

    const submit=(event)=>{
        
      
        event.preventDefault()
        
        let bodyData={
            email:userInput.current.value,
            pass:passRef.current.value,
            
    
        }
        console.log(userInput.current.value);
    
            let url = "https://my-toy-store.herokuapp.com/users/login"
        
            fetch(url, {
            method:"POST",
            body:JSON.stringify(bodyData),
            headers: { 'content-type': "application/json"
            }
            })
            .then(resp => resp.json())
            .then(data => { 
            console.log(data)
            if(data.token){
                localStorage.setItem("token",data.token);
                history.push("/admin")
                console.log(data);
            }
            else{
                alert("Worng user or password , try again")
            }
        })
    }





    return(
        <div className="login_container">
        


            <form className="login_form" onSubmit={(e)=>{submit(e)}}>
            <div className="login_input_box">
            <label>User Name:</label>
            <input type="text" ref={userInput} id="admin_login_name " className="login_input"/>
            </div>


            <div className="login_input_box">
            <label>Password:</label>
            <input type="text" ref={passRef} id="login_password" className="login_input "/>
            </div>
            <button type="botten" className="logIn_btn">submit</button>
            </form>
        </div>
    )
}