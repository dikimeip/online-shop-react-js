import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import API from '../../ServiceApi/Index'
import AllAdmin from './AllAdmin'

class HAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            admin: []
        }
        this.dataHandler = this.dataHandler.bind(this)
        this.removeHandler = this.removeHandler.bind(this)
    }
    componentDidMount = () => {
        this.dataHandler()
    }

    dataHandler = () =>{
        API.GetAdmin().then(res=>{
            this.setState({
                admin : res
            })
        })
    }

    removeHandler = (id) => {
        if (window.confirm('yakin akan dihapus..??')) {
            API.DeleteAdmin(id).then(res=>{
                //console.log(res)
                if (res === 1) {
                    this.dataHandler()
                } else{
                    console.log('gagal')
                }
            })
        }
        //console.log(id)
    }

    render() {
        return (
            <div>
                <NavbarA />
                <div className="container">
                    <h1>HALAMAN ADMIN</h1>
                    <br />
                    <Link to="/tadmin" className="btn btn-info">TAMBAH ADMIN</Link>
                    <hr />
                    <AllAdmin data={this.state.admin} removeHandler={this.removeHandler} />
                </div>
            </div>
        )
    }
}

export default HAdmin