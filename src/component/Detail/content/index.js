import React from "react";

class ct extends React.Component{
    bt=()=>{
        document.querySelector('.trailer').style.transform="translateX(2000px)";
        document.querySelector('.b-t').style.display="flex";
    }
    openTrailer=()=>{
        document.querySelector('.trailer').style.transform=="translateX(0px)"?
        document.querySelector('.trailer').style.transform="translateX(2000px)":
        document.querySelector('.trailer').style.transform="translateX(0px)";
    }
render(){
    return(

<div class="content">
<p><b>Tên phim: </b>{this.props.name}</p>
<p><b>Tác giả:  </b>{this.props.tacgia}</p>
<p><b>Nội dung:  </b>{this.props.detail}</p>
<button onClick={()=>this.bt()}> Đặt vé</button><button  onClick={()=>this.openTrailer()}>TRAILER</button>
</div>


    )
}
}
export default ct;