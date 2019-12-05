import React, { Component } from 'react'
import NavbarU from './NavbarU'
import API from '../../ServiceApi/Index'

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : '',
            nama : '',
            alamat : '',
            hp: '',
            email:'',
            foto:''
        }
    }
    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetUserId(id).then(res=>{
            this.setState({
                id : res.id_user,
                nama : res.nama_user,
                alamat : res.alamat_user,
                hp : res.no_hp_user,
                email : res.email_user,
                foto : res.photo_user,
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarU />
                <div className="container">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1>EDIT USER</h1>
                        <hr />
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <label>NAMA USER</label>
                                        <input value={this.state.nama} name="nama" className="form-control" type="text"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>ALAMAT USER</label>
                                        <input value={this.state.alamat} name="username" className="form-control" type="text"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>NO HP</label>
                                        <input value={this.state.hp} name="username" className="form-control" type="text"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>EMAIL</label>
                                        <input value={this.state.email} name="email" className="form-control" type="text" ></input>
                                    </div>
                                    <div className="form-group">
                                        <p><img src={'http://localhost/api_olsop_fix/server/asset/img/' + this.state.foto} width="250" height="200" alt="test" /></p>
                                        <input name="fotos" className="form-control" type="file" ></input>
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

export default EditUser