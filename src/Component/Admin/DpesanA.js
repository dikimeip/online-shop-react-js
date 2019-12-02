import React,{Component} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class DpesanA extends Component{
    render(){
        const getData = this.props.data.map(data =>(
            <tbody key={data.id_pemesanan}>
                <tr>
                    <td>{data.namaproduk}</td>
                    <td>{data.hargaproduk}</td>
                    <td>{data.desk_pemesanan}</td>
                    <td>{data.namauser}</td>
                    <td>{data.jumlahp}</td>
                    <td>
                       <button onClick={()=>this.props.remove(data.id_pemesanan)} className="btn btn-warning">HAPUS</button>
                       <Link to={"/editpesan/"+data.id_pemesanan} className="btn btn-info">EDIT</Link>
                    </td>
                </tr>
            </tbody>
        ))
        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>NAMA PRODUK</th>
                            <th>HARGA PRODUK</th>
                            <th>DESK PRODUK</th>
                            <th>NAMA USER</th>
                            <th>JUMLAH PRODUK</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    {getData}
                </table>
            </div>
        )
    }
}

export default DpesanA