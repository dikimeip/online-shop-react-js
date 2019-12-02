import React,{Component} from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'

class TProdukA extends Component{
    constructor(props){
        super(props)
        this.state = {
            nama : '',
            kategori : '',
            harga : '',
            desk : '',
            foto : '',
            file : {
                fto:''
            }
        }
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) =>{
        e.preventDefault()
        API.PostImageP(this.state.file.fto,this.state.file.fto.name).then(res=>{
            console.log(res)
        })
        API.PostProduk(this.state).then(res=>{
            if (res.status === 1) {
                this.props.history.push('/produka')
            } else{
                console.log('gagal')
            }
        })
    }

    imgHandler = (e) => {
        this.setState({
            foto: e.target.files[0].name,
            file: {
                fto: e.target.files[0]
            }
        })
    }

    render(){
        return(
            <div>
                 <NavbarA/>
                <div className="container">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1>TAMBAH PRODUK</h1>
                        <hr/>
                        <div className="panel panel-default">
                            <div className="panel-body">
                               <form onSubmit={this.submitHandler}>
                                   <div className="form-group">
                                       <label>MASUKAN NAMA PRODUK</label>
                                       <input name="nama" className="form-control" type="text" onChange={this.dataHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>MASUKAN KATEGORI PRODUK</label>
                                       <input name="kategori" className="form-control" type="text" onChange={this.dataHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>MASUKAN HARGA PRODUK</label>
                                       <input name="harga" className="form-control" type="text" onChange={this.dataHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>MASUKAN DESKRIPSI PRODUK</label>
                                       <input name="desk" className="form-control" type="text" onChange={this.dataHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>MASUKAN FOTO PRODUK</label>
                                       <input name="foto" className="form-control" type="file" onChange={this.imgHandler}></input>
                                   </div>
                                   <input className="btn btn-info" type="submit" value="SIMPAN"></input>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TProdukA