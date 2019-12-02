import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class DProdukA extends Component {
    render() {
        const lisProduk = this.props.data.map(data => (
            <tbody key={data.id_produk} >
                <tr>
                    <td> {data.nama_produk} </td>
                    <td> {data.harga_produk} </td>
                    <td> {data.kategori_produk} </td>
                    <td> {data.nama_produk} </td>
                    <td>
                        <Link to={'/detailpa/' + data.id_produk} className="btn btn-info btn-sm">DETAIL</Link>
                        <Link onClick={()=>this.props.remove(data.id_produk)} className="btn btn-warning btn-sm">HAPUS</Link>
                        <Link to={"/editpa/" + data.id_produk} className="btn btn-success btn-sm">EDIT</Link>
                    </td>
                </tr>
            </tbody>
        ))
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>NAMA PRODUK</th>
                            <th>HARGA PRODUK</th>
                            <th>KATEEGORI PRODUK</th>
                            <th>FOTO PRODUK</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    {lisProduk}
                </table>
            </div>
        )
    }
}

export default DProdukA