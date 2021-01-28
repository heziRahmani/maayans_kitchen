import React, { useEffect, useState } from "react"
import "../admin/admin.css"
import Auth from "./auth"
import {BrowserRouter as Router, Switch, Route, Link,useHistory } from "react-router-dom";
import AdminNav from "./adminNav";
import AddForm from "./addProd";


export default function Admin(props)
{

    let history=useHistory()

 let [allMenus,setallMenus]=useState([])



    useEffect(() => {
        let url="https://my-toy-store.herokuapp.com/maayans/"
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data);
            setallMenus(data)
            console.log(allMenus);
    })},[])



    let updateData=(e)=>{
let bodyData={
    
}



    }
    return(
        
        <section className="admin_page">
            <Router><Switch>
                {/* <Route  path="/adminm" component={AdminNav}/> */}
                </Switch></Router>
           {/* <AdminNav/> */}
<table className="admin_table" dir="rtl">

    <thead>
        <tr>
            <th>שם המנה</th>
          <th>מחיר</th>
          <th>אפשרויות</th>
          <th>כמות</th>
          <th>תפריט</th>
        </tr>
    </thead>
    <tbody>
        {allMenus.map((item,i)=>{
            return(<tr key={i}>
             <td >{item.name}</td>
             <td >{item.price}</td>
             <td >{item.options}</td>
             <td >{item.quantity}</td>
             <td >{item.category}</td>
             <td><button key={i} onClick={()=>{console.log(item._id);}}>מחיקה</button></td>
             <td><button key={i} onClick={()=>{history.push("adminm/edit/"+item._id)}}>עריכה</button></td>
             </tr>
             
             
             )
        })}
        
    </tbody>
    

</table>
<Auth/>
        </section>
    )
}