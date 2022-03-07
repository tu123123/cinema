import React from "react";
import '../buyTicker/buyTicker.css';
class ticker extends React.Component{
    
    state={
        time:"",
        ghe:"",
        combo:"",
        total:0,
        data:""
    }
    buyClick=(a)=>{
        this.setState(
            {
                time:a
            }
        )
    }
    delete=()=>{
        this.setState(
            {
        time:"",
        ghe:"",
       
        combo:"",
            }
        )
    }
    
    componentDidMount(){
       
        if(this.state.time==""){
            
            document.querySelector('.time').style.display="none";
            document.querySelector('.cart-items').style.display="none";
        }
        else{
            document.querySelector('.time').style.display="block";
            document.querySelector('.cart-items').style.display="flex";
        }
        if(this.state.ghe==""){
            document.querySelector('.ghe').style.display="none";
        }
        else{
            document.querySelector('.ghe').style.display="block";
        }
      
}
    componentDidUpdate(){
      
      
        if(this.state.time==""){
            
            document.querySelector('.time').style.display="none";
            document.querySelector('.cart-items').style.display="none";
        }
        else{
            document.querySelector('.time').style.display="block";
            document.querySelector('.cart-items').style.display="flex";
        }
        if(this.state.ghe==""){
            document.querySelector('.ghe').style.display="none";
           
        }
        else{
            document.querySelector('.ghe').style.display="block";
            this.state.ghe.split(',').map(i=>{
                document.getElementById(i).style.color="red";
                }
                )
           
        }
    }
    close=()=>{
        document.querySelector('.b-t').style.display="none";
        this.delete();
    }
    // eslint-disable-next-line no-dupe-class-members
    buyClick=(a)=>{
        this.setState(
            {
                time:a,
                ghe:"",
                total:0
            }
        )
    }
    deletetime=()=>{
        this.setState(
            {
                time:"",
                ghe:"",
                total:0
            }
        )

    }
    deleteghe=(b)=>{
        let c="";
        let a=this.state.ghe.split(',').filter(i=>i!=b);
        a.map(i=>{
            if(c==""){
                c=i;
            }
            else{
                c=c+","+i;
            }
        
        })
        this.setState(
            {
                ghe:c,
                total:c.split(',').length*45
            }
        )
        this.state.ghe.split(',').map(i=>{
            document.getElementById(i).style.color="white";}
            )
    }
    buyClick2=(a)=>{
        
           
            if(this.state.ghe.split(',').filter(i=>i==a).length==0){
                  
        this.state.ghe==""?  this.setState(
            {
                ghe:a,
                total:(this.state.ghe.split(",").length)*45,
            }
        ):
        this.setState(
            {
                ghe:this.state.ghe+","+a,
                total:(this.state.ghe.split(",").length+1)*45,
            }
        )
            }    
            }
                
        
      
      
    
    render() {
       
        return (
            
             <div className="b-t">
                <div className="close" onClick={()=>this.close()}>X</div>
                <div className="b-t-child">
                    <h1> {this.props.name}</h1>
                    <fieldset>
                        <legend> KHUNG GIỜ</legend>
                        <ul>   
                        {this.props.xuatchieu.split(',').map(item=>
                            <li onClick={()=>this.buyClick(item)}>{item}</li>
                         
                     )}
                   
                        </ul>
                    </fieldset>
                    
                    <fieldset>
                        <legend> GHẾ NGỒI</legend>
                        <ul>
                        {this.props.soghe.split(',').map(item=>
                            <li id={item} onClick={()=> this.buyClick2(item)}>{item}</li>
                         
                     )}
                           
                            
                            
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend> COMBO ĂN UỐNG</legend>
                        <ul>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH2iS_U6rARFbJjJOQ2vzm-lXTxfKwn_VFs7fkFuoax1jzshzLMgwot3OG4ZLH3YaLfA&usqp=CAU"/></li>
                       
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH2iS_U6rARFbJjJOQ2vzm-lXTxfKwn_VFs7fkFuoax1jzshzLMgwot3OG4ZLH3YaLfA&usqp=CAU"/></li>
                         
                        </ul>
                    </fieldset>
                   
                </div>
                <div className="b-t-cart">
                <div className="cart-items">
                    <div className="time">Xuất chiếu : {this.state.time}<p onClick={()=>this.deletetime()} className="close2">x</p></div>
                    <div className="ghe">Số ghế đã chọn : {this.state.ghe.split(',').map((i)=> <div className="time2">{i} <p className="close2" onClick={()=>this.deleteghe(i)}>x</p></div>)}</div>
                    <div>Tổng tiền: {this.state.total} ,000 </div>
                    <button>XÁC NHẬN MUA</button>
                    </div>
                    
                </div>
             </div>
        );
    }
}
export default ticker;