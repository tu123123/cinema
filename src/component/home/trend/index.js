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
            <div class="item-trend">
            <img src="https://media.vov.vn/uploaded/9eqrbt2uv7o/2019_06_23/poster_szfr.jpg"/>
            <div class="detail-trend">
            <p><b>Tình trạng:</b> Đang công chiếu</p>
            <h2>Spider Man</h2>
            <p><b>Thể loại:</b> Tình cảm, lãng mạng</p>
            <button>MUA VÉ NGAY!</button>
            </div>
            
            </div>
            <div class="item-trend">
            <img src="https://i.pinimg.com/originals/30/a4/65/30a465d7c817d81dcfeeb7c834d9dc1f.jpg"/>
            <div class="detail-trend">
            <p><b>Tình trạng:</b> Đang công chiếu</p>
            <h2>Your Name</h2>
            <p><b>Thể loại:</b> Tình cảm, siêu nhiên</p>
            <button>MUA VÉ NGAY!</button>
            </div>
            
            </div>
            
            <div class="item-trend">
            <img src="https://i.pinimg.com/736x/7b/38/d1/7b38d1c0be306607939d132170eb65b2.jpg"/>
            <div class="detail-trend">
            <p><b>Tình trạng:</b> Đang công chiếu</p>
            <h2>Tamako love story</h2>
            <p><b>Thể loại:</b> Tình cảm, siêu nhiên</p>
            <button>MUA VÉ NGAY!</button>
            </div>
            
            </div>
            <div class="item-trend">
            <img src="https://venturology.files.wordpress.com/2017/01/2-1024x631.jpg"/>
            <div class="detail-trend">
            <p><b>Tình trạng:</b> Đang công chiếu</p>
            <h2>Your Name</h2>
            <p><b>Thể loại:</b> Tình cảm, siêu nhiên</p>
            <button>MUA VÉ NGAY!</button>
            </div>
            
            </div>
            <div class="item-trend">
            <img src="https://venturology.files.wordpress.com/2017/01/2-1024x631.jpg"/>
            <div class="detail-trend">
            <p><b>Tình trạng:</b> Đang công chiếu</p>
            <h2>Your Name</h2>
            <p><b>Thể loại:</b> Tình cảm, siêu nhiên</p>
            <button>MUA VÉ NGAY!</button>
            </div>
            
            </div>
            </div>
            </div>
        )
    }
}
export default trend;