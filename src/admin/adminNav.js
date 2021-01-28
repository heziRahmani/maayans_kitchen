import React from "react"
import{ Link} from "react-router-dom"


import "../css/header.css"



export default function AdminNav (props)
{


    return(
        <div style={{backgroundColor:props.mainColor}}>
            
            <nav className="menu_nav" dir="rtl">
        <ul>
            <li ><Link className="link" to="/adminm/add">הוספת מוצר</Link></li>
            <li><Link className="link" to="/adminm">עריכה/מחיקת מנות</Link></li>

           
        </ul>
    </nav>
            
        </div> 
    )
}