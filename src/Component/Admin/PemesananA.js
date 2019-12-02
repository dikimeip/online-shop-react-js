import React, { Component } from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'
import DpesanA from './DpesanA'

class PemesananA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesan: []
        }
    }

    handlerRemove = (id) => {
        if (window.confirm('Hapus Akun..??')) {
            API.DeletePemesanan(id).then(res => {
                if (res === 1) {
                    this.getHandler()
                } else {
                    console.log('gagal')
                }
            })
        }
    }

    getHandler = () => {
        API.GetAllPesan().then(res => {
            this.setState({
                pesan: res
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
                    <h1>DAFTAR PEMESANAN</h1>
                    <br />
                    <DpesanA data={this.state.pesan} remove={this.handlerRemove} />
                </div>
            </div>
        )
    }
}

export default PemesananA