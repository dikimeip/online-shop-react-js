import React, { Component } from 'react'
import NavbarU from './NavbarU'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class AkunU extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            id : '',
            nama: '',
            alamat: '',
            nohp: '',
            email: '',
            foto: ''
        }
    }
    componentDidMount = () => {
        if (sessionStorage.getItem('isLogin')) {
            const datas = JSON.parse(sessionStorage.getItem('isLogin'))
            this.setState({
                id: datas[0].id_user,
                nama: datas[0].nama_user,
                alamat: datas[0].alamat_user,
                nohp: datas[0].no_hp_user,
                email: datas[0].email_user,
                foto: datas[0].photo_user,
            })
        }
    }
    render() {
        return (
            <div>
                <NavbarU />
                <div className="container">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="panel panel-info">
                            <div className="panel-body">
                                <h1>MY ACCOUNT</h1>
                                <hr />
                                <p><b>NAMA :</b> {this.state.nama}  </p>
                                <p><b>ALAMAT :</b> {this.state.alamat}  </p>
                                <p><b>NO HP :</b> {this.state.nohp}  </p>
                                <p><b>EMAIL :</b> {this.state.email}  </p>
                                <p><img src={'http://localhost/api_olsop_fix/server/asset/img/' + this.state.foto} width="250" height="200" alt="test" /></p>
                                <Link className="btn btn-info" to={'/edituser/'+this.state.id} >EDIT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AkunU