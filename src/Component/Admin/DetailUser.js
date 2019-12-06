import React, { Component } from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'

class DetailUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: "",
            alamat: "",
            nohp: "",
            email: ""
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetUserId(id).then(res => {
            this.setState({
                nama: res.nama_user,
                alamat: res.alamat_user,
                nohp: res.no_hp_user,
                email: res.email_user
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
                        <h1>DETAIL USER</h1>
                        <hr />
                        <div className="panel panel-default">
                            <div className="panel-body">
                                    <div className="form-group">
                                        <label> NAMA USER</label>
                                        <br />
                                        <label><b> {this.state.nama} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> ALAMAT USER</label>
                                        <br />
                                        <label><b> {this.state.alamat} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> NO HP USER</label>
                                        <br />
                                        <label><b> {this.state.nohp} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> EMAIL USER </label>
                                        <br />
                                        <label><b> {this.state.email} </b></label>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailUser