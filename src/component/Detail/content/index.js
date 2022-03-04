import React from "react";

class ct extends React.Component{

render(){
    return(

<div class="content">
<p><b>Tên phim: </b>{this.props.name}</p>
<p><b>Tác giả:  </b>{this.props.tacgia}</p>
<p><b>Nội dung:  </b>{this.props.detail}</p>
<button>Đặt vé</button><button>TRAILER</button>
</div>


    )
}
}
export default ct;