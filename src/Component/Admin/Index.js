import React, { Component } from 'react'
import NavbarA from './NavbarA'


class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            nama : ''
        }
    }
    componentDidMount = () => {
        const data = JSON.parse(sessionStorage.getItem('isAdmin'))
        this.setState({
            nama : data[0].nama_admin
        })
    }
    render() {
        return (
            <div>
                <NavbarA />
                <div className="container">
                    <h1>SELAMAT DATANG {this.state.nama} </h1>
                </div>
            </div>
        )
    }
}


export default Index