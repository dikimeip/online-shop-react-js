import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import API from '../../ServiceApi/Index'


class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : '',
            nama : '',
            username :'',
            email : '',
            foto :''
        }
    }
    componentDidMount = () => {
        const data = JSON.parse(sessionStorage.getItem('isAdmin'))
        this.setState({
            id : data[0].id_admin
        })
        API.GetAdminId(this.state.id).then(res=>{
            this.setState({
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
                        <h1>ADMIN AKUN</h1>
                        <hr />
                        <div className="panel panel-default">
                            <div className="panel-body">
                                    <div className="form-group">
                                        <label> NAMA </label>
                                        <br />
                                        <label><b> {this.state.nama} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> USERNAME </label>
                                        <br />
                                        <label><b> {this.state.username} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> EMAIL </label>
                                        <br />
                                        <label><b> {this.state.email} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> FOTO </label>
                                        <br />
                                        <p><img src={'http://localhost/api_olsop_fix/server/asset/img/' + this.state.foto} width="50" height="50" alt="test" /></p>
                                    </div>
                                    <br/><hr/>
                                    <Link to={'/editadmin/'+this.state.id} className="btn btn-danger">EDIT AKUN</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Index