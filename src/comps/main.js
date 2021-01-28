import React, { useState } from "react";
import Header from "./header";
import "../css/main.css";
import Theme from "./themes";
import Footer from "./footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Galery from "./galery";
import Salad from "./salad_menu";
import Carnivors from "./carnivore_menu";
import Admin from "../admin/admin";
import AddForm from "../admin/addProd";
import MenuNav from "./menuNav";
import Dessert from "./dessert";
import Vegetarian from "./vegetarian";
import LogIn from "../admin/login";
import EditForm from "../admin/editProd";
import AdminNav from "../admin/adminNav";













export default function Main(props) {
  let [mainColor, updateMainColor] = useState("#ffffff73");
  console.log(mainColor + "main");

  return (
    <div className="main_container">
      {/* <Header mainColor={mainColor} /> */}
      
      <Router>
        <Switch>
<Route  path={["/","/galery","/adminm"]} render={()=>{
    return(
        <>
              <Header mainColor={mainColor} />
        <Theme updateColor={updateMainColor} />
        <MenuNav/>
        <Route exact  path="/" render={()=><div>
       
            <Carnivors mainColor={props.mainColor}/></div>}/>

        <Route exact path="/salad" render={()=><div><Salad mainColor={props.mainColor}/></div>}/>
        <Route exact path="/dessert" render={()=><div><Dessert mainColor={props.mainColor}/></div>}/>
        <Route exact path="/vegetarian" render={()=><div><Vegetarian mainColor={props.mainColor}/></div>}/>
        {/* vegetarian
        dessert */}


        <Route  exact path="/galery" component={Galery}/>


        <Route  path="/adminm" component={AdminNav}/>
        <Route exact path="/adminm/login" component={LogIn}/>
        <Route exact path="/adminm" component={Admin}/>
        <Route exact path="/adminm/add" component={AddForm}/>
        <Route exact path="/adminm/edit/:id" component={EditForm}/>
        </>
    )
}}/>
     

         
        </Switch>
      </Router>
      {/* <Menus mainColor={mainColor} /> */}
      <Footer mainColor={mainColor} />
    </div>
  );
}
