import React, { Component } from 'react'

class AllAdmin extends Component {
   
    render() {
        const lisProduk = this.props.data.map(data => (
            <tbody key={data.id_admin}>
                <tr>
                    <td> {data.nama_admin} </td>
                    <td> {data.username_admin} </td>
                    <td> {data.email_admin} </td>
                    <td> <img src={'http://localhost/api_olsop_fix/server/asset/img/' + data.foto_admin} width="50" height="50" alt="test" /> </td>
                    <td>
                        <button onClick={()=>this.props.removeHandler(data.id_admin)} className="btn btn-warning">HAPUS</button>
                    </td>
                </tr>
            </tbody>
        ))
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>NAMA ADMIN</th>
                            <th>USERNAME</th>
                            <th>EMAI ADMINL</th>
                            <th>FOTO ADMIN</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    {lisProduk}
                </table>
            </div>
        )
    }
}

export default AllAdmin