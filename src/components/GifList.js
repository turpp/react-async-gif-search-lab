import React from 'react'

export default class GifList extends React.Component{


showGif = () =>{
return  <ul>
<li><img src={this.props.imgOne}/></li>
<li><img src={this.props.imgTwo}/></li>
<li><img src={this.props.imgThree}/></li>
</ul>
}

    render(){
      return this.showGif()
    }
}