import React,{Component} from 'react';

export default class ClassComponent extends Component{
    constructor(props){
        super(props)

        this.state={value:props.valorInicial}
    }

    somar(delta){
        this.setState({...this.state,value:this.state.value + delta})
    }

    subtrair(delta){
        this.setState({...this.state,value:this.state.value - delta})
    }

    render(){
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={()=>this.somar(1)}>Somar</button>
                <button onClick={()=>this.subtrair(1)}>Substrair</button>
            </div>
        )
    }
}