import React, { Component } from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'

class TambahAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ps1: '',
            password: '',
            nama: '',
            username: '',
            email: '',
            err: ''
        }
        this.dataHandler = this.dataHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (this.state.ps1 === this.state.password) {
            API.PostAdmin(this.state).then(res => {
                // console.log(res)
                if (res.status === 1) {
                    this.props.history.push('/hadmin')
                } else {
                    this.setState({
                        err: "Password Not Match"
                    })
                }
            })

        } else {
            this.setState({
                err: "Password Not Match"
            })
        }
    }


    render() {
        return (
            <div>
                <NavbarA />
                <div className="container">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1>TAMBAH ADMIN</h1>
                        <hr />
                        {
                            this.state.err
                        }
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label>MASUKAN NAMA USER</label>
                                        <input name="nama" className="form-control" type="text" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>MASUKAN USERNAME USER</label>
                                        <input name="username" className="form-control" type="text" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>MASUKAN EMAIL USER</label>
                                        <input name="email" className="form-control" type="email" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>MASUKAN PASSWORD USER</label>
                                        <input name="ps1" className="form-control" type="password" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>MASUKAN PASSWORD USER</label>
                                        <input name="password" className="form-control" type="password" onChange={this.dataHandler}></input>
                                    </div>
                                    <input className="btn btn-info" type="submit" value="SIMPAN"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TambahAdmin