import React from "react";

class newmovie extends React.Component{
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
            <div class="newMovie">
<div>PHIM ĐANG CHIẾU</div>
<div onClick={()=>this.scrollTrend('.newMovie .list-trend')} className="scrollTrend">
            {">"}
            </div>
            <div onClick={()=>this.scrollTrendLeft('.newMovie .list-trend')} class="scrollTrend scrollLeft">
            {"<"}
            </div>
<div class="list-trend">
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
<img src="http://i.truyentranh8.net/2020/06-25/9ae1390e6f7702b7200373db00dda33b.jpg"/>
<div class="detail-trend">
<p><b>Tình trạng:</b> Đang công chiếu</p>
<h2>TenKi No Ko</h2>
<p><b>Thể loại:</b>  hành động</p>
<button>MUA VÉ NGAY!</button>
</div>
</div>
<div class="item-trend">
<img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2020/11/josee_the_tiger_and-the-fish-1.jpg?resize=696%2C986&ssl=1"/>
<div class="detail-trend">
<p><b>Tình trạng:</b> Đang công chiếu</p>
<h2>Josee, The Tiger and The Fish</h2>
<p><b>Thể loại:</b>  hành động</p>
<button>MUA VÉ NGAY!</button>
</div>
</div>
<div class="item-trend">
<img src="http://i.truyentranh8.net/2020/06-25/9ae1390e6f7702b7200373db00dda33b.jpg"/>
<div class="detail-trend">
<p><b>Tình trạng:</b> Đang công chiếu</p>
<h2>TenKi No Ko</h2>
<p><b>Thể loại:</b>  hành động</p>
<button>MUA VÉ NGAY!</button>
</div>
</div>
<div class="item-trend">
<img src="http://i.truyentranh8.net/2020/06-25/9ae1390e6f7702b7200373db00dda33b.jpg"/>
<div class="detail-trend">
<p><b>Tình trạng:</b> Đang công chiếu</p>
<h2>TenKi No Ko</h2>
<p><b>Thể loại:</b>  hành động</p>
<button>MUA VÉ NGAY!</button>
</div>
</div>
</div>
</div>

        )
    }
}
export default newmovie;