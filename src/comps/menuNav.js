import React from "react";
import "../css/header.css"

import { Link } from "react-router-dom";

export default function MenuNav (props)
{


    return(
        <div style={{backgroundColor:props.mainColor}}>
            
            <nav className="menu_nav" dir="rtl">
        <ul>
            <li ><Link className="link" to="/">בשרי</Link></li>
            <li><Link className="link" to="/salad">סלטים</Link></li>
            <li><Link className="link" to="/vegetarian">צמחוני</Link></li>
            <li><Link className="link" to="/dessert">קינוחים</Link></li>
           
        </ul>
    </nav>
            
        </div> 
    )
}