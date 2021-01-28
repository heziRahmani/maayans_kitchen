import React from "react"
import "../css/theme.css"

export default function Theme(props)
{

    

   
// console.log(props.mainColor);


    return(
        <section className="theme_section" dir="rtl">
            <h3 className="theme_header">מה הירק האהוב עלייך?</h3>
                <div className="icon_container">
                    <div className="single_icon" id="tomato">
                        <img src="\assets\1416249767.svg" onClick={()=>{props.updateColor("#c71f0262")}}/>
                    </div>
                    {/*  */}
                    <div className="single_icon" id="cucumber">
                        <img src="\assets\1453547668.svg" onClick={()=>{props.updateColor("#4270026e")}}/>
                    </div>
                    {/*  */}
                    <div className="single_icon" id="eggplant">
                        <img src="\assets\1550951429.svg" onClick={()=>{props.updateColor("#6140517a")}}/>
                    </div>
                </div>
        </section>
    )
}