import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{

    state={
        imgOne : '',
        imgTwo :'',
        imgThree : ''
    }

    render(){
        return <div><GifSearch handleSubmit={this.handleSubmit}/>
            <GifList imgOne={this.state.imgOne} imgTwo={this.state.imgTwo} imgThree={this.state.imgThree}/>
            </div>
    }

    
    handleSubmit = (event) =>{
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.search.value}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(json =>{
            this.setState({
                imgOne: json.data[0].images.original.url,
                imgTwo: json.data[1].images.original.url,
                imgThree: json.data[2].images.original.url
            })
        })
    }
    

}