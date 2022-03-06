import React from "react";
import './detail.css';
import { withRouter } from "react-router-dom";
import Content from '../content';
import BuyTicker from '../buyTicker';
class main extends React.Component{
    state={
        data:[]
    }
    componentDidMount(){
     
        fetch("http://localhost:8000/movie")
        .then(res=>{
            return res.json()
               })
        .then(res=>{
                
                this.setState({
                    data:res.filter(i=>i.name==this.props.match.params.id)
                })
                
                   }) ;
    
    
    }
   
render(){
    console.log(this.state.data)
  
    return(
        
<div class="containerDetail">
{
    this.state.data.map(i=>
        <><img class="bg" src={i.bg}/><div class="containerContent">
        <BuyTicker name={i.name}/>
            <div class="imgDetail">
                <img src={i.img} />
            </div>
            
            <Content name={i.name} detail={i.detail} tacgia={i.tacgia}/>

        </div></>    )
}

</div>
    )
}
}
export default withRouter(main);