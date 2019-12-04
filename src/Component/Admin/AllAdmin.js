import React, { Component } from 'react'

class AllAdmin extends Component {
    render() {
        const lisProduk = this.props.data.map(data => (
            <tbody key={data.id_admin}>
                <tr>
                    <td> {data.nama_admin} </td>
                    <td> {data.username_admin} </td>
                    <td> {data.email_admin} </td>
                    <td> {data.foto_admin} </td>
                    <td>
                        
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