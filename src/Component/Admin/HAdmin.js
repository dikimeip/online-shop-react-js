import React,{Component} from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import API from '../../ServiceApi/Index'

class HAdmin extends Component{
    constructor(props){
        super(props)
        this.state = {
            admin : []
        }
    }
    componentDidMount=()=> {
         API.GetAdmin().then(res=>{
             console.log(res)
         })
    }
    render(){
        return(
            <div>
                <NavbarA/>
                <div className="container">
                    <h1>HALAMAN ADMIN</h1>
                    <br/>
                    <Link className="btn btn-info">TAMBAH ADMIN</Link>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default HAdmin