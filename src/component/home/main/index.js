import React from "react";
import Head from "../head";
import Trend from "../trend";
import Coming from "../coming";
import Newmovie from '../newmovie';
class main extends React.Component{
     scroll=()=>{
        let scroll2=document.querySelector(".body");
        alert(scroll2);
        if(scroll2.scrollTop>200){
            document.querySelector(".nav").style.backgroundImage="linear-gradient(to bottom,rgb(0,0,0,1),rgb(0,0,0,1))";
        }
        else{
            document.querySelector(".nav").style.backgroundImage="linear-gradient(to bottom,rgb(0,0,0,0.6),rgb(0,0,0,0))";
        }
    }

render(){
    return(
        <div className="body" onScroll={()=>this.scroll()}>
        <Head/>
        <div className="container">
            <Trend/>
            <Coming/>
        </div>
        <Newmovie/>
        </div>
    )
}

}

export default main;