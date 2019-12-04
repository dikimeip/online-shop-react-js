import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class DUsera extends Component {
    render() {
        const lisProduk = this.props.data.map(data => (
            <tbody key={data.id_user} >
                <tr>
                    <td> {data.nama_user} </td>
                    <td> {data.alamat_user} </td>
                    <td> {data.email_user} </td>
                    <td> {data.no_hp_user} </td>
                    <td>
                        <Link to={"/detailuser/"+data.id_user} className="btn btn-info btn-sm">DETAIL</Link>
                        <Link onClick={()=>this.props.remove(data.id_user)} className="btn btn-warning btn-sm">HAPUS</Link>
                    </td>
                </tr>
            </tbody>
        ))
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>NAMA USER</th>
                            <th>ALAMAT USER</th>
                            <th>EMAIL USER</th>
                            <th>HP USER</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    {lisProduk}
                </table>
            </div>
        )
    }
}

export default DUsera