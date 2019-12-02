import React, { Component } from 'react'
import Navbar from './Navbar'
import API from '../ServiceApi/Index'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            nama : '',
            kategori : '',
            harga : '',
            des :'',
            foto :''
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        //console.log(id)
        API.GetProdukId(id).then(res=>{
           // console.log(res)
            this.setState({
                nama : res.nama_produk,
                kategori :res.kategori_produk,
                harga: res.harga_produk,
                des:res.desk_produk,
                foto : 'http://localhost/api_olsop_fix/server/asset/img/'+res.foto_produk
            })
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="panel panel-info">
                            <div className="panel-body">
                                <h1>DETAIL PRODUK</h1>
                                <hr/>
                                <img width="320" height="200" className="img-responsive" src={this.state.foto} alt="name" />
                                <p><b>nama produk : {this.state.nama}</b> </p>
                                <p><b>harga produk : {this.state.harga}</b> </p>
                                <p><b>kategori produk :</b> {this.state.kategori} </p>
                                <p><b>des produk :</b> {this.state.des} </p>
                                <Link className="btn btn-info disabled">BELI</Link>
                                <hr/>
                                <div className="alert alert-danger">
                                    <p>YOU MUST BE LOGIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail