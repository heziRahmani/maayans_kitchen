import React from "react"
import {useHistory} from "react-router-dom"
import "../admin/admin.css"



export default function AddForm(props)
{

    let history=useHistory()
    const submit=(event)=>{

        event.preventDefault()
       
        console.log(event.target.cat_name.value);
        
     
        let bodyData={
            name:event.target.prod_name.value,
            options:event.target.prod_options.value,
            price:event.target.price.value,
            category:event.target.cat_name.value,
            in_stock:event.target.in_stock.value
    
        }
        console.log(bodyData);
    
        let url = "https://my-toy-store.herokuapp.com/maayans/add"
    
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
          else{
            alert("המוצר הוסף")
          }
        })
    }


    return(
        <section>
            <div className="add_form_container">
            
            <form  onSubmit={submit}  className="add_prod_form" dir="rtl">
                <div className="add_single_input_box">
                <label>שם המנה:</label>
                <input type="text" id="prod_name" className="prod_name_input  input" defaultValue="-"/>
                </div>
    
    
                <div className="add_single_input_box">
                <label>אפשרויות:</label>
                <textarea type="text" id="prod_options" className="prod_options_input input" defaultValue="-"/>
                </div>
    
    
                
                <div className="add_single_input_box">
                <label>כמות:</label>
                <input type="text" id="in_stock" className="in_stock_input input" defaultValue="-"/>
                </div>
    
    
    
                <div className="add_single_input_box" dir="rtl">
                <label>תפריט:</label>
                <select  id="cat_name" className="prod_cat_name_input input"> 
                    <option value="בשרי">בשרי</option>
                    <option value="צמחוני">צמחוני</option>
                    <option value="סלטים">סלטים</option>
                    <option value="קינוחים">קינוחים</option>
                    
                  
    
                </select>
                </div>
    
    
                
    
                <div className="add_single_input_box">
                <label>מחיר:</label>
                <input type="number" id="price" className="prod_price_input" defaultValue={0}/>
                </div>
                <button type="botten" className="add_form_btn">submit</button>
            </form>
            </div>
        </section>
    )
}