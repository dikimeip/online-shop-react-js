import React,{Component} from 'react'
import NavbarA from './NavbarA'

class TambahAdmin extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
        this.dataHandler = this.dataHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    dataHandler = () =>{

    }

    submitHandler = () =>{

    }


    render(){
        return(
            <div>
                <NavbarA/>
                <div className="container">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1>TAMBAH ADMIN</h1>
                        <hr/>
                        <div className="panel panel-default">
                            <div className="panel-body">
                               <form onSubmit={this.submitHandler}>
                                   <div className="form-group">
                                       <label>MASUKAN NAMA USER</label>
                                       <input name="nama" className="form-control" type="text" onChange={this.dataHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>MASUKAN USERNAME USER</label>
                                       <input name="uname" className="form-control" type="text" onChange={this.dataHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>MASUKAN EMAIL USER</label>
                                       <input name="email" className="form-control" type="email" onChange={this.dataHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>MASUKAN PASSWORD USER</label>
                                       <input name="ps1" className="form-control" type="password" onChange={this.dataHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>MASUKAN PASSWORD USER</label>
                                       <input name="ps2" className="form-control" type="password" onChange={this.dataHandler}></input>
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

export default TambahAdmin