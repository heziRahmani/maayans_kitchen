import React, { useState,useEffect } from "react"
import "../css/menus.css"


export default function Salad(props)
{
let [menu,setMenu]=useState([])



useEffect(() => {
    let url="https://my-toy-store.herokuapp.com/maayans/cat/סלטים"
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        
        console.log(data.data);
        setMenu(data.data)
    })
    // console.log(props.mainColor);
    console.log(menu);
    

}, [])
    

    return(
        <section className="menu_section" style={{backgroundColor:`${props.mainColor}`,boxShadow:`${props.mainColor}`}}>
        <div className="menu"  dir="rtl" >
            <h3>תפריט סלטים</h3>
            <div className="table_container">
                <div className="teble_box">
    <div className="table_head">
      
      <div>שם המנה</div>
      <div>אפשרויות</div>
      <div>יחידות</div>
   
      <div>מחיר</div>
      
    </div>
    </div>
    {/* <tbody className="table_body"> */}
    
      {menu.map((item,i)=>{
          return(
            <div className="table_body" key={i}>
     
            <div >{item.name}</div>
            <div className="options">{item.options}</div>

            <div >{item.quantity}</div>
            <div >{item.price}₪</div>
            </div>
          )
      })}
     
        
 
</div>
            
        </div>
        </section>
    )
}