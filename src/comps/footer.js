import React from "react"
import "../css/footer.css"

export default function Footer (props)
{


    return(
        <footer style={{backgroundColor:`${props.mainColor}`}}>
            <div className="orders_phone" dir="rtl" >
                <h3>להזמנות חייגו:<span>0542590900</span></h3>
            </div>
            <div className="my_info"><h3>created by hezi rahmani@2021</h3></div>
        </footer>
    )
}