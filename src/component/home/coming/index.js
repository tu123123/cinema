import React from "react";

class coming extends React.Component{
    scrollTrendbottom=()=>{
        var scroll2=document.querySelector(".list-item");
        var x=scroll2.scrollTop;
        scroll2.scrollTop=x+100;
        
    }
    scrollTrendtop=()=>{
        var scroll2=document.querySelector(".list-item");
        var x=scroll2.scrollTop;
        scroll2.scrollTop=x-100;
        
    }
    render(){
        return(
            <div class="comingSoon">

            <div>PHIM SẮP CHIẾU</div>
            <div class="list-item">
            <div onClick={()=>this.scrollTrendbottom()} class="scrollTrend scrollbottom">
            <div>{">"}</div>
            </div>
            <div onClick={()=>this.scrollTrendtop()} class="scrollTrend scrolltop">
            <div>{">"}</div>
            </div>
            
            <div class="items">
            <div class="img-coming"><img src="https://i.pinimg.com/originals/fc/c2/15/fcc215e7f62218e77f2758380b199d40.jpg" />
            </div>
            <div class="detail">
            <h3>Cross Road</h3>
            <p>Thời gian dự kiến: 25/12/2012</p>
            
            </div>
            </div>
            <div class="items">
            <div class="img-coming"><img src="https://i.pinimg.com/originals/fc/c2/15/fcc215e7f62218e77f2758380b199d40.jpg" />
            </div>
            <div class="detail">
            <h3>Cross Road</h3>
            <p>Thời gian dự kiến: 25/12/2012</p>
            
            </div>
            </div>
            <div class="items">
            <div class="img-coming"><img src="https://i.pinimg.com/originals/fc/c2/15/fcc215e7f62218e77f2758380b199d40.jpg" />
            </div>
            <div class="detail">
            <h3>Cross Road</h3>
            <p>Thời gian dự kiến: 25/12/2012</p>
            
            </div>
            </div>
            <div class="items">
            <div class="img-coming"><img src="https://i.pinimg.com/originals/fc/c2/15/fcc215e7f62218e77f2758380b199d40.jpg" />
            </div>
            <div class="detail">
            <h3>Cross Road</h3>
            <p>Thời gian dự kiến: 25/12/2012</p>
            
            </div>
            </div>
            </div></div>
        )
    }
}
export default coming;