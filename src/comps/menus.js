import React from "react"
import "../css/menus.css"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Carnivors from "./carnivore_menu"
import Salad from "./salad_menu"
import MenuNav from "./menuNav"
import Dessert from "./dessert"
import Vegetarian from "./vegetarian"



{/* <Route exact path="/" component={}/> */}




export default function Menus(props)
{


    return(
        <section className="menu_section" style={{backgroundColor:`${props.mainColor}`,boxShadow:`${props.mainColor}`}}>
            <Router><Switch>
                
                <Route  path={["/","/salad"]} render={()=><div><MenuNav mainColor={props.mainColor}/></div>}/>

                <Route exact  path="/" render={()=><div>
                    
                    <Carnivors mainColor={props.mainColor}/></div>}/>


                <Route  path="/salad" render={()=><div><Salad mainColor={props.mainColor}/></div>}/>
                <Route  path="/dessert" render={()=><div><Dessert mainColor={props.mainColor}/></div>}/>
                <Route  path="/vegetarian" render={()=><div><Vegetarian mainColor={props.mainColor}/></div>}/>
                
                
            </Switch></Router>
            {/* <Salad/> */}
        </section>
    )
}