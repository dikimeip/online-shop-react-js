import React, { Component } from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom'
import API from '../../ServiceApi/Index'
import DProdukA from './DProdukA'


class ProdukA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produk: []
        }
    }

    hapus = (data) => {
        if (window.confirm('Hapus Akun..??')) {
            API.DeleteProduk(data).then(res => {
                if (res === 1) {
                    this.getHandler()
                } else {
                    console.log('gagal')
                }
            })
        }
    }

    getHandler = () => {
        API.GetProduk().then(res => {
            this.setState({
                produk: res
            })
        })
    }

    componentDidMount = () => {
        this.getHandler()
    }

    render() {
        return (
            <div>
                <NavbarA />
                <div className="container">
                    <h1>HALAMAN PRODUK</h1>
                    <Link className="btn btn-info btn-sm" to="/tproduk" >TAMBAH PRODUK</Link>
                    <hr />
                    <DProdukA data={this.state.produk} remove={this.hapus} />
                </div>
            </div>
        )
    }
}

export default ProdukA