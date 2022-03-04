import React from "react";
import { Link } from "react-router-dom";
class nav extends React.Component{


    render(){
        return(
            <div class="nav">
<div class="title">
<Link to="/"><div>
<p>
WibuCinema
</p>
</div></Link>

</div>
<div>
<ul>
<li>DIỄN ĐÀN</li>
<li>LỊCH CHIẾU</li>
<li>PHIM SẮP RA MẮT</li>
<li>LỊCH CHIẾU</li>
<li>RẠP/GIÁ</li>
<li>GIỚI THIỆU </li>
<li>LIÊN HỆ</li>
</ul>
</div>
<div>
<ul>
<li>
<div class="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSz8wBuJJTefVDZLyw0jNEXrEFRhHRFqnRixNzycZNDXimZyzTdrRzU9F49J8X61-yg5k&usqp=CAU"/></div></li>
<li>Admin</li>
<li class ="cart">Giỏ hàng<div>1</div></li>
</ul>
</div>
</div>
        )
    }
}
export default nav;