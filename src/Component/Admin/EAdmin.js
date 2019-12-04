import React, { Component } from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'

class EAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            nama: '',
            username: '',
            email: '',
            foto: '',
            fotos: '',
            file: {
                fto: ''
            }
        }
    }
    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetAdminId(id).then(res => {
            this.setState({
                id : res.id_admin,
                nama : res.nama_admin,
                username : res.username_admin,
                email : res.email_admin,
                foto : res.foto_admin
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarA />
                <div className="container">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1>EDIT ADMIN</h1>
                        <hr />
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label>NAMA ADMIN</label>
                                        <input value={this.state.nama} name="nama" className="form-control" type="text" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>USERNAME</label>
                                        <input value={this.state.username} name="kategori" className="form-control" type="text" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>EMAIL</label>
                                        <input value={this.state.email} name="harga" className="form-control" type="text" onChange={this.dataHandler} ></input>
                                    </div>
                                    <div className="form-group">
                                        <p><img src={'http://localhost/api_olsop_fix/server/asset/img/' + this.state.foto} width="250" height="200" alt="test" /></p>
                                        <input name="fotos" className="form-control" type="file" onChange={this.imgHandler} ></input>
                                    </div>
                                    <input value="SIMPAN" className="btn btn-info" type="submit" ></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EAdmin