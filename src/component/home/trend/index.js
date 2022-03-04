import React from "react";

class trend extends React.Component{
    scrollTrend=(a)=>{
        var scroll2=document.querySelector(""+a+"");
        var x=scroll2.scrollLeft;
        scroll2.scrollLeft=x+269;
        
    }
    scrollTrendLeft=(a)=>{
        var scroll2=document.querySelector(""+a+"");
        var x=scroll2.scrollLeft;
        scroll2.scrollLeft=x-269;
        
    }
    state={
        data:[
            {
                
            }
        ]
    }
    componentDidMount(){
        setInterval(() => {
            var scroll2=document.querySelector(".list-trend");
        var x=scroll2.scrollLeft;
        if(x>1000){
            scroll2.scrollLeft=0;
        }
       scroll2.scrollLeft=x+269;  
        }, 3000);
        fetch("http://localhost:8000/movie")
        .then(res=>{
            return res.json()
               })
        .then(res=>{
                this.setState({
                    data:res
                })
                
                   }) 
    
    }
    render(){
        return(
            <div  class="trending">

            <div>Trending</div>
            <div onClick={()=>this.scrollTrend('.list-trend')} className="scrollTrend">
            {">"}
            </div>
            <div onClick={()=>this.scrollTrendLeft('.list-trend')} class="scrollTrend scrollLeft">
            {"<"}
            </div>
            <div class="list-trend">
            {this.state.data.map(i=>
            <div class="item-trend">
            <img src={i.img}/>
            <div class="detail-trend">
            <p><b>Tình trạng:</b> {i.tinhtrang}</p>
            <h2>{i.name}</h2>
            <p><b>Thể loại:</b> {i.theloai}</p>
            <button>MUA VÉ NGAY!</button>
            </div>
            </div>
            )}
            
            </div>
           
            </div>
        )
    }
}
export default trend;