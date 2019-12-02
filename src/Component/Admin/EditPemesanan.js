import React, { Component } from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'

class EditPemesanan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            nama: '',
            user: '',
            harga: '',
            ket: ''
        }
        this.dataHandler = this.dataHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    dataHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        API.PutPesan(this.state).then(res=>{
            if (res.status === 1) {
                this.props.history.push('/pemesanana')
            } else {
                console.log('gagal')
            }
        })
    }



    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetPesanId(id).then(res => {
            this.setState({
                id: res.id_pemesanan,
                nama: res.namaproduk,
                user: res.namaproduk,
                harga: res.hargaproduk,
                ket: res.desk_pemesanan
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarA />
                <div className="container">
                    <div className="container">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h1>EDIT PEMESANAN</h1>
                            <hr />
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <form onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <label>NAMA PRODUK</label><br/>
                                            <p><b>{this.state.nama}</b></p>
                                        </div>
                                        <div className="form-group">
                                            <label>NAMA USER</label>
                                            <br/>
                                            <p><b>{this.state.user}</b></p>
                                        </div>
                                        <div className="form-group">
                                            <label>HARGA PRODUK</label>
                                            <br/>
                                            <p><b>{this.state.harga}</b></p>
                                        </div>
                                        <div className="form-group">
                                            <label>KETERANGAN</label>
                                            <select name="ket" className="form-control" onChange={this.dataHandler} >
                                                <option>{this.state.ket}</option>
                                                <option>PROSES PEMBAYARAN</option>
                                                <option>SUDAH DIBAYAR</option>
                                                <option>PROSES KIRIM</option>
                                                <option>SUDAH DIKIRIM</option>
                                            </select>
                                        </div>
                                        <input value="SIMPAN" className="btn btn-info" type="submit" ></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditPemesanan