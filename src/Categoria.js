import React, { Component } from 'react'
import axios from 'axios'

class Categoria extends Component{
    constructor (props){
        super(props)
        this.loadData = this.loadData.bind(this)
        this.state = {
            produtos: []
        }
    }

    loadData(id){
        axios
            .get('http://localhost:3001/produtos?categoria='+id)
            .then(res=>{
                this.setState({
                    produtos: res.data
                })
            })
    }

    componentDidMount (){
        const id = this.props.match.params.catId
        this.loadData(id)
    }
    componentWillReceiveProps(newProps){
        this.loadData(newProps.match.params.catId)
    }
    
    render(){
        return (
        <div>
            <h1>Categoria {this.props.match.params.catId}</h1>
            <p>{JSON.stringify(this.state.produtos)}</p>
            <p>{JSON.stringify(this.props.match)}</p>
        </div>
        )
    }
}
export default Categoria