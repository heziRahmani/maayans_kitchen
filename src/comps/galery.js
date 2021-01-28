import React from "react"
import "../css/galery.css"
export default function Galery(props)
{
 const galeryPhotos=["/imag1.jpg","/imag2.jpg","/imag3.jpg","/imag4.jpg","/imag5.jpg","/imag6.jpg","/imag7.jpg","/imag8.jpeg","/imag9.jpeg","/imag10.jpeg","/imag11.jpeg","/imag12.jpeg","/imag13.jpeg","/imag14.jpeg","/imag15.jpeg","/imag16.jpeg"]
console.log(galeryPhotos);
    return(
        <section className="galery_section">
            <h3>גלריה</h3>
            {/* <img src="\assets\foodPic\imag1.jpg"/> */}
            <div>
                {galeryPhotos.map(photo=>{
                    return(
                        <img src={"/assets/foodPic"+`${photo}`}/>
                    )
                })}
            </div>
        </section>
    )
}