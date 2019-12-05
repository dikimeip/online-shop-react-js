import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import API from '../ServiceApi/Index'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            nama:"",
            alamat:"",
            nohp:"",
            email:"",
            password:"",
            foto:"user.jpg",
            err:""
        }
    }

    handlerChange = (event) => {
       this.setState({
           [event.target.name] : event.target.value
       })
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        //console.log(event)
        API.PostUser(this.state).then(res=>{
            console.log(res)
            if (res.status === 1 ) {
                this.props.history.push('/login')
            } else {
                this.setState({
                    err:"GAGAL REGISTER"
                })
            }
        })
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="panel">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h1>REGISTER AKUN</h1>
                                    <br/>
                                    <hr/>
                                    <form onSubmit={this.handlerSubmit} >
                                        <div className="form-group">
                                            <label>MASUKAN NAMA</label>
                                            <input type="text" name="nama" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>MASUKAN ALAMAT</label>
                                            <input type="text" name="alamat" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>MASUKAN NO HP</label>
                                            <input type="text" name="nohp" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>MASUKAN EMAIL</label>
                                            <input type="text" name="email" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>MASUKAN PASSWORD</label>
                                            <input type="password" name="password" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <input type="submit" className="btn btn-info" value="REGISTER" />
                                    </form>
                                    {
                                        this.state.err
                                    }
                                    <br/>
                                    <Link to="/login">LOGIN NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Register