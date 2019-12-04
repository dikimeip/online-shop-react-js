import React,{Component} from 'react'
import NavbarA from './NavbarA'

class TambahAdmin extends Component{
    render(){
        return(
            <div>
                <NavbarA/>
                <div className="container">
                    <h1>TAMBAH ADMIN</h1>
                </div>
            </div>
        )
    }
}

export default TambahAdmin