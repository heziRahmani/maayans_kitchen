import React from "react";
import "../css/header.css"

import { Link } from "react-router-dom";

export default function Header (props)
{


    return(
        <header style={{backgroundColor:props.mainColor}}>
            <Link className="link login_link" to="/adminm/login">login</Link>
            <div className="header_box">
            <h3><span>המטבח של מעיין</span></h3>
                <div className="img_box">
                    <img width="50" src="assets\clipart101655.png"/>
                    <img width="50" src="assets\clipart67671.png"/>
                    </div>
                    </div>
            
            <nav dir="rtl">
        <ul className="header_ul">
            <li><Link className="link" to="/">ראשי</Link></li>
            <li><Link className="link" to="/galery">גלריה</Link></li>
            
           
        </ul>
    </nav>
            
        </header> 
    )
}