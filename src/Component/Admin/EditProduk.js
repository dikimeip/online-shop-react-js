import React, { Component } from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'

class EditProduk extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            nama: '',
            kategori: '',
            harga: '',
            desk: '',
            foto: '',
            fotos : '',
            file : {
                fto:''
            }
        }
        this.dataHandler = this.dataHandler.bind(this)
    }

    dataHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    imgHandler = (e) => {
        this.setState({
            foto: e.target.files[0].name,
            fotos: e.target.files[0].name,
            file: {
                fto: e.target.files[0]
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (this.state.fotos === "") {
            API.PutProduk(this.state).then(res=>{
               if (res.status === 1) {
                   this.props.history.push('/produka')
               }
            })
        } else {
            API.PostImageP(this.state.file.fto,this.state.file.fto.name).then(res=>{
                console.log(res)
            })
            API.PutProduk(this.state).then(res=>{
                if (res.status === 1) {
                    this.props.history.push('/produka')
                }
             })

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
                        <h1>EDIT PRODUK</h1>
                        <hr />
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label>MASUKAN NAMA PRODUK</label>
                                        <input value={this.state.nama} name="nama" className="form-control" type="text" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>MASUKAN KATEGORI PRODUK</label>
                                        <input value={this.state.kategori} name="kategori" className="form-control" type="text" onChange={this.dataHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>MASUKAN HARGA PRODUK</label>
                                        <input value={this.state.harga} name="harga" className="form-control" type="text" onChange={this.dataHandler} ></input>
                                    </div>
                                    <div className="form-group">
                                        <label>MASUKAN DESKRIPSI PRODUK</label>
                                        <input value={this.state.desk} name="desk" className="form-control" type="text" onChange={this.dataHandler} ></input>
                                    </div>
                                    <div className="form-group">
                                         <p><img src={  'http://localhost/api_olsop_fix/server/asset/img/'+ this.state.foto} width="250" height="200" alt="test" /></p>
                                         <input name="fotos" className="form-control" type="file" onChange={this.imgHandler} ></input>
                                    </div>
                                    <input value="SIMPAN" className="btn btn-info" type="submit" ></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProduk