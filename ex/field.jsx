import React, {Component} from 'react'

export default class Field extends Component{
constructor(props){
    super(props)
    this.state = {value: props.valorInicial}
    this.handleChange = this.handleChange.bind(this);
}

    render(){
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
}