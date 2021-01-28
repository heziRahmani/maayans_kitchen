import React, { useEffect, useState } from "react"
import {useHistory} from "react-router-dom"
import "../admin/admin.css"
import Auth from "./auth"



export default function EditForm(props)
{

    let [singleProd,setSingleProd]=useState([])
    let history=useHistory()
    let prodId
    // console.log(prodId);
    useEffect(()=>{
        prodId=props.match.params.id;
        let url="http://localhost:5000/maayans/single/"+prodId;
        // console.log(url);
            fetch(url)
            .then(resp=>resp.json())
            .then(data=>
                {
                    console.log(data);
                    setSingleProd(data)
                })
    
    
        



    },[])
   

    console.log(singleProd);
    // const updatData=(prodId)=>{}
    
    
    
    
    
    
    const submit=(event)=>{

        event.preventDefault()
       
        console.log(event.target.cat_name.value);
        
     
        let bodyData={
            name:event.target.prod_name.value,
            options:event.target.prod_options.value,
            price:event.target.price.value,
            category:event.target.cat_name.value,
            quantity:event.target.in_stock.value
          
    
        }
        console.log(bodyData);
    
        let url = "http://localhost:5000/maayans/update"
    
        fetch(url, {
          method:"POST",
          body:JSON.stringify(bodyData),
          headers: { 'content-type': "application/json",
        //   'x-auth-token':localStorage["token"]
         }
        })
        .then(resp => resp.json())
        .then(data => { 
          console.log(data)
          if(data){
            history.push("/adminm")
            console.log(data);
          }
         
        })
    }


    return(
        <section>
            <Auth/> 
            <div className="add_form_container">
            
            <form  onSubmit={submit}  className="add_prod_form" dir="rtl">
                
                <div className="add_single_input_box">
                <label>שם המנה:</label>
                <input type="text" id="prod_name" className="prod_name_input  input" defaultValue={singleProd.name}/>
                </div>
    
    
                <div className="add_single_input_box">
                <label>אפשרויות:</label>
                <textarea type="text" id="prod_options" className="prod_options_input input" defaultValue={(singleProd.options!="")?singleProd.options:"-"}/>
                </div>
    
    
                
                <div className="add_single_input_box">
                <label>כמות:</label>
                <input type="number" id="in_stock" className="in_stock_input input" defaultValue={(singleProd.quantity=="")?"-":singleProd.quantity}/>
                </div>
    
    
    
                <div className="add_single_input_box" dir="rtl">
                <label>תפריט:</label>
                <select  id="cat_name" className="prod_cat_name_input input" defaultValue={singleProd.category}> 
                    <option value="בשרי">בשרי</option>
                    <option value="צמחוני">צמחוני</option>
                    <option value="סלטים">סלטים</option>
                    <option value="קינוחים">קינוחים</option>
                    
                  
    
                </select>
                </div>
    
    
                
    
                <div className="add_single_input_box">
                <label>מחיר:</label>
                <input type="number" id="price" className="prod_price_input" defaultValue={singleProd.price}/>
                </div>
                <button type="botten" className="add_form_btn">submit</button>
            </form>
            </div>
        </section>
    )
}