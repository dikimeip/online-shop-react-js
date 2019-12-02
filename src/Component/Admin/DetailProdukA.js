import React, { Component } from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'

class DetailProdukA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            nama: '',
            kategori: '',
            harga: '',
            desk: '',
            foto: ''
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetProdukId(id).then(res => {
            this.setState({
                id: res.id_produk,
                nama: res.nama_produk,
                kategori: res.kategori_produk,
                harga: res.harga_produk,
                desk: res.desk_produk,
                foto: res.foto_produk
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
                        <h1>DETAIL PRODUK</h1>
                        <hr />
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label> NAMA PRODUK</label>
                                        <br/>
                                        <label><b> {this.state.nama} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> KATEGORI PRODUK</label>
                                        <br/>
                                        <label><b> {this.state.kategori} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> HARGA PRODUK</label>
                                        <br/>
                                        <label><b> {this.state.harga} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <label> DESKRIPSI PRODUK</label>
                                        <br/>
                                        <label><b> {this.state.desk} </b></label>
                                    </div>
                                    <div className="form-group">
                                        <p><img src={'http://localhost/api_olsop_fix/server/asset/img/' + this.state.foto} width="250" height="200" alt="test" /></p>                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailProdukA