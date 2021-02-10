import React from 'react'

export default class GifSearch extends React.Component{
state={
    search: ''
}
handleChange = (event) =>{
    this.setState({
        search: event.target.value
    })
}
render(){
    return <form onSubmit={this.props.handleSubmit}>
        <input type='text' name='search' value={this.state.search} onChange={this.handleChange}/>
        <input type='submit' value='Submit'/>

    </form>
}    
}